import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photos are pulled from Unsplash for now.
    // When the admin panel lands, swap these for the CMS/upload host.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
