export const BLOG_LIST_QUERY = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url
  }
`;

export const SINGLE_BLOG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url,
    content,
    metaTitle,
    metaDescription
  }
`;

export const NEWS_LIST_QUERY = `
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url
  }
`;

export const SINGLE_NEWS_QUERY = `
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url,
    content
  }
`;

export const JOB_LIST_QUERY = `
*[_type == "job"] | order(postedAt desc) {
  _id,
  title,
  "slug": slug.current,
  status,
  type,
  location,
  shortDescription,
  postedAt
}
`;

export const SINGLE_JOB_QUERY = `
  *[_type == "job" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    status,
    type,
    location,
    shortDescription,
    description,
    requirements,
    responsibilities,
    postedAt
  }
`;


