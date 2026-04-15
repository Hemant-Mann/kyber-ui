import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@kyber/dashboard-kit"],
};

export default nextConfig;
