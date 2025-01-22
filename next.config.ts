import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'], // avif 변환, 해당 형식 지원 안하는 경우 webp 변환,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.totalwine.com',
        pathname: '/media/sys_master/twmmedia/**', // 해당 경로를 포함하는 패턴
      },
      {
        protocol: 'https',
        hostname: 'www.totalwine.com',
        pathname: '/media/sys_master/cmsmedia/**', // 해당 경로를 포함하는 패턴
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/photo/**', // 해당 경로를 포함하는 패턴
      },
    ],
  },
};

export default nextConfig;
