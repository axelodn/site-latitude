import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const BASE_URL = "https://www.latitude-organisation.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.latitude-organisation.com"),
  title: {
    default:
      "Latitude Organisation | Agence événementielle France — Séminaires, Soirées, Team-Building",
    template: "%s | Latitude Organisation",
  },
  description:
    "Agence événementielle B2B depuis 20 ans. Organisation de séminaires, soirées et team-building en France et à l'international. Un interlocuteur dédié, une prestation sur mesure.",
  keywords: [
    "agence événementielle France",
    "organisation séminaire entreprise",
    "organisation soirée entreprise",
    "agence team building France",
    "organisation événement professionnel",
    "incentive entreprise",
    "soirée gala entreprise",
  ],
  authors: [{ name: "Latitude Organisation" }],
  creator: "Latitude Organisation",
  publisher: "Latitude Organisation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Latitude Organisation — Agence événementielle premium France & International",
    description:
      "20 ans d'expertise dans l'organisation d'événements professionnels sur mesure. Séminaires, soirées, team-building. Un seul interlocuteur. Zéro stress.",
    url: BASE_URL,
    siteName: "Latitude Organisation",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Latitude Organisation — Agence événementielle France & International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latitude Organisation — Agence événementielle premium",
    description:
      "20 ans d'expertise en organisation d'événements professionnels. Séminaires, soirées, team-building.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@LatitudeOrg",
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  other: {
    "theme-color": "#0A0A0A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <head />
      <body
        className="min-h-full antialiased"
        style={{
          fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif",
          background: "#0A0A0A",
        }}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
