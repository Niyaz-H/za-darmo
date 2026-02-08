'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      const speed = 0.4;
      parallaxRef.current.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div ref={parallaxRef} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <Image
          src="/images/hero-sky.jpg"
          alt="Niebo - Za darmo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </div>

      {/* Floating particles effect (decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20">
        {/* Main heading with staggered animation */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 animate-fade-in-up drop-shadow-lg">
          Czy wiesz, że najcenniejszą rzecz na świecie możesz otrzymać{' '}
          <span className="text-primary-light relative inline-block">
            za darmo
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-light/50 rounded-full" />
          </span>
          ?
        </h1>

        {/* Glassmorphism card */}
        <div className="glass-dark rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            Za darmo, bo Ktoś już za nią zapłacił zamiast Ciebie. I chce Ci ją podarować.
            Tą rzeczą jest <strong className="text-white font-semibold">zbawienie</strong>.
          </p>

          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
            Zbawienie, czyli ratunek przed oddzieleniem od prawdziwego Boga.
            Zbawienie, czyli bilet do Nieba. Wieczne życie.
          </p>

          {/* Bible verse with special styling */}
          <blockquote className="border-l-3 border-primary-light/60 pl-4 py-2 mb-6">
            <p className="italic text-white/85 text-sm md:text-base leading-relaxed">
              &ldquo;Łaską bowiem jesteście zbawieni przez wiarę.
              A to pochodzi nie od was, lecz jest darem Boga. Nie z uczynków,
              aby się nikt nie chlubił.&rdquo;
            </p>
            <cite className="text-xs md:text-sm text-white/60 not-italic mt-2 block">
              — List Ap. Pawła do Efezjan, 2:8-9
            </cite>
          </blockquote>

          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Łaska to coś, co otrzymujemy, chociaż na to nie zasłużyliśmy. <strong className="text-primary-light font-semibold">Za darmo.</strong>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="#scroll1"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 no-underline"
          >
            Dowiedz się więcej
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 scroll-indicator" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
}
