import { getBlogBySlug } from "@/lib/cms";
import Image from "next/image";

export default async function BlogDetail({ params }: any) {
  const post = await getBlogBySlug(params.slug);

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-48">
      {/* Title */}
      <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-sm text-gradient mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Cover */}
      {post.coverImage && (
        <div className="rounded-lg overflow-hidden mb-8 shadow-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={700}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        {/* Sanity content is portable text */}
        {post.content?.map((block: any, index: number) => {
          if (block._type === "block") {
            return <p key={index}>{block.children?.map((c: any) => c.text).join("")}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
