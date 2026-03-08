import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@rozel/ui', '@rozel/types', '@rozel/utils']
};

export default nextConfig;
