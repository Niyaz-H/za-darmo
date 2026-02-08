import Link from 'next/link';
import { siteInfo } from '@/lib/constants';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-primary">
        {siteInfo.name}
      </span>
    </Link>
  );
}