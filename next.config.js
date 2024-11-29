/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['github.com'], // 添加 github.com 到 domains 数组
  },
};

module.exports = nextConfig;