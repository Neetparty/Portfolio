/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  //appDir: true,
  experimental: {
    serverActions : true,
  },
}

module.exports = nextConfig
