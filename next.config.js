/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/api:path*',
                destination: 'https://en.wikipedia.org/w/api.php:path*',
            },
        ];
    },

}

module.exports = nextConfig
