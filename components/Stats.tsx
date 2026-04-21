"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function CountUp({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-latitude-black py-16 md:py-20"
      aria-label="Chiffres clés de Latitude Organisation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={`text-center py-8 px-4 flex flex-col items-center ${
                index < stats.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-latitude-gold/20"
                  : ""
              } ${index % 2 === 0 && index < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <div
                className="font-playfair font-bold leading-none mb-3"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "#C9A961" }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="font-inter text-sm font-light text-white/60 tracking-wide text-center max-w-[140px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
