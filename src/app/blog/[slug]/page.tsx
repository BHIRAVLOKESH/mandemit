import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Blog Post | MandemIT",
    description: "Read the latest digital marketing insights, tips and strategies from MandemIT - Vizag's top digital marketing agency.",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return <BlogClient params={params} />;
}
