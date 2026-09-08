import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validate, run } from './publish-blogs.mjs';

const post = { title: 'Test', slug: { current: 'test-post' }, excerpt: 'Excerpt', metaTitle: 'Title', metaDescription: 'Description', publishedAt: '2026-01-01T00:00:00Z', content: [{ _type: 'block', children: [{ _type: 'span', text: 'Body' }] }] };
test('validates content and rejects unsafe links', () => {
  assert.equal(validate({ ...post, _id: 'someone-else', _type: 'job' })._id, 'blog-test-post');
  assert.throws(() => validate({ ...post, content: [] }));
  assert.throws(() => validate({ ...post, content: [{ ...post.content[0], markDefs: [{ _type: 'link', href: 'javascript:alert(1)' }] }] }));
});
test('dry run never saves; publish skips existing and future posts; new posts are verified', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'nevara-test-'));
  const old = process.env.SANITY_API_WRITE_TOKEN;
  process.env.SANITY_API_WRITE_TOKEN = 'test-only';
  try {
    await writeFile(join(dir, 'post.json'), JSON.stringify(post));
    const calls = [];
    let exists = false;
    const mock = async (url, options) => {
      calls.push({ url, options });
      if (url.includes('mutate') && !url.includes('dryRun=true')) exists = true;
      return { ok: true, json: async () => ({ result: exists ? [{ _id: 'blog-test-post' }] : [] }) };
    };
    await run('check', mock, dir);
    assert.equal(calls.length, 1);
    assert.match(calls[0].url, /dryRun=true/);
    await run('publish', mock, dir);
    assert.equal(calls.filter(c => c.url.includes('mutate') && !c.url.includes('dryRun')).length, 1);
    await run('publish', mock, dir);
    assert.equal(calls.filter(c => c.url.includes('mutate') && !c.url.includes('dryRun')).length, 1);
    await writeFile(join(dir, 'post.json'), JSON.stringify({ ...post, publishedAt: '2999-01-01T00:00:00Z' }));
    await run('publish', mock, dir);
    assert.equal(calls.filter(c => c.url.includes('mutate') && !c.url.includes('dryRun')).length, 1);
    await assert.rejects(run('check', async () => ({ ok: false, status: 403 }), dir), /HTTP 403/);
  } finally {
    if (old === undefined) delete process.env.SANITY_API_WRITE_TOKEN;
    else process.env.SANITY_API_WRITE_TOKEN = old;
    await rm(dir, { recursive: true });
  }
});
