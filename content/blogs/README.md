# Blog publishing

Sanity project: `9unwnnri`. Dataset: `production`.

Store new articles as JSON files here using the existing Sanity blog schema: title, slug ({"_type":"slug","current":"article-slug"}), excerpt, publishedAt (ISO timestamp), content (Portable Text blocks), metaTitle, metaDescription, optional tags and coverImage (Sanity image reference). These files are public in this repository. Never include credentials or confidential client information.

Run `node scripts/publish-blogs.mjs validate` locally. Pull requests validate without secrets. Pushes check the token using Sanity's mutation dryRun option; no test content is created.

After this workflow is on the default branch, use GitHub Actions > Sanity blog publishing > Run workflow. Select `check` to verify access or `publish` to publish new articles. The token comes from the `SANITY_API_WRITE_TOKEN` Actions repository secret.

Publishing skips future dates and existing slugs/IDs, including drafts. It never replaces or deletes existing articles. Future-dated files need another publish run after their date; there is no schedule. Existing article edits are made through Sanity. A successful run verifies the document in Sanity; check the live URL separately for site rendering and metadata.

No articles are included in the initial setup. Research and prepare content before using publish mode.
