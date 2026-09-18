import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { run, validate } from './publish-blogs.mjs';

const slug = 'test-automation-pilot';
const post = JSON.parse(await readFile(`content/blogs/${slug}.json`, 'utf8'));
validate(post);
const token = process.env.SANITY_API_WRITE_TOKEN;
assert(token, 'SANITY_API_WRITE_TOKEN is required');
const query = encodeURIComponent(`*[_type == "blog" && (slug.current == "${slug}" || _id == "blog-${slug}" || _id == "drafts.blog-${slug}")][0]._id`);
const lookup = await fetch(`https://9unwnnri.api.sanity.io/v2025-02-19/data/query/production?query=${query}`, { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(30000) });
assert(lookup.ok, `Sanity lookup failed: HTTP ${lookup.status}`);
if ((await lookup.json()).result) {
  console.log(`Skipped existing article or draft: ${slug}`);
  process.exit(0);
}
const upload = await fetch(`https://9unwnnri.api.sanity.io/v2025-02-19/assets/images/production?filename=${slug}.webp`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'image/webp' },
  body: await readFile(`content/blogs/assets/${slug}.webp`),
  signal: AbortSignal.timeout(60000),
});
assert(upload.ok, `Cover upload failed: HTTP ${upload.status}`);
const asset = (await upload.json()).document;
assert(asset?._id?.startsWith('image-'), 'Missing image asset ID');
post.coverImage = { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, alt: 'A four-stage automation pilot workflow showing input, processing, approval and monitoring' };
const directory = await mkdtemp(join(tmpdir(), 'nevara-publish-'));
try {
  await writeFile(join(directory, `${slug}.json`), JSON.stringify(post));
  await run('publish', fetch, directory);
} finally {
  await rm(directory, { recursive: true });
}