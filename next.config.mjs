/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.example.com',
                port: '',
            },
        ],
    },
};


export default nextConfig;
