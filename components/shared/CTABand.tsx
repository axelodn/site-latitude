"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  isDark?: boolean;
}

export default function CTABand({
  title = "Prêt à créer un événement inoubliable ?",
  subtitle = "Nos équipes sont à votre disposition pour discuter de votre projet",
  buttonLabel = "Demander un devis",
  onButtonClick,
  buttonHref = "#contact",
  isDark = false,
}: CTABandProps) {
  return (
    <section
      className={`py-16 lg:py-24 ${isDark ? "bg-latitude-black" : "bg-white/2"}`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          {title && (
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              {title}
            </motion.h2>
          )}

          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="font-inter text-white/70 text-lg mb-10 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div variants={fadeInUp}>
            {buttonHref ? (
              <a
                href={buttonHref}
                className="inline-block font-inter text-sm font-medium px-10 py-4 text-white transition-all duration-400 tracking-widest uppercase cursor-pointer hover:opacity-90"
                style={{ background: "#C9A961" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#b8943f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C9A961")
                }
              >
                {buttonLabel}
              </a>
            ) : (
              <button
                onClick={onButtonClick}
                className="font-inter text-sm font-medium px-10 py-4 text-white transition-all duration-400 tracking-widest uppercase cursor-pointer hover:opacity-90"
                style={{ background: "#C9A961" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#b8943f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C9A961")
                }
              >
                {buttonLabel}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
