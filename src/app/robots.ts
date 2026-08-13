import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/admin/", "/api/"],
            },
        ],
        sitemap: "https://mandemit.com/sitemap.xml",
        host: "https://mandemit.com",
    };
}
