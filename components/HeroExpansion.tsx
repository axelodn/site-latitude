'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroExpansion() {
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const expandedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const isMobileRef = useRef(false);

  const bgRef       = useRef<HTMLDivElement>(null);
  const mediaRef    = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const titleUpRef  = useRef<HTMLHeadingElement>(null);
  const titleDownRef= useRef<HTMLHeadingElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const hintRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
    const onResize = () => { isMobileRef.current = window.innerWidth < 768; };
    window.addEventListener('resize', onResize);

    const applyProgress = (p: number) => {
      const m = isMobileRef.current;

      // Background fades out
      if (bgRef.current)
        bgRef.current.style.opacity = String(Math.max(0, 1 - p * 1.5));

      // Image expands (same logic as avant)
      if (mediaRef.current) {
        const w  = 320 + p * (m ? 620 : 1220);
        const h  = 420 + p * (m ? 180 : 380);
        const br = Math.max(0, 16 - p * 20);
        mediaRef.current.style.width        = `${w}px`;
        mediaRef.current.style.height       = `${h}px`;
        mediaRef.current.style.borderRadius = `${br}px`;
      }

      // Overlay s'assombrit au fur et à mesure
      if (overlayRef.current)
        overlayRef.current.style.opacity = String(0.45 + p * 0.35);

      // Titres s'écartent verticalement
      const ty = p * (m ? 55 : 75);
      const to = Math.max(0, 1 - p * 2.5);
      if (titleUpRef.current) {
        titleUpRef.current.style.transform = `translateY(-${ty}px)`;
        titleUpRef.current.style.opacity   = String(to);
      }
      if (titleDownRef.current) {
        titleDownRef.current.style.transform = `translateY(${ty}px)`;
        titleDownRef.current.style.opacity   = String(to);
      }

      // Scroll hint disparaît
      if (hintRef.current)
        hintRef.current.style.opacity = String(Math.max(0, 1 - p * 4));

      // Contenu apparaît après 80%
      if (contentRef.current) {
        const co = Math.max(0, (p - 0.8) * 5);
        const cy = Math.max(0, (1 - p) * 30);
        contentRef.current.style.opacity   = String(co);
        contentRef.current.style.transform = `translate(-50%, calc(-50% + ${cy}px))`;
        contentRef.current.style.pointerEvents = p >= 0.95 ? 'auto' : 'none';
      }
    };

    const schedule = (next: number) => {
      progressRef.current = next;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyProgress(next));
    };

    const onWheel = (e: Event) => {
      const we = e as globalThis.WheelEvent;
      if (expandedRef.current && we.deltaY < 0 && window.scrollY <= 5) {
        expandedRef.current = false; return;
      }
      if (!expandedRef.current) {
        e.preventDefault();
        const next = Math.min(Math.max(progressRef.current + we.deltaY * 0.0009, 0), 1);
        schedule(next);
        if (next >= 1) expandedRef.current = true;
      }
    };

    const onTouchStart = (e: Event) => {
      touchStartYRef.current = (e as TouchEvent).touches[0].clientY;
    };

    const onTouchMove = (e: Event) => {
      const te = e as TouchEvent;
      if (!touchStartYRef.current) return;
      const dy = touchStartYRef.current - te.touches[0].clientY;
      if (expandedRef.current && dy < -20 && window.scrollY <= 5) {
        expandedRef.current = false; return;
      }
      if (!expandedRef.current) {
        e.preventDefault();
        const next = Math.min(Math.max(progressRef.current + dy * (dy < 0 ? 0.008 : 0.005), 0), 1);
        schedule(next);
        if (next >= 1) expandedRef.current = true;
        touchStartYRef.current = te.touches[0].clientY;
      }
    };

    const onTouchEnd = () => { touchStartYRef.current = 0; };
    const onScroll   = () => { if (!expandedRef.current) window.scrollTo(0, 0); };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('scroll',     onScroll);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });
    window.addEventListener('touchend',   onTouchEnd);

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('scroll',     onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('resize',     onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-[100dvh] overflow-hidden"
      style={{ background: '#08080A' }}
      aria-label="Latitude Organisation — agence événementielle"
    >
      {/* Background atmosphère */}
      <div ref={bgRef} className="absolute inset-0 z-0" style={{ willChange: 'opacity' }}>
        <Image
          src="/images/groupe-extérieur.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          quality={85}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)' }} />
      </div>

      {/* Image centrale qui s'expand */}
      <div
        ref={mediaRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden"
        style={{
          width: '320px', height: '420px',
          maxWidth: '95vw', maxHeight: '85vh',
          borderRadius: '16px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
        }}
      >
        <Image
          src="/images/groupe extérieur.jpg"
          alt="Événement Latitude Organisation"
          fill
          className="object-cover"
          priority
        />
        <div ref={overlayRef} className="absolute inset-0 bg-black/50" />
      </div>

      {/* Titres qui s'écartent */}
      <div className="relative z-20 flex flex-col items-center text-center gap-3 pointer-events-none select-none px-6">
        <h1
          ref={titleUpRef}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.9)', willChange: 'transform, opacity' }}
        >
          L'excellence
        </h1>
        <h1
          ref={titleDownRef}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-normal italic leading-tight"
          style={{ color: '#C9A961', textShadow: '0 4px 24px rgba(0,0,0,0.9)', willChange: 'transform, opacity' }}
        >
          événementielle depuis 2004
        </h1>
      </div>

      {/* Contenu révélé après expansion complète */}
      <div
        ref={contentRef}
        className="absolute top-1/2 left-1/2 z-30 flex flex-col items-center text-center gap-6 px-6 w-full max-w-2xl"
        style={{
          opacity: 0,
          transform: 'translate(-50%, calc(-50% + 30px))',
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
      >
        <span
          className="font-inter text-xs tracking-[0.4em] uppercase"
          style={{ color: '#C9A961' }}
        >
          Séminaires · Team-Building · Soirées Événementielles
        </span>
        <p className="font-inter text-white/80 text-lg leading-relaxed">
          De la conception à la réalisation, nous créons des événements d'entreprise qui marquent durablement les esprits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="font-inter text-sm font-medium px-8 py-4 text-white tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{ background: '#C9A961' }}
          >
            Demander un devis →
          </Link>
          <Link
            href="/expertises"
            className="font-inter text-sm font-medium px-8 py-4 border text-white tracking-widest uppercase hover:bg-white/10 transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.35)' }}
          >
            Nos expertises
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={hintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs text-white/40 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
}
