'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.15,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
