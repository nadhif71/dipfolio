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
    <>
      

      {/* Profile image */}
        <div className="flex fixed flex-row top-[30%] opacity-10 lg:opacity-50 xl:opacity-100 items-center left-1/2 justify-center w-full h-fit overflow-x-hidden inset-x-0 md:top-[30%] lg:top-[10%] xl:top-[8%] 2xl:top-[10%] 2xl:h-max"  style={{ bottom: "80px", transform: `translateX(-50%) translateY(${imgTranslate}px)` }}>
          <Image src="/src/pic4.webp" alt="Profile Picture" width={400} height={400} className="-z-10 scale-140 md:scale-150 sm:scale-125 2xl:scale-170" />
        </div>

      {/* Hero section */}
      <section
        ref={heroRef}
        id="introduction"
        className="w-full relative overflow-hidden px-6 2xl:px-50 lg:px-20 py-35 flex flex-col lg:flex-row items-center justify-between bg-transparent"
      >
        <div className="text-center lg:text-left md:text-2xl">
          <p className="section-tag text-[#2D232E] mb-3 2xl:text-9xl lg:text-6xl hero-line-1">Portfolio — 2025</p>
          <h1 className="text-4xl md:text-5xl 2xl:text-9xl lg:text-7xl font-bold text-[#2D232E] leading-tight hero-line-1">
            Falah
          </h1>
          <h1 className="text-4xl md:text-4xl 2xl:text-8xl lg:text-6xl font-bold text-[#2D232E] leading-tight hero-line-2">
            Aqlyala<span className="text-[#6d626c]">nadhif</span>
          </h1>
        </div>

        <div className="max-w-sm text-center md:ml-55 lg:text-left">
          <h2 className="text-2xl md:text-3xl 2xl:text-6xl lg:text-4xl font-bold text-[#2D232E] hero-intro-title">Introduction</h2>
          <p className="mt-4 text-[#2D232E] text-sm 2xl:text-4xl lg:text-lg hero-intro-body">
            I design and build modern web experiences with a focus on clarity,
            efficiency, and impact.
          </p>
          <a href="#about" className="mt-6 inline-flex 2xl:text-2xl items-center gap-2 text-[#534B52] hover:opacity-70 transition hero-cta group">
            My Story
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right inline-block transition-transform group-hover:translate-x-1"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
          </a>
        </div>
      </section>
    </>
  );
}
