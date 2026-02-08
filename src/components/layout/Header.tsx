'use client';

import { useState } from 'react';
import { Logo, Navigation, MobileMenu, MobileMenuButton, SocialIcons } from '@/components/ui';
import { mainNavigation, socialLinks } from '@/lib/constants';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation items={mainNavigation} className="hidden lg:block" />

          {/* Desktop Social Icons + Search */}
          <div className="hidden lg:flex items-center gap-4">
            <SocialIcons links={socialLinks} size="sm" />
            <button
              className="p-2 text-gray-500 hover:text-primary transition-colors"
              aria-label="Szukaj"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        items={mainNavigation}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}