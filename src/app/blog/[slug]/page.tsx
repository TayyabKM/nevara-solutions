import { getBlogBySlug } from "@/lib/cms";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogBackground from "@/components/BlogBackground";

export const dynamic = "force-dynamic";


// ✅ Dynamic SEO metadata
export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Nevara",
      description: "This article does not exist.",
    };
  }

  return {
    title: `${post.metaTitle || post.title} | Nevara Blog`,
    description: post.metaDescription || post.excerpt || "Read insights from Nevara Solutions.",
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://www.nevarasolutions.com/blog/${slug}`,
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
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetail({ params }: any) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

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
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target={rel ? "_blank" : undefined}
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      <BlogBackground />
      <div className="w-full pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-black dark:text-white mb-6 text-center">
            {post.title}
          </h1>

          {/* Date */}
          <p className="text-sm text-gradient mb-6 text-center">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </p>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="max-w-3xl mx-auto rounded-lg overflow-hidden mb-12 shadow-xl border border-gray-200 dark:border-gray-800">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose dark:prose-invert max-w-3xl mx-auto px-2">
            <PortableText value={post.content} components={components} />
          </div>
        </div>
      </div>
    </div>
  );
}
