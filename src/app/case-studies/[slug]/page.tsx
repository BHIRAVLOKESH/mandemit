import type { Metadata } from "next";
import { initialCaseStudies } from "@/lib/case-studies-data";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import CaseStudyClient from "./CaseStudyClient";

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const study = initialCaseStudies.find((s) => s.slug === params.slug);
    if (!study) {
        return { title: "Case Study | MandemIT" };
    }
    return {
        title: `${study.title} | MandemIT Case Study`,
        description: study.about,
        alternates: { canonical: `https://mandemit.com/case-studies/${study.slug}` },
        openGraph: {
            title: `${study.title} | MandemIT`,
            description: study.about,
            url: `https://mandemit.com/case-studies/${study.slug}`,
            siteName: "MandemIT",
            images: [{ url: study.image || "/mandemit.png", width: 1200, height: 630, alt: study.title }],
            type: "article",
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: `${study.title} | MandemIT`,
            description: study.about,
            images: [study.image || "/mandemit.png"],
        },
    };
}


// Add generateStaticParams for static export support
export async function generateStaticParams() {
    // 1. Start with hardcoded studies
    const paths = initialCaseStudies.map(study => ({
        slug: study.slug,
    }));

    // 2. Attempt to fetch dynamic studies from Firebase
    try {
        const querySnapshot = await getDocs(collection(db, "case_studies"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.slug) {
                // Extract only the last segment to avoid path conflicts
                let cleanSlug = data.slug.split('/').filter(Boolean).pop() || data.slug;
                cleanSlug = cleanSlug.replace(/^\/+|\/+$/g, '');

                if (cleanSlug && !paths.find(p => p.slug === cleanSlug)) {
                    paths.push({ slug: cleanSlug });
                }
            }

        });
    } catch (error) {
        console.error("Error fetching case study slugs for static generation:", error);
    }

    return paths;
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    return <CaseStudyClient params={params} />;
}
