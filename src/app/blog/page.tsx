import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/cms";

export default async function BlogPage() {
  const posts = await getBlogs();

  if (!posts || posts.length === 0) {
    return (
      <div className="w-full py-20 px-6 text-center text-gray-500 dark:text-gray-300">
        No blogs available yet.
      </div>
    );
  }

  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-16">
        Nevara Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts
          .filter((post: any) => post !== null && post !== undefined)
          .map((post: any, index: number) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}
      </div>
    </div>
  );
}
