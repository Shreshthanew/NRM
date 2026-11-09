import type { NextConfig } from "next";

// URL of the Express backend. Set BACKEND_URL in production (e.g. https://your-api.onrender.com).
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
