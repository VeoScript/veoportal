/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'firebasestorage.googleapis.com',
    ]
  }
}

module.exports = nextConfig
