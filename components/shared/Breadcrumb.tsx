"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Schema.org BreadcrumbList markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://latitude-organisation.com"}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 border-b border-white/5 bg-latitude-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ol className="flex items-center gap-1 text-sm">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight
                    size={16}
                    className="text-white/30 mx-1"
                    aria-hidden="true"
                  />
                )}
                {item.current ? (
                  <span className="font-inter text-white/60">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-inter text-white/50 hover:text-latitude-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
