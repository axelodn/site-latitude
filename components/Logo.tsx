import React from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 52 }: LogoProps) {
  const gold = "#C9A961";
  const r = 60;
  const cx = 72;
  const cy = 78;
  const perspFactor = 0.19;

  const latAngles = [-58, -38, -18, 0, 18, 38, 58];
  const lonAngles = [-70, -50, -30, -10, 10, 30, 50, 70];

  const viewW = 520;
  const viewH = 156;

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width: "auto" }}
      className={className}
      aria-label="Latitude Organisation"
      role="img"
    >
      <defs>
        <clipPath id="globe-clip-logo">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>

      {/* Globe outline */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none" stroke={gold} strokeWidth="0.9"
      />

      {/* Latitude lines */}
      {latAngles.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const y = r * Math.sin(rad);
        const rx = r * Math.cos(rad);
        const ry = Math.abs(rx) * perspFactor;
        return (
          <ellipse
            key={`lat-${angle}`}
            cx={cx} cy={cy + y}
            rx={Math.abs(rx)} ry={ry}
            fill="none" stroke={gold} strokeWidth="0.65"
          />
        );
      })}

      {/* Longitude lines */}
      {lonAngles.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const rx = Math.abs(r * Math.sin(rad));
        return (
          <ellipse
            key={`lon-${angle}`}
            cx={cx} cy={cy}
            rx={rx} ry={r}
            fill="none" stroke={gold} strokeWidth="0.65"
            clipPath="url(#globe-clip-logo)"
          />
        );
      })}

      {/* Outer ring 1 */}
      <ellipse
        cx={cx} cy={cy}
        rx={r * 1.30} ry={r * 0.30}
        fill="none" stroke={gold} strokeWidth="0.9"
        transform={`rotate(-17, ${cx}, ${cy})`}
      />

      {/* Outer ring 2 */}
      <ellipse
        cx={cx} cy={cy}
        rx={r * 1.46} ry={r * 0.17}
        fill="none" stroke={gold} strokeWidth="0.8"
        transform={`rotate(-22, ${cx}, ${cy})`}
        opacity="0.85"
      />

      {/* Text — LATITUDE small above, ORGANISATION large below */}
      <text
        x="158" y="63"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="19"
        fill={gold}
        letterSpacing="7"
        fontWeight="300"
        opacity="0.85"
      >
        LATITUDE
      </text>
      <text
        x="158" y="101"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="28"
        fill={gold}
        letterSpacing="6"
        fontWeight="400"
      >
        ORGANISATION
      </text>
    </svg>
  );
}
