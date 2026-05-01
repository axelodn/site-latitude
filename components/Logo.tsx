import Image from "next/image";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 52 }: LogoProps) {
  const width = Math.round(height * (1296 / 832));
  return (
    <Image
      src="/latitude-organisation-logo.png"
      alt="Latitude Organisation"
      width={width}
      height={height}
      className={className}
      style={{ mixBlendMode: "screen" }}
      priority
    />
  );
}
