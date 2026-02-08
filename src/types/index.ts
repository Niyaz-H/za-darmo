// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isAnchor?: boolean;
}

// Social media types
export type SocialPlatform = 'twitter' | 'facebook' | 'youtube' | 'instagram';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

// Question types
export interface BibleVerse {
  text: string;
  reference: string;
  translation: 'BW' | 'BT'; // Biblia Warszawska or Tysiąclecia
}

export interface Question {
  id: number;
  slug: string;
  title: string;
  shortAnswer: string;
  fullAnswer?: string;
  verses?: BibleVerse[];
  datePublished: string;
  isAvailable: boolean;
}

export interface QuestionWithNavigation extends Question {
  previousQuestion?: { slug: string; title: string };
  nextQuestion?: { slug: string; title: string };
}

// Recent question for sidebar
export interface RecentQuestion {
  id: number;
  title: string;
  slug: string;
  date: string;
}

// Sidebar card types
export interface SidebarCard {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}