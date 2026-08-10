"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="socials" className="bg-[#474448] py-20 md:py-24 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 md:gap-20 text-[#F1F0EA]">
        <div className="reveal flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Connect</h2>
          <p className="text-base md:text-lg mt-3 opacity-60 font-medium">Frontend Developer</p>
          <div className="flex gap-6 mt-8">
            <a href="https://www.instagram.com/falhnadhf/" target="_blank" className="social-icon group">
              <div className="bg-[#F1F0EA]/5 p-3 rounded-full hover:bg-[#F1F0EA]/10 transition-colors">
                <Image src="/src/ig.svg" alt="IG" width={28} height={28} className="opacity-80 group-hover:opacity-100" />
              </div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="social-icon group">
              <div className="bg-[#F1F0EA]/5 p-3 rounded-full hover:bg-[#F1F0EA]/10 transition-colors">
                <Image src="/src/linked.svg" alt="LinkedIn" width={28} height={28} className="opacity-80 group-hover:opacity-100" />
              </div>
            </a>
            <a href="https://github.com" target="_blank" className="social-icon group">
              <div className="bg-[#F1F0EA]/5 p-3 rounded-full hover:bg-[#F1F0EA]/10 transition-colors">
                <Image src="/src/github.svg" alt="GitHub" width={28} height={28} className="opacity-80 group-hover:opacity-100" />
              </div>
            </a>
          </div>
        </div>
        <div className="reveal delay-2 flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact</h2>
          <a href="mailto:falahaqlyalanadhif@ugm.ac.id" className="text-base md:text-lg lg:text-xl opacity-70 hover:opacity-100 transition-opacity underline underline-offset-4 decoration-[#F1F0EA]/30">
            falahaqlyalanadhif@mail.ugm.ac.id
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-[#F1F0EA]/10">
        <p className="text-[10px] md:text-xs text-[#F1F0EA]/30 tracking-[0.2em] uppercase">Falah Aqlyalanadhif — Dipfolio</p>
      </div>
    </footer>
  );
}