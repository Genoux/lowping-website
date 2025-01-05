import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: 'oroqkwktxvuxkwoszubb.supabase.co',
      },
    ],
  },
}

export default nextConfig
