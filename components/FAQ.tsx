"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";
import { Plus, Minus } from "lucide-react";
import { viewportConfig, staggerContainer, fadeInUp } from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#F5F3EE" }}
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="font-inter text-xs font-medium tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A961" }}
          >
            Questions fréquentes
          </p>
          <h2
            id="faq-title"
            className="font-playfair font-bold text-latitude-black text-4xl md:text-5xl leading-tight"
          >
            Questions fréquentes sur l&apos;organisation
            <br className="hidden md:block" /> d&apos;événements d&apos;entreprise
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-0"
          role="list"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              role="listitem"
              className="border-b border-latitude-black/15"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-start justify-between gap-4 py-6 text-left cursor-pointer group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <h3 className="font-inter font-medium text-latitude-black text-base leading-snug group-hover:text-latitude-gold transition-colors duration-300 flex-1">
                  {item.question}
                </h3>
                <div
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-300"
                  style={{ color: "#C9A961" }}
                  aria-hidden="true"
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter text-sm text-latitude-black/65 leading-relaxed pb-6">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-inter text-latitude-black/65 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-inter text-sm font-medium px-8 py-4 border border-latitude-black text-latitude-black hover:bg-latitude-black hover:text-white transition-all duration-300 tracking-widest uppercase cursor-pointer"
            aria-label="Nous contacter pour toute question sur l'organisation de votre événement"
          >
            Nous contacter directement
          </button>
        </motion.div>
      </div>
    </section>
  );
}
