import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Replace with your image host domain
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com", // Replace with your image host domain
      },
    ],
    domains: ["images.unsplash.com", "img.daisyui.com"], // Alternative method (simpler)
  },

};

export default nextConfig;
