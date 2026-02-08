import Link from 'next/link';
import { siteInfo } from '@/lib/constants';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-1 group no-underline ${className}`}>
      <span className="text-2xl font-bold text-primary transition-colors group-hover:text-primary-dark">
        {siteInfo.name}
      </span>
    </Link>
  );
}
