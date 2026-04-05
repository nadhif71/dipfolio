"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <section id="socials" className="bg-[#474448] py-16 2xl:py-32 relative z-10">
      <div className="max-w-6xl 2xl:max-w-[1800px] mx-auto px-6 2xl:px-24 flex flex-col md:flex-row justify-between gap-10 2xl:gap-20 text-[#F1F0EA]">
        <div className="reveal">
          <h2 className="text-2xl 2xl:text-7xl font-bold">Connect</h2>
          <p className="text-sm 2xl:text-3xl mt-2 opacity-60">Frontend Developer</p>
          <div className="flex gap-5 2xl:gap-10 mt-6 2xl:mt-10">
            <a href="https://www.instagram.com/falhnadip/" target="_blank" className="social-icon">
              <Image src="/src/ig.svg" alt="IG" width={25} height={25} className="2xl:w-16 2xl:h-16" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="social-icon">
              <Image src="/src/linked.svg" alt="LinkedIn" width={25} height={25} className="2xl:w-16 2xl:h-16" />
            </a>
            <a href="https://github.com" target="_blank" className="social-icon">
              <Image src="/src/github.svg" alt="GitHub" width={25} height={25} className="2xl:w-16 2xl:h-16" />
            </a>
          </div>
        </div>
        <div className="reveal delay-2">
          <h2 className="text-xl 2xl:text-6xl font-bold">Contact</h2>
          <p className="text-sm 2xl:text-2xl mt-2 opacity-70">falahaqlyalanadhif@ugm.ac.id</p>
        </div>
      </div>
      <div className="max-w-6xl 2xl:max-w-[1800px] mx-auto px-6 2xl:px-24 mt-12 2xl:mt-20 pt-6 border-t border-[#F1F0EA]/10">
        <p className="text-xs 2xl:text-xl text-[#F1F0EA]/30 tracking-widest uppercase">© 2025 Falah Aqlyalanadhif</p>
      </div>
    </section>
  );
}