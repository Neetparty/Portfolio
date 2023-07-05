/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions : true,
    output: 'export',
  },
}

module.exports = nextConfig
