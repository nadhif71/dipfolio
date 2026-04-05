"use client";

import { useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  return (
    <section ref={navRef} id="nav" className="2xl:scale-180">
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#2D232E]/90 backdrop-blur-md px-6 py-2 rounded-full shadow-md z-50">
            <div className="flex gap-6 text-sm md:text-base text-[#F1F0EA]">
            <a href="#introduction" className="nav-link hover:opacity-80 transition">Introduction</a>
            <a href="#about"        className="nav-link hover:opacity-80 transition">About</a>
            <a href="#experience"   className="nav-link hover:opacity-80 transition">Experience</a>
            <a href="#socials"      className="nav-link hover:opacity-80 transition">Socials</a>
            </div>
        </nav>
    </section>
  );
}