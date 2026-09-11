import { readdir, readFile, writeFile, mkdtemp, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { run, validate } from './publish-blogs.mjs';

const token = process.env.SANITY_API_WRITE_TOKEN;
assert(token, 'SANITY_API_WRITE_TOKEN is required');
const base = 'https://9unwnnri.api.sanity.io/v2025-02-19';
const files = (await readdir('content/blogs')).filter(name => name.endsWith('.json')).sort();

for (const file of files) {
  const post = JSON.parse(await readFile(`content/blogs/${file}`, 'utf8'));
  validate(post);
  if (Date.parse(post.publishedAt) > Date.now()) continue;
  const slug = post.slug.current;
  const query = encodeURIComponent(`*[_type == "blog" && (slug.current == "${slug}" || _id == "blog-${slug}" || _id == "drafts.blog-${slug}")][0]._id`);
  const existing = await fetch(`${base}/data/query/production?query=${query}`, { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(30000) });
  assert(existing.ok, `Sanity lookup failed for ${slug}: HTTP ${existing.status}`);
  if ((await existing.json()).result) {
    console.log(`Skipped existing article or draft: ${slug}`);
    continue;
  }
  const coverPath = `content/blogs/assets/${slug}.webp`;
  await access(coverPath);
  const upload = await fetch(`${base}/assets/images/production?filename=${slug}.webp`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'image/webp' },
    body: await readFile(coverPath),
    signal: AbortSignal.timeout(60000),
  });
  assert(upload.ok, `Cover upload failed for ${slug}: HTTP ${upload.status}`);
  const asset = (await upload.json()).document;
  assert(asset?._id?.startsWith('image-'), `Missing image asset ID for ${slug}`);
  post.coverImage = { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, alt: 'A business workflow map with review, approval, delivery and measurement steps connected across a navy desk' };
  const directory = await mkdtemp(join(tmpdir(), 'nevara-publish-'));
  try {
    await writeFile(join(directory, file), JSON.stringify(post));
    await run('publish', fetch, directory);
  } finally {
    await rm(directory, { recursive: true });
  }
}
