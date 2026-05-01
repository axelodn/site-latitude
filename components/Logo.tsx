import Image from "next/image";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 52 }: LogoProps) {
  const width = Math.round(height * (728 / 296));
  return (
    <Image
      src="/logolatitudeorganisation.png"
      alt="Latitude Organisation"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
