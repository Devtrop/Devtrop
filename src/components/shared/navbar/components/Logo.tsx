import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1 ${className}`}
      aria-label="Devtrop Studio Home"
    >
      {/* Image Logo */}
      <Image
        src="/devtrop_logo_transparent_bg_resized.png"
        alt="Devtrop Logo"
        width={220}
        height={48}
        className="w-auto h-7 md:h-8 hover:opacity-90 transition-opacity duration-150"
        priority
      />
    </Link>
  );
}
