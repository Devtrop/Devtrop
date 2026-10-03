import Link from "next/link";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg py-1 ${className}`}
      aria-label="Devtrop Studio Home"
    >
      {/* Geometric mark */}
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-display text-inverse font-mono font-bold text-xs tracking-tighter shadow-sm transition-transform duration-200 group-hover:scale-105">
        <span className="text-accent text-sm mr-0.5">/</span>d
      </span>

      {/* Typography */}
      <span className="text-xl font-bold tracking-tight text-display font-sans">
        devtrop
      </span>
    </Link>
  );
}
