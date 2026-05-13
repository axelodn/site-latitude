'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const expandedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const isMobileRef = useRef(false);

  // DOM refs
  const bgRef = useRef<HTMLDivElement>(null);
  const mediaBoxRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLParagraphElement>(null);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
    window.addEventListener('resize', () => {
      isMobileRef.current = window.innerWidth < 768;
    });

    const applyProgress = (p: number) => {
      const isMobile = isMobileRef.current;

      if (bgRef.current) {
        bgRef.current.style.opacity = String(1 - p);
      }

      if (mediaBoxRef.current) {
        const w = 300 + p * (isMobile ? 650 : 1250);
        const h = 400 + p * (isMobile ? 200 : 400);
        const br = Math.max(0, 16 - p * 20);
        mediaBoxRef.current.style.width = `${w}px`;
        mediaBoxRef.current.style.height = `${h}px`;
        mediaBoxRef.current.style.borderRadius = `${br}px`;
      }

      const tx = isMobile ? 180 : 150;
      const textOpacity = Math.max(0, 1 - p * 2.5);

      if (text1Ref.current) {
        text1Ref.current.style.transform = `translateX(-${p * tx}vw)`;
        text1Ref.current.style.opacity = String(textOpacity);
      }
      if (text2Ref.current) {
        text2Ref.current.style.transform = `translateX(${p * tx}vw)`;
        text2Ref.current.style.opacity = String(textOpacity);
      }
      if (dateRef.current) {
        dateRef.current.style.transform = `translateX(-${p * tx}vw)`;
        dateRef.current.style.opacity = String(textOpacity);
      }
      if (scrollHintRef.current) {
        scrollHintRef.current.style.transform = `translateX(${p * tx}vw)`;
        scrollHintRef.current.style.opacity = String(textOpacity);
      }
    };

    const scheduleUpdate = (newP: number) => {
      progressRef.current = newP;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyProgress(newP));
    };

    const handleWheel = (e: Event) => {
      const we = e as globalThis.WheelEvent;
      if (expandedRef.current && we.deltaY < 0 && window.scrollY <= 5) {
        expandedRef.current = false;
        return;
      }
      if (!expandedRef.current) {
        e.preventDefault();
        const next = Math.min(Math.max(progressRef.current + we.deltaY * 0.0009, 0), 1);
        scheduleUpdate(next);
        if (next >= 1) expandedRef.current = true;
      }
    };

    const handleTouchStart = (e: Event) => {
      touchStartYRef.current = (e as TouchEvent).touches[0].clientY;
    };

    const handleTouchMove = (e: Event) => {
      const te = e as TouchEvent;
      if (!touchStartYRef.current) return;
      const deltaY = touchStartYRef.current - te.touches[0].clientY;

      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        expandedRef.current = false;
        return;
      }
      if (!expandedRef.current) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(Math.max(progressRef.current + deltaY * factor, 0), 1);
        scheduleUpdate(next);
        if (next >= 1) expandedRef.current = true;
        touchStartYRef.current = te.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => { touchStartYRef.current = 0; };

    const handleScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background */}
          <div ref={bgRef} className="absolute inset-0 z-0 h-full" style={{ willChange: 'opacity' }}>
            <Image
              src={bgImageSrc}
              alt="Background"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              fetchPriority="high"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Media box */}
              <div
                ref={mediaBoxRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                style={{
                  width: '300px',
                  height: '400px',
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 50px rgba(0,0,0,0.3)',
                }}
              >
                <Image
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  fill
                  sizes="(max-width: 768px) 300px, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Textes hero */}
              <div className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col px-8 py-12 ${textBlend ? 'mix-blend-difference' : ''}`}>
                <h2
                  ref={text1Ref}
                  className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-white"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)', willChange: 'transform, opacity' }}
                >
                  {firstWord}
                </h2>
                <h2
                  ref={text2Ref}
                  className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-white"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)', willChange: 'transform, opacity' }}
                >
                  {restOfTitle}
                </h2>
              </div>

              {/* Date & scroll hint */}
              <div className="absolute bottom-8 w-full flex flex-col items-center z-10 gap-2">
                {date && (
                  <p ref={dateRef} className="text-2xl text-white font-bold" style={{ willChange: 'transform, opacity' }}>
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p ref={scrollHintRef} className="text-white font-medium text-center text-lg" style={{ willChange: 'transform, opacity' }}>
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            {children && (
              <section className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20">
                {children}
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
