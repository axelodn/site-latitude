"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    numRefs.current.forEach((el, i) => {
      if (!el) return;
      const stat = stats[i];
      const counter = { val: 0 };

      gsap.to(counter, {
        val: stat.value,
        duration: 2.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate() {
          if (el) el.textContent = Math.round(counter.val) + stat.suffix;
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(201,169,97,0.15)",
      }}
      aria-label="Chiffres clés de Latitude Organisation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center py-8 px-4 flex flex-col items-center ${
                index < stats.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-white/8"
                  : ""
              } ${index % 2 === 0 && index < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <div
                className="font-playfair font-bold leading-none mb-3"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "#C9A961" }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <span
                  ref={(el) => { numRefs.current[index] = el; }}
                >
                  0{stat.suffix}
                </span>
              </div>
              <p className="font-inter text-sm font-light text-white/50 tracking-wide text-center max-w-[140px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
