export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import {
  expertiseDetails,
  blogArticles,
  activities,
  soireeEvents,
  incentiveItems,
} from "@/lib/content";

const BASE_URL = "https://www.latitude-organisation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const expertisePages = expertiseDetails.map((expertise) => ({
    url: `${BASE_URL}/expertises/${expertise.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const activityPages = activities.map((a) => ({
    url: `${BASE_URL}/expertises/team-building/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const soireePages = soireeEvents.map((s) => ({
    url: `${BASE_URL}/expertises/soirees-evenementielles/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const incentivePages = incentiveItems.map((i) => ({
    url: `${BASE_URL}/expertises/seminaires-incentives/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/qui-sommes-nous`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE_URL}/expertises`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/expertises/seminaires-incentives`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    ...expertisePages,
    ...activityPages,
    ...soireePages,
    ...incentivePages,
    { url: `${BASE_URL}/sejours`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/nouveautes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogPages,
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/testimonials`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cgv`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
