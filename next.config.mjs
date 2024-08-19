/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROD_URL: process.env.PROD_URL,
    DEV_URL: process.env.DEV_URL,
  },
};

export default nextConfig;
