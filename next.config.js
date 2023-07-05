/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  appDir: true,
  experimental: {
    serverActions : false,
  },
}

module.exports = nextConfig
