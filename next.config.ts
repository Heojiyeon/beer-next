import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
