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
    content
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
