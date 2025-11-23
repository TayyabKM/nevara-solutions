export const metadata = {
  metadataBase: new URL("https://www.nevarasolutions.com"),
  title: "Nevara News | Company Updates & Announcements",
  description:
    "Stay updated with Nevara Solutions — latest company news, milestones, achievements, partnerships, and important announcements from our global operations.",
  alternates: {
    canonical: "/news",
  },
};

import NewsCard from "@/components/NewsCard";
import NewsHero from "@/components/NewsHero";
import { getNews } from "@/lib/cms";

export default async function NewsPage() {
  const posts = await getNews();

  return (
    <div className="w-full">
      <NewsHero />

      <div className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any, index: number) => (
            <NewsCard key={post._id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
