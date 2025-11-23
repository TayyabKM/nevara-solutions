import { client } from "@/sanity/lib/client";
import {
  BLOG_LIST_QUERY,
  SINGLE_BLOG_QUERY,
  NEWS_LIST_QUERY,
  SINGLE_NEWS_QUERY,
} from "@/sanity/lib/queries";

const USE_SANITY = true; // future switch point

export async function getBlogs() {
  if (USE_SANITY) return client.fetch(BLOG_LIST_QUERY);
  return []; // Firestore version later
}

export async function getBlogBySlug(slug: string) {
  if (USE_SANITY) return client.fetch(SINGLE_BLOG_QUERY, { slug });
  return null;
}

export async function getNews() {
  if (USE_SANITY) return client.fetch(NEWS_LIST_QUERY);
  return [];
}

export async function getNewsBySlug(slug: string) {
  if (USE_SANITY) return client.fetch(SINGLE_NEWS_QUERY, { slug });
  return null;
}
