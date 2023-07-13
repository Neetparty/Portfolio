/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  experimental: {
    appDir: true,
    serverActions: true
  },
  env: {
    HOST_API: process.env.HOST_API,
  }
}

module.exports = nextConfig
