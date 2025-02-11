import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // redirects: async () => [{
  //   source: "/components",
  //   destination: "/components/button",
  //   permanent: true, // Set to false for temporary redirect (302)
  // }],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Replace with your image host domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.flaticon.com", // Replace with your image host domain
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com", // Replace with your image host domain
      }, {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Replace with your image host domain
      },
    ],
    domains: ["images.unsplash.com", "img.daisyui.com", "www.flaticon.com", "lh3.googleusercontent.com"], // Alternative method (simpler)
  },

};

export default nextConfig;
