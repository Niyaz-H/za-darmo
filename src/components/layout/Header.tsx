'use client';

import { useState, useEffect } from 'react';
import { Logo, Navigation, MobileMenu, MobileMenuButton, SocialIcons, SearchModal } from '@/components/ui';
import { mainNavigation, socialLinks } from '@/lib/constants';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
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
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
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

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}
