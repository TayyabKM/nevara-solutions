import NewsCard from "@/components/NewsCard";
import { getNews } from "@/lib/cms";

export default async function NewsPage() {
  const posts = await getNews();

  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-16">
        Latest News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post: any, index: number) => (
          <NewsCard key={post._id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
