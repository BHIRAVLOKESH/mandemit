import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
    title: "Case Study | MandemIT",
    description: "Explore real results and success stories from MandemIT - Visakhapatnam's leading digital marketing agency.",
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    return <CaseStudyClient params={params} />;
}
