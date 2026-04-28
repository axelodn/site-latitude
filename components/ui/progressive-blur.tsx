"use client";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  blurIntensity?: number;
}

export function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 8,
}: ProgressiveBlurProps) {
  const gradientDir = {
    left: "to right",
    right: "to left",
    top: "to bottom",
    bottom: "to top",
  }[direction];

  const layers = 4;

  return (
    <div className={`pointer-events-none ${className ?? ""}`}>
      {Array.from({ length: layers }).map((_, i) => {
        const blur = (blurIntensity / layers) * (i + 1);
        const start = (i / layers) * 100;
        const end = ((i + 1) / layers) * 100;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(${gradientDir}, black ${start}%, transparent ${end}%)`,
              WebkitMaskImage: `linear-gradient(${gradientDir}, black ${start}%, transparent ${end}%)`,
            }}
          />
        );
      })}
    </div>
  );
}
