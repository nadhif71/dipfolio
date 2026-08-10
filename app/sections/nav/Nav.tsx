"use client";

import { useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  return (
    <section ref={navRef} id="nav">
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-[#2D232E]/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 rounded-full shadow-md z-50 w-[92%] max-w-fit">
            <div className="flex gap-2 sm:gap-3 md:gap-6 text-[10px] sm:text-xs md:text-sm lg:text-base text-[#F1F0EA] justify-center whitespace-nowrap">
            <a href="#introduction" className="nav-link hover:opacity-80 transition">Introduction</a>
            <a href="#about"        className="nav-link hover:opacity-80 transition">About</a>
            <a href="#experience"   className="nav-link hover:opacity-80 transition">Experience</a>
            <a href="#socials"      className="nav-link hover:opacity-80 transition">Socials</a>
            </div>
        </nav>
    </section>
  );
}