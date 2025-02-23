import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Keep this for static export
  images: {
    unoptimized: true, // ✅ Disable image optimization for static export
  },
};

export default nextConfig;
