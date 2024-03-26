const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "next export",
};

module.exports = nextConfig;
