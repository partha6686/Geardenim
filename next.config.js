/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.customelements.in", "i.pinimg.com", "www.store4riders.com"],
  },
  env: {
    HOST: process.env.HOST,
  },
};

module.exports = nextConfig;
