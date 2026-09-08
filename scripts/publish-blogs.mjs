import { readdir, readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

export function validate(post) {
  assert(post && typeof post === 'object', 'Expected a blog object');
  for (const key of ['title', 'excerpt', 'metaTitle', 'metaDescription', 'publishedAt']) {
    assert(typeof post[key] === 'string' && post[key].trim(), `Missing ${key}`);
  }
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug?.current), 'Invalid slug');
  assert(post.slug.current.length <= 96, 'Slug too long');
  assert(Number.isFinite(Date.parse(post.publishedAt)), 'Invalid publication date');
  assert(Array.isArray(post.content) && post.content.length, 'Content is required');
  for (const block of post.content) {
    assert(block._type === 'block' && Array.isArray(block.children) && block.children.length, 'Expected Portable Text blocks');
    for (const span of block.children) assert(span._type === 'span' && typeof span.text === 'string', 'Invalid text span');
    for (const mark of block.markDefs || []) {
      assert(mark._type === 'link' && typeof mark.href === 'string' && /^(https?:\/\/|\/(?!\/))/.test(mark.href), 'Invalid link');
    }
  }
  const doc = { _id: `blog-${post.slug.current}`, _type: 'blog' };
  for (const key of ['title', 'slug', 'excerpt', 'metaTitle', 'metaDescription', 'publishedAt', 'content', 'tags', 'coverImage']) {
    if (post[key] !== undefined) doc[key] = post[key];
  }
  return doc;
}

export async function run(mode = 'validate', fetcher = fetch, directory = 'content/blogs') {
  assert(['validate', 'check', 'publish'].includes(mode), 'Invalid mode');
  const files = (await readdir(directory)).filter(name => name.endsWith('.json')).sort();
  const docs = [];
  for (const name of files) docs.push(validate(JSON.parse(await readFile(`${directory}/${name}`, 'utf8'))));
  assert(new Set(docs.map(doc => doc._id)).size === docs.length, 'Duplicate slugs in content files');
  console.log(`Validated ${docs.length} blog file(s).`);
  if (mode === 'validate') return;
  const token = process.env.SANITY_API_WRITE_TOKEN;
  assert(token, 'Missing SANITY_API_WRITE_TOKEN repository secret');
  const base = 'https://9unwnnri.api.sanity.io/v2025-02-19/data';
  async function request(path, body) {
    const response = await fetcher(`${base}/${path}`, {
      method: body ? 'POST' : 'GET',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      ...(body ? { body: JSON.stringify(body) } : {}),
      signal: AbortSignal.timeout(30000),
    });
    assert(response.ok, `Sanity request failed (HTTP ${response.status}); check token permissions and dataset.`);
    return response.json();
  }
  // A server-side dry run checks write access without creating a test article.
  await request('mutate/production?dryRun=true', { mutations: [{ create: { _type: 'blog', title: 'Publishing connection check' } }] });
  console.log('Sanity write-access dry run succeeded; no test article was saved.');
  if (mode === 'check') return;
  for (const doc of docs) {
    if (Date.parse(doc.publishedAt) > Date.now()) {
      console.log(`Skipped future post: ${doc.slug.current}`);
      continue;
    }
    const query = '*[_type == "blog" && (slug.current == $slug || _id == $id || _id == $draft)]{_id}';
    const params = new URLSearchParams({ query, '$slug': JSON.stringify(doc.slug.current), '$id': JSON.stringify(doc._id), '$draft': JSON.stringify(`drafts.${doc._id}`), perspective: 'raw' });
    const existing = await request(`query/production?${params}`);
    if (existing.result.length) {
      console.log(`Skipped existing article or draft: ${doc.slug.current}. Edit existing content through Sanity.`);
      continue;
    }
    await request('mutate/production?visibility=sync&autoGenerateArrayKeys=true', { mutations: [{ create: doc }] });
    const saved = await request(`query/production?${params}`);
    assert(saved.result.some(item => item._id === doc._id), 'Could not verify saved blog');
    console.log(`Published and verified in Sanity: https://www.nevarasolutions.com/blog/${doc.slug.current}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run(process.argv[2]).catch(error => { console.error(error.message); process.exitCode = 1; });
}
