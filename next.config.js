/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SQUIDEX_API_URL: process.env.SQUIDEX_API_URL,
    SQUIDEX_IMAGE_API_URL: process.env.SQUIDEX_IMAGE_API_URL,
    SQUIDEX_API_TOKEN: process.env.SQUIDEX_API_TOKEN,
    SQUIDEX_CLIENT_ID: process.env.SQUIDEX_CLIENT_ID,
    SQUIDEX_CLIENT_SECRET: process.env.SQUIDEX_CLIENT_SECRET,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'firebasestorage.googleapis.com',
      'cloud.squidex.io',
    ]
  }
}

module.exports = nextConfig
