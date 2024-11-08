/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  i18n,
  // output: 'export',
  async rewrites() {
    return [
      {
        source: '/:locale(th|en|zh)/assets/:path*',
        destination: '/assets/:path*',
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
