"use client";

import AutoSlider from "../../components/AutoSlider";

export default function About() {
  return (
    <>
      <section id="about" className="bg-[#2D232E] py-20 relative z-10 2xl:py-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 items-center 2xl:scale-150">
          <div className="max-w-xl text-center lg:text-left text-[#E0DDCF] reveal">
            <p className="section-tag text-[#E0DDCF] mb-3">01 — About</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 2xl:text-4xl">About Me</h2>
            <p className="leading-relaxed text-sm md:text-base 2xl:text-2xl">
              Hi, I'm Falah Aqlyalanadhif but you can call me Nadhif! I am currently a Computer Science student at Universitas Gadjah Mada.
              I focus on frontend development using Next.js, React, TypeScript, Javascript, and Tailwind CSS.
              <br /><br />
              I'm also part of AIESEC in UGM as a Staff Member Talent Analytics and Consultant, where I work on data-driven improvements and member support.
            </p>
          </div>
          <div className="w-full lg:w-md rounded-lg overflow-hidden shadow-md reveal delay-2">
            <AutoSlider />
          </div>
        </div>
      </section>
    </>
  );
}