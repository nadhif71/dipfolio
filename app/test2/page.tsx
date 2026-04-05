"use client";

import Image from "next/image";
import AutoSlider from "../components/AutoSlider";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [bgOpacity, setBgOpacity] = useState(0.3);
  const [imgTranslate, setImgTranslate] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Fade out background image as user scrolls through hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollY = window.scrollY;
      const fadeStart = hero.offsetTop;
      const fadeEnd = heroBottom;
      const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      setBgOpacity(Math.max(0, 0.3 - progress * 0.3));
      setImgTranslate(Math.max(0, progress * 300));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .reveal.delay-1 { transition-delay: 0.1s; }
        .reveal.delay-2 { transition-delay: 0.2s; }
        .reveal.delay-3 { transition-delay: 0.3s; }
        .reveal.delay-4 { transition-delay: 0.4s; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-line-1      { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.2s  forwards; }
        .hero-line-2      { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.45s forwards; }
        .hero-intro-title { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.6s  forwards; }
        .hero-intro-body  { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.75s forwards; }
        .hero-cta         { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.9s  forwards; }

        .card-hover { transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease; }
        .card-hover:hover { transform: translateY(-6px) scale(1.015); box-shadow: 0 16px 40px rgba(45,35,46,0.18); }
        .card-hover img { transition: transform 0.5s cubic-bezier(.22,1,.36,1); }
        .card-hover:hover img { transform: scale(1.06); }

        .wave-divider svg { display: block; }

        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 0; height: 1.5px; background: #F1F0EA; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }

        @keyframes blink { 50% { opacity: 0; } }
        .cursor { display: inline-block; width: 2px; height: 1em; background: #F1F0EA; margin-left: 2px; vertical-align: middle; animation: blink 1s step-start infinite; }

        .social-icon { transition: transform 0.25s ease, opacity 0.25s ease; }
        .social-icon:hover { transform: translateY(-3px); opacity: 0.7; }

        .section-tag { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.4; }
      `}</style>

      <main className="flex flex-col min-h-screen max-w-full bg-[#F1F0EA]">

        {/* Background Gradient */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#534B52]/100 from-0% via-[#E0DDCF] via-70% to-transparent pointer-events-none" />

        {/* Profile image — fixed, slides down as hero scrolls away */}
        <div className="flex fixed flex-row top-[40%] opacity-10 lg:opacity-50 items-center justify-center w-full inset-x-0 lg:top-[20%]">
          <Image src="/src/pic4.png" alt="Profile Picture" width={400} height={400} className="-z-10 scale-180" />
        </div>

        {/* Logo */}
        <div className="flex flex-row items-start pt-11 pb-15 w-full md:pb-0">
          <a href="#" className="text-[#F1F0EA] text-left text-2xl font-bold ml-13 mr-10 tracking-tight">
            [porto]<span className="cursor" />
          </a>
        </div>

        {/* Navbar */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#2D232E]/90 backdrop-blur-md px-6 py-2 rounded-full shadow-md z-50">
          <div className="flex gap-6 text-sm md:text-base text-[#F1F0EA]">
            <a href="#introduction" className="nav-link hover:opacity-80 transition">Introduction</a>
            <a href="#about"        className="nav-link hover:opacity-80 transition">About</a>
            <a href="#experience"   className="nav-link hover:opacity-80 transition">Experience</a>
            <a href="#socials"      className="nav-link hover:opacity-80 transition">Socials</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          id="introduction"
          className="w-full relative overflow-hidden px-6 py-32 flex flex-col lg:flex-row items-center justify-between gap-10 bg-transparent"
        >
          <div className="text-center lg:text-left">
            <p className="section-tag text-[#2D232E] mb-3 hero-line-1">Portfolio — 2025</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D232E] leading-tight hero-line-1">
              Falah
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D232E] leading-tight hero-line-2">
              Aqlyala<span className="text-[#6d626c]">nadhif</span>
            </h1>
          </div>

          <div className="max-w-sm text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D232E] hero-intro-title">Introduction</h2>
            <p className="mt-4 text-[#2D232E] text-sm md:text-base hero-intro-body">
              I design and build modern web experiences with a focus on clarity,
              efficiency, and impact.
            </p>
            <a href="#about" className="mt-6 inline-flex items-center gap-2 text-[#534B52] hover:opacity-70 transition hero-cta group">
              My Story
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>

        {/* ── Wave divider: hero → about ── */}
        <div className="wave-divider -mb-1 relative z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#2D232E" />
          </svg>
        </div>

        {/* ── ABOUT ── */}
        <section id="about" className="bg-[#2D232E] py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 items-center">
            <div className="max-w-xl text-center lg:text-left text-[#E0DDCF] reveal">
              <p className="section-tag text-[#E0DDCF] mb-3">01 — About</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
              <p className="leading-relaxed text-sm md:text-base">
                Hi, I'm Falah Aqlyalanadhif (you can call me Nadhif), a Computer Science student at Universitas Gadjah Mada.
                I focus on frontend development using Next.js, TypeScript, and Tailwind CSS.
                <br /><br />
                I'm also part of AIESEC as a Talent Analytics and Consultant staff, where I work on data-driven improvements and member support.
              </p>
            </div>
            <div className="w-full lg:w-[28rem] rounded-lg overflow-hidden shadow-md reveal delay-2">
              <AutoSlider />
            </div>
          </div>
        </section>

        {/* ── Wave divider: about → experience ── */}
        <div className="wave-divider bg-[#2D232E] -mb-1 z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-20 relative bg-white z-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
            <div className="reveal">
              <p className="section-tag text-[#2D232E] mb-2">02 — Work</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D232E]">Experience</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "AIESEC",       desc: "Talent Analytics & Consultant", img: "/aiesec1.jpeg" },
                { title: "OmahTI",       desc: "Frontend Junior Staff",          img: "/oti1.jpeg" },
                { title: "What's next?", desc: "Coming Soon",                    img: "/questionmark.jpg" },
              ].map((item, i) => (
                <div key={i} className={`card-hover bg-[#E0DDCF] rounded-xl overflow-hidden shadow-sm reveal delay-${i + 1}`}>
                  <div className="overflow-hidden">
                    <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover aspect-video" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#2D232E]">{item.title}</h3>
                    <p className="text-sm text-[#2D232E] opacity-70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-4">
              <p className="section-tag text-[#2D232E] mb-2">03 — Work</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D232E]">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "OmahTOOSN",   desc: "Frontend Developer", img: "/omahtoosn.jpg" },
                { title: "Coming Soon", desc: "—",                   img: "/questionmark.jpg" },
                { title: "Coming Soon", desc: "—",                   img: "/questionmark.jpg" },
              ].map((item, i) => (
                <div key={i} className={`card-hover bg-[#E0DDCF] rounded-xl overflow-hidden shadow-sm reveal delay-${i + 1}`}>
                  <div className="overflow-hidden">
                    <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover aspect-video" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#2D232E]">{item.title}</h3>
                    <p className="text-sm text-[#2D232E] opacity-70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wave divider: experience → footer ── */}
        <div className="wave-divider bg-white -mb-1 relative z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#474448" />
          </svg>
        </div>

        {/* ── FOOTER ── */}
        <section id="socials" className="bg-[#474448] py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10 text-[#F1F0EA]">
            <div className="reveal">
              <h2 className="text-2xl font-bold">Connect</h2>
              <p className="text-sm mt-2 opacity-60">Frontend Developer</p>
              <div className="flex gap-5 mt-6">
                <a href="https://www.instagram.com/falhnadip/" target="_blank" className="social-icon">
                  <Image src="/ig.svg" alt="IG" width={25} height={25} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" className="social-icon">
                  <Image src="/linked.svg" alt="LinkedIn" width={25} height={25} />
                </a>
                <a href="https://github.com" target="_blank" className="social-icon">
                  <Image src="/github.svg" alt="GitHub" width={25} height={25} />
                </a>
              </div>
            </div>
            <div className="reveal delay-2">
              <h2 className="text-xl font-bold">Contact</h2>
              <p className="text-sm mt-2 opacity-70">falahaqlyalanadhif@ugm.ac.id</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-[#F1F0EA]/10">
            <p className="text-xs text-[#F1F0EA]/30 tracking-widest uppercase">© 2025 Falah Aqlyalanadhif</p>
          </div>
        </section>

      </main>
    </>
  );
}
