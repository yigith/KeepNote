/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiUrl: "https://keepnoteapi.kod.fun/api/notes"
  },
  output: "export",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
