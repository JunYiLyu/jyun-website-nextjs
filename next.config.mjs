import createMDX from '@next/mdx'
import remarkPrism from 'remark-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkPrism],
    }
})

export default withMDX(nextConfig);