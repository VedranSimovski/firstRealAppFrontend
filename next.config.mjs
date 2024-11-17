/** @type {import('next').NextConfig} */
const nextConfig = {

  env: {
    NEXT_PUBLIC_CLIENT_BACKEND_URL: process.env.NEXT_PUBLIC_CLIENT_BACKEND_URL
  },

};

export default nextConfig;
