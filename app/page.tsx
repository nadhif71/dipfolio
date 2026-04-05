"use client";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Nav from "./sections/nav/Nav";
import Footer from "./sections/footer/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <main className="flex flex-col min-h-screen bg-[#F1F0EA]">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#534B52]/30 from-0% via-[#E0DDCF] via-30% to-transparent pointer-events-none" />
        <Nav />
        <Hero />

        {/* Hero → About (fills into #2D232E) */}
        <div className="wave-divider -mb-1 relative z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#2D232E" />
          </svg>
        </div>

        <About />

        {/* About → Experience (fills into #F1F0EA) */}
        <div className="wave-divider bg-[#2D232E] -mb-1 z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#F1F0EA" />
          </svg>
        </div>

        <Experience />

        {/* Experience → Footer (fills into #474448) */}
        <div className="wave-divider bg-[#F1F0EA] -mb-1 relative z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#474448" />
          </svg>
        </div>

        <Footer />
      </main>
    </>
  );
}