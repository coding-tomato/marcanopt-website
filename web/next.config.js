/** @type {import('next').NextConfig} */
const nextConfig = {
  reactstrictmode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ["cdn.sanity.io"],
  }
}
