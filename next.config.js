/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "https://consumer-component-library.roocdn.com"
  }]
  }
}

module.exports = nextConfig
