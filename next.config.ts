import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // avif 변환, 해당 형식 지원 안하는 경우 webp 변환,
    domains: ['www.totalwine.com'],
  },
};

export default nextConfig;
