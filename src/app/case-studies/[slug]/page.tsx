import { initialCaseStudies } from "@/lib/case-studies-data";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import CaseStudyClient from "./CaseStudyClient";

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
