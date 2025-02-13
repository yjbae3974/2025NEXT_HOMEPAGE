/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        optimizePackageImports: true, // Next.js 자체 최적화
    },
    webpack(config) {
        config.optimization.splitChunks = {
            chunks: "all",
            minSize: 20000, // 최소 청크 크기 조절 (번들 크기 줄이기)
        };
        return config;
    },
    async redirects() {
        return [];
    },
};

module.exports = nextConfig;
