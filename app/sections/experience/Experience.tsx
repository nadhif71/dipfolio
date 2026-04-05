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

  const delays = ["delay-1", "delay-2", "delay-3"];

  return (
    <section id="experience" className="py-20 2xl:py-40 relative bg-[#F1F0EA] z-10">
      <div className="max-w-6xl 2xl:max-w-[1800px] mx-auto px-6 2xl:px-24 flex flex-col gap-10 2xl:gap-16">

        <div className="reveal">
          <p className="section-tag text-[#2D232E] mb-2 2xl:text-lg">02 — Work</p>
          <h2 className="text-2xl md:text-3xl 2xl:text-7xl font-bold text-[#2D232E]">Experience</h2>
        </div>

        <div className="flex flex-wrap justify-start gap-10 2xl:gap-16">
          {experiences.map((item, i) => (
            <div key={i} className={`reveal ${delays[i]} flex flex-col items-center gap-4 group`}>
              <div className="relative card-hover w-36 h-36 md:w-44 md:h-44 2xl:w-64 2xl:h-64 rounded-full bg-[#E0DDCF] shadow-md overflow-hidden border-4 border-[#2D232E]/10 group-hover:border-[#2D232E]/30 transition-all duration-300">
                {item.logo ? (
                  <Image src={item.logo} alt={item.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl 2xl:text-6xl font-bold text-[#2D232E] opacity-20">?</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="font-bold text-[#2D232E] 2xl:text-3xl">{item.title}</p>
                <p className="text-sm text-[#2D232E] opacity-60 mt-1 2xl:text-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-4">
          <p className="section-tag text-[#2D232E] mb-2 2xl:text-lg">03 — Work</p>
          <h2 className="text-2xl md:text-3xl 2xl:text-7xl font-bold text-[#2D232E]">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
          {projects.map((item, i) => (
            <div key={i} className={`card-hover bg-[#E0DDCF] rounded-xl overflow-hidden shadow-sm reveal ${delays[i]}`}>
              <div className="overflow-hidden">
                <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover aspect-video" />
              </div>
              <div className="p-4 2xl:p-10">
                <h3 className="font-bold text-[#2D232E] 2xl:text-3xl">{item.title}</h3>
                <p className="text-sm text-[#2D232E] opacity-70 mt-1 2xl:text-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}