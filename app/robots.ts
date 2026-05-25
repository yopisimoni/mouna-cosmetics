import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO: Replace with real domain when custom domain is set up
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mouna-cosmetics.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
