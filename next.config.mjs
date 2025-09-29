/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@material-tailwind/react'],
  images: {
  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fitno-server.liara.run',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
