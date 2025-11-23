import { getBlogBySlug } from "@/lib/cms";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


// ✅ Dynamic SEO metadata
export async function generateMetadata({ params }: any) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Not Found | Nevara",
      description: "This article does not exist.",
    };
  }

  return {
    title: `${post.title} | Nevara Blog`,
    description: post.excerpt ?? "Read insights from Nevara Solutions.",
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.nevarasolutions.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetail({ params }: any) {
  const post = await getBlogBySlug(params.slug);

  if (!post) return <div>Post not found.</div>;

  const components = {
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 space-y-2">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-6 space-y-2">{children}</ol>
      ),
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold my-6">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-semibold my-4">{children}</h3>
      ),
      normal: ({ children }: any) => (
        <p className="leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300 my-4">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <div className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-48">
      {/* Title */}
      <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-sm text-gradient mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Cover Image */}
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
        <PortableText value={post.content} components={components} />
      </div>
    </div>
  );
}
