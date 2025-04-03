/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROD_URL: process.env.PROD_URL,
    DEV_URL: process.env.DEV_URL,
    PROMOTION_FLAG: process.env.PROMOTION_FLAG,
  },
};

export default nextConfig;
