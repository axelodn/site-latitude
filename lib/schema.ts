const BASE_URL = "https://www.latitude-organisation.com";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "Latitude Organisation",
    alternateName: "Latitude Org",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.webp`,
      width: 300,
      height: 60,
    },
    description:
      "Agence événementielle B2B française spécialisée dans l'organisation de séminaires, soirées et team-building depuis plus de 20 ans.",
    foundingDate: "2004",
    telephone: "+33-6-86-70-65-20",
    email: "jerome@latitude-organisation.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Virement bancaire, chèque",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    sameAs: [
      "https://www.linkedin.com/company/latitude-organisation",
      "https://www.instagram.com/latitude_organisation",
      "https://www.youtube.com/@latitudeorganisation",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Licence Agence de Voyage N°026-09-001",
    },
  };
}

export function generateServicesSchema() {
  const services = [
    {
      name: "Organisation de Séminaires & Incentives",
      description:
        "Organisation complète de séminaires d'entreprise et voyages incentive sur mesure en France et à l'international.",
      keywords: "organisation séminaire entreprise, incentive",
    },
    {
      name: "Organisation de Soirées Événementielles",
      description:
        "Conception et organisation de soirées d'entreprise, galas et soirées à thème mémorables.",
      keywords: "organisation soirée gala entreprise",
    },
    {
      name: "Team-Building & Cohésion d'Équipe",
      description:
        "Activités de team-building outdoor et indoor originales pour renforcer la cohésion de vos équipes.",
      keywords: "team building nature outdoor, cohésion équipe",
    },
  ];

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    name: service.name,
    description: service.description,
    areaServed: "FR",
    url: BASE_URL,
  }));
}

export function generateFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateReviewsSchema(
  reviews: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  }>
) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@id": `${BASE_URL}/#organization`,
    },
    author: {
      "@type": "Person",
      name: review.author,
      jobTitle: review.role,
      worksFor: {
        "@type": "Organization",
        name: review.company,
      },
    },
    reviewBody: review.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
  }));
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
  };
}

export function generateActivitySchema(activity: {
  name: string;
  description: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: activity.name,
    description: activity.description,
    category: activity.category,
    url: `${BASE_URL}/expertises/team-building/${activity.slug}`,
    brand: {
      "@id": `${BASE_URL}/#organization`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
