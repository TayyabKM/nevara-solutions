"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post, index }: any) {
  const imageUrl = post?.coverImage;

  return (
    <motion.div
      className="relative flex flex-col p-8 bg-gray-200/40 dark:bg-gray-800/50 border border-white/10
      backdrop-blur-xl rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Safe Image */}
      {imageUrl ? (
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src={imageUrl}
            alt={post.title}
            width={800}
            height={500}
            className="w-full h-48 object-cover"
          />
        </div>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md bg-gray-300/30 dark:bg-gray-700/30 flex items-center justify-center h-48">
          <span className="text-gray-600 dark:text-gray-300 text-sm">No Image</span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-bold text-black dark:text-white mt-4">
        {post.title}
      </h3>

      {/* Date */}
      <p className="text-sm text-gradient mt-1">
        {post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString()
          : "No date"}
      </p>

      {/* Excerpt */}
      <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
        {post.excerpt || "No summary available."}
      </p>

      <Link href={`/blog/${post.slug?.current ?? ""}`}>
        <button
          className="mt-6 px-4 py-2 max-w-[200px] text-center bg-gradient-to-r from-blue-500 to-purple-500 
          text-white font-medium text-sm md:text-base rounded-md shadow-md 
          transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 self-start"
        >
          Read More
        </button>
      </Link>
    </motion.div>
  );
}
