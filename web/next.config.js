/** @type {import('next').NextConfig} */
const nextconfig = {
  reactstrictmode: true,;
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ["cdn.sanity.io"];
  }
}
