import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { run, validate } from './publish-blogs.mjs';

const slug = 'ai-automation-small-business-first-workflow';
const post = JSON.parse(await readFile(`content/blogs/${slug}.json`, 'utf8'));
validate(post);
const token = process.env.SANITY_API_WRITE_TOKEN;
assert(token, 'SANITY_API_WRITE_TOKEN is required');
const response = await fetch('https://9unwnnri.api.sanity.io/v2025-02-19/assets/images/production?filename=first-ai-workflow.webp', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'image/webp' },
  body: await readFile('content/blogs/assets/first-ai-workflow.webp'),
  signal: AbortSignal.timeout(60000),
});
assert(response.ok, `Cover upload failed: HTTP ${response.status}`);
const asset = (await response.json()).document;
assert(asset?._id?.startsWith('image-'), 'Missing image asset ID');
post.coverImage = { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, alt: 'Document cards connected through blue and green workflow blocks on a navy desk' };
const directory = await mkdtemp(join(tmpdir(), 'nevara-publish-'));
try {
  await writeFile(join(directory, `${slug}.json`), JSON.stringify(post));
  await run('publish', fetch, directory);
} finally {
  await rm(directory, { recursive: true });
}
