import { type ClassValue, clsx } from 'clsx';

// Utility function to merge class names (useful with Tailwind)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Format date for Polish locale
export function formatDate(dateString: string): string {
  return dateString; // Already formatted in Polish from data
}

// Generate question URL
export function getQuestionUrl(slug: string): string {
  return `/pytania/${slug}`;
}

// Check if link is external
export function isExternalLink(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

// Check if link is an anchor
export function isAnchorLink(href: string): boolean {
  return href.includes('#');
}