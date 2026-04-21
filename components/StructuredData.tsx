import {
  generateOrganizationSchema,
  generateServicesSchema,
  generateFAQSchema,
  generateReviewsSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { faqItems, testimonials } from "@/lib/data";

export default function StructuredData() {
  const organizationSchema = generateOrganizationSchema();
  const servicesSchema = generateServicesSchema();
  const faqSchema = generateFAQSchema(faqItems);
  const reviewsSchema = generateReviewsSchema(testimonials);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "https://www.latitude-organisation.com" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {servicesSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {reviewsSchema.map((schema, i) => (
        <script
          key={`review-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
