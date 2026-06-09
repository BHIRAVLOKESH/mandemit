import BlogClient from "./BlogClient";

// Add generateStaticParams for static export support
export async function generateStaticParams() {
    // For static export, we need to define at least some paths
    // or provide a list of all posts.
    return [
        { slug: 'seo-trends-2025' },
        { slug: 'social-media-engagement' },
        { slug: 'content-strategy-growth' },
        { slug: 'google-ads-optimization' },
        { slug: 'web-dev-conversion' },
        { slug: 'influencer-marketing-roi' }
    ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return <BlogClient params={params} />;
}
