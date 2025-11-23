import BlogCard from "@/components/BlogCard";
import BlogHero from "@/components/BlogHero";
import { getBlogs } from "@/lib/cms";

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className="w-full">
      <BlogHero />

      <div className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any, index: number) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
