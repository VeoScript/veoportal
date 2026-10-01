/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 75, 90, 100],
  },
  env: {
    PROD_URL: process.env.PROD_URL,
    DEV_URL: process.env.DEV_URL,
    PROMOTION_FLAG: process.env.PROMOTION_FLAG,
  },
};

export default nextConfig;
