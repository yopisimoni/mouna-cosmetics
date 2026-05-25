import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mounacosmetics.com";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/shop", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/shop/lips", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/shop/eyes", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/shop/face", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/shop/skin-body", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/product/lip-gloss", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/coming-soon", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-of-use", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
