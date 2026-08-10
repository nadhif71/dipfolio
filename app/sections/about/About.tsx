"use client";

import AutoSlider from "../../components/AutoSlider";

export default function About() {
  return (
    <>
      <section id="about" className="bg-[#2D232E] py-20 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 text-center lg:text-left text-[#E0DDCF] reveal">
            <p className="section-tag text-[#E0DDCF] mb-4 opacity-60 tracking-widest uppercase text-xs">01 — About</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
            <p className="leading-relaxed text-sm md:text-base lg:text-lg opacity-80">
              Hi, I'm Falah Aqlyalanadhif but you can call me Nadhif! I am currently a Computer Science student at Universitas Gadjah Mada.
              I focus on frontend development using Next.js, React, TypeScript, Javascript, and Tailwind CSS.
              <br /><br />
              I am currently a Staff Member of Talent Analytics and Consultant at AIESEC in UGM, where I contribute to data-driven initiatives and support member development through analysis and consultation. I am also a Junior Frontend Developer at OmahTI, where I contribute to web development projects and collaborate with a team to build effective and user-focused digital solutions.
            </p>
          </div>
          <div className="w-full lg:w-1/2 max-w-lg rounded-2xl overflow-hidden shadow-2xl reveal delay-2 ring-1 ring-white/10">
            <AutoSlider />
          </div>
        </div>
      </section>
    </>
  );
}