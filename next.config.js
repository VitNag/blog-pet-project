/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        workerThreads: false, cpus: 1
    }, reactStrictMode: true,
}

module.exports = nextConfig