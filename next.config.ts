import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // URL stays as /batch1 in the browser (no redirect)
        // /batch1 → internally serves /dashboard/practice/1
        // /batch2 → internally serves /dashboard/practice/2  etc.
        source: '/batch:id(\\d+)',
        destination: '/dashboard/practice/:id',
      },
    ]
  },
};

export default nextConfig;
