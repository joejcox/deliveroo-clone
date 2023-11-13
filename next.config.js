/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            hostname: "img2.storyblok.com",
        },
    ],
    },
}

module.exports = nextConfig
