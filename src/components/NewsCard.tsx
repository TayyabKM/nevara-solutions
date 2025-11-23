"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ post, index }: any) {
  return (
    <motion.div
      className="relative flex flex-col bg-gray-200/40 dark:bg-gray-800/50 
      border border-white/10 backdrop-blur-xl rounded-lg shadow-lg 
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Cover Image — full width, flush to border */}
      {post.coverImage && (
        <div className="overflow-hidden rounded-t-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={500}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Content Wrapper (adds padding) */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-black dark:text-white">
          {post.title}
        </h3>

        <p className="text-sm text-gradient mt-1">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
          {post.excerpt || "No summary available."}
        </p>

        <Link href={`/news/${post.slug.current}`}>
          <button
            className="mt-6 px-4 py-2 max-w-[200px] bg-gradient-to-r 
            from-blue-500 to-purple-500 text-white font-medium 
            rounded-md shadow-md transition-all duration-300 
            group-hover:shadow-lg group-hover:scale-105"
          >
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
