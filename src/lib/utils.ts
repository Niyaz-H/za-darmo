import { type ClassValue, clsx } from 'clsx';

// Utility function to merge class names (useful with Tailwind)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Generate question URL
export function getQuestionUrl(slug: string): string {
  return `/pytania/${slug}`;
}
