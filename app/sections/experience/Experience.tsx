"use client";

import Image from "next/image";

export default function Experience() {
  const experiences = [
    { title: "AIESEC in UGM",       desc: "Staff of Talent Analytics & Consultant", logo: "/src/aiesec-logo.webp" },
    { title: "OmahTI",       desc: "Frontend Junior Staff",          logo: "/src/omahti-logo.webp" },
    { title: "OmahTI Academy", desc: "Staff of Public Relations",                    logo: "/src/otiacad-logo.webp" },
    { title: "What's next?", desc: "Coming Soon",                    logo: null },
  ];

  const projects = [
    { title: "OmahTI FE Recruitment", desc: "Rebuild website from Figma using vanilla HTML and CSS", img: "/src/recruitment.webp" },
    { title: "Coming Soon",           desc: "—",                                                      img: "/src/questionmark.webp" },
    { title: "Coming Soon",           desc: "—",                                                      img: "/src/questionmark.webp" },
  ];

  const delays = ["delay-1", "delay-2", "delay-3", "delay-4"];

  return (
    <section id="experience" className="py-24 md:py-32 lg:py-40 relative bg-[#F1F0EA] z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 lg:gap-24">

        <div className="reveal text-center lg:text-left">
          <p className="section-tag text-[#2D232E] mb-3 uppercase tracking-widest text-xs opacity-60">02 — Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D232E]">Experience</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {experiences.map((item, i) => (
            <div key={i} className={`reveal ${delays[i]} flex flex-col items-center gap-4 group`}>
              <div className="relative card-hover w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-[#E0DDCF] shadow-lg overflow-hidden border-4 border-white/50 group-hover:border-[#2D232E]/20 transition-all duration-500">
                {item.logo ? (
                  <Image src={item.logo} alt={item.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-[#2D232E] opacity-10">?</span>
                  </div>
                )}
              </div>
              <div className="text-center px-2">
                <p className="font-bold text-[#2D232E] text-base md:text-lg lg:text-xl line-clamp-1">{item.title}</p>
                <p className="text-xs md:text-sm text-[#2D232E] opacity-60 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 text-center lg:text-left">
          <p className="section-tag text-[#2D232E] mb-3 uppercase tracking-widest text-xs opacity-60">03 — Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D232E]">Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <div key={i} className={`card-hover bg-[#E0DDCF]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl reveal ${delays[i % 4]} group border border-black/5`}>
              <div className="overflow-hidden relative aspect-video">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-[#2D232E] text-xl md:text-2xl">{item.title}</h3>
                <p className="text-sm md:text-base text-[#2D232E] opacity-70 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}