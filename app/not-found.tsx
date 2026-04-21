import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable — 404",
  description:
    "La page que vous recherchez est introuvable. Retournez à l'accueil de Latitude Organisation.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-latitude-black flex flex-col items-center justify-center px-6 text-center">
      <p
        className="font-playfair font-bold text-8xl md:text-[12rem] leading-none mb-4"
        style={{ color: "#C9A961", opacity: 0.15 }}
        aria-hidden="true"
      >
        404
      </p>
      <div className="-mt-8 md:-mt-16">
        <h1 className="font-playfair font-bold text-white text-3xl md:text-4xl mb-4">
          Page introuvable
        </h1>
        <p className="font-inter text-white/50 text-lg mb-10 max-w-md">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil pour découvrir nos services événementiels.
        </p>
        <Link
          href="/"
          className="font-inter text-sm font-medium px-8 py-4 text-white tracking-widest uppercase transition-all duration-300"
          style={{ background: "#C9A961" }}
          aria-label="Retourner à l'accueil de Latitude Organisation"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
