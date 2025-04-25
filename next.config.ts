import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Optional, only if you're using basic <img> tags instead of <Image />
  },
};

export default nextConfig;
