/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@material-tailwind/react'],
  images: {
  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'server.myfitno.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig;
