"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [imgTranslate, setImgTranslate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const progress = (window.scrollY - hero.offsetTop) / hero.offsetHeight;
      setImgTranslate(Math.max(0, progress * 300));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="introduction"
      className="w-full relative overflow-hidden px-4 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 md:gap-4 lg:gap-20 bg-transparent max-w-7xl mx-auto md:min-h-[75vh] lg:min-h-[85vh]"
    >
      <div className="text-center lg:text-left relative w-full pt-6 md:pt-6 lg:pt-32">
        <p className="section-tag text-[#2D232E] mb-4 text-[10px] md:text-xs hero-line-1 uppercase tracking-[0.4em] opacity-40">Portfolio — 2025</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-[#2D232E] leading-[0.85] hero-line-1 tracking-tighter break-words">
          Falah
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-[#2D232E] leading-[0.85] hero-line-2 tracking-tighter break-words">
          Aqlyala<span className="text-[#6d626c]">nadhif</span>
        </h1>
      </div>

      <div className="max-w-full sm:max-w-md lg:max-w-sm xl:max-w-md text-center lg:text-left z-10 relative mt-2 md:mt-6 lg:mt-12 xl:mt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D232E] hero-intro-title">Introduction</h2>
          <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg xl:text-xl text-[#2D232E] hero-intro-body leading-relaxed opacity-70">
            I design and build modern web experiences with a focus on clarity,
            efficiency, and impact.
          </p>
          <a href="#about" className="mt-8 md:mt-10 inline-flex items-center gap-3 text-[#2D232E] font-bold hover:opacity-50 transition-all hero-cta group border-b-2 border-[#2D232E]/10 pb-2">
            My Story
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right transition-transform group-hover:translate-x-2"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
          </a>
        </div>

      
      </section>
  );
}
