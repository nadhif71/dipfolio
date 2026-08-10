"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Nav from "./sections/nav/Nav";
import Footer from "./sections/footer/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <RevealObserver />
      
      <main className="flex flex-col min-h-screen bg-[#F1F0EA] relative">
        <div 
          className="hidden lg:flex fixed inset-x-0 bottom-0  lg:top-28 items-end justify-center pointer-events-none z-0"
          style={{ height: '100vh' }}
        >
          <div 
            className="relative w-[700px] h-[700px] lg:w-[850px] lg:h-[850px] xl:w-[950px] xl:h-[950px]"
            style={{ 
              transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
              marginBottom: '0px'
            }}
          >
            <Image 
              src="/src/pic4.webp" 
              alt="Background Profile" 
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#534B52]/30 from-0% via-[#E0DDCF] via-30% to-transparent pointer-events-none" />
        <Nav />
        <div className="relative z-10">
          <Hero />

          <About />

          <Experience />

          <Footer />
        </div>
      </main>
    </>
  );
}