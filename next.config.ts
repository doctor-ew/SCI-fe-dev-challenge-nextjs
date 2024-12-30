import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['cdn.swu-db.com'], 
    formats: ['image/webp', 'image/avif'], 
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
