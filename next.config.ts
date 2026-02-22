import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    domains: ["images.unsplash.com"],
  },

  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right", // optional
  },
};

export default nextConfig;