import Image from "next/image";
import AutoSlider from "../components/AutoSlider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-full">
      <div 
        className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#534B52]/100 from-0% via-[#E0DDCF] via-70% to-transparent -z-10 pointer-events-none"
      />

      <div className="flex flex-row items-start justify-baseline pt-11.5 pb-25 w-full ">
        <a href="#" className="text-[#F1F0EA] text-left text-2xl font-bold ml-13 mr-10">[porto] </a>
      </div>

      <nav className="flex flex-row mt-10 left-1/2 -translate-x-1/2 fixed items-center justify-center  bg-[#2D232E] px-7 w-fit rounded-full z-50" >
        <div className="flex flex-row gap-8 items-center justify-center py-3"> 
          <a href="#" className="text-[#F1F0EA] font-bold relative group">
            Introduction
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F1F0EA] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-[#F1F0EA] font-bold relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F1F0EA] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a href="#experience" className="text-[#F1F0EA] font-bold relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F1F0EA] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a href="#socials" className="text-[#F1F0EA] font-bold relative group">
            Socials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F1F0EA] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </div>
      </nav>
        
        <div className="flex fixed flex-row top-[25%] items-center justify-center w-full inset-x-0 -z-10">
          <Image src="/src/pic4.png" alt="Profile Picture" width={400} height={400} className="-z-10 scale-180" />
        </div>
      <section id="introduction" className="flex flex-row items-start justify-center w-full">
        <div className="flex flex-row items-center justify-between w-full xl:px-12 gap-8">
          <div className="flex flex-col min-w-max">
            <h1 className="text-[#2D232E] text-left text-7xl xl:text-9xl font-bold pt-50">Falah</h1>
            <h1 className="text-6xl xl:text-8xl font-bold text-[#2D232E]">
              Aqlyala<span className="text-[#6d626c]">nadhif</span>
            </h1>
          </div>
          <div className="flex flex-col max-w-sm text-left items-start">
            <h1 className="text-[#2D232E] text-5xl xl:text-5xl font-bold">Introduction.</h1>
            <p className="text-[#2D232E] text-md xl:text-xl mt-4 mb-10">
              I design and build modern web experiences with a focus on clarity, efficiency, and impact, shaped by working with diverse perspectives and a constant drive to create things that truly matter.
            </p>
            <a href="#about" className="text-[#534B52] text-xl  flex flex-row items-center">My Story <Image src="/src/Expand_down_light.svg" alt="Arrow" width={45} height={45} className="" /> </a>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#534B52] transition-all duration-300 ease-out group-hover:w-full"></span>
          </div>
        </div>
      </section>

      <div className=" px-20 mt-28 flex-row items-start justify-center w-full bg-[#2D232E] pt-10 pb-35 h-max"></div>

      <section id="about" className="px-20 flex-row items-start justify-center w-full bg-[#2D232E] pt-35 pb-50">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col max-w-xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E0DDCF]">About Me</h2>
            <p className="text-lg leading-relaxed text-[#E0DDCF]">
            Hi, I’m Falah Aqlyalanadhif (you can call me Nadhif), a Computer Science student at Universitas Gadjah Mada with a strong interest in computers, from theory to practical applications. Lately, I’ve been focused on frontend development, building user interfaces with Next.js, TypeScript, and Tailwind CSS. I joined OmahTI as a junior frontend staff to sharpen my skills and gain real-world experience.
            <br />
            <br />
            Beyond technical skills, I value communication, teamwork, and adaptability. That’s why I joined AIESEC as a Talent Analytics and Consultant staff, where we analyze member data to improve experiences and support members through consulting sessions. This role helps me grow in leadership, empathy, and problem-solving beyond the classroom.
            </p>
          </div>  
          <div className="flex flex-row overflow-x-auto rounded-lg w-lg mt-13 shadow-2xl shadow-white/10">
            <AutoSlider />
          </div>
        </div>
      </section>

      <section id="experience" className=" px-50 flex-row items-start justify-center w-full bg-white pt-30 pb-30">
        <div className="flex flex-col gap-8 items-start">
          <h2 className="text-3xl font-bold text-[#534B52]">Experience</h2>
          <div className="flex-row flex xl:justify-between items-start w-full gap-3">
            <div className="flex flex-col bg-[#E0DDCF] pb-2 rounded-xl shadow-md">
              <Image src="/src/aiesec1.jpeg" alt="AIESEC Logo" width={500} height={500} className="mb-3 rounded-t-lg" />
              <h2 className="text-lg ml-5 leading-relaxed font-bold text-[#2D232E]">AIESEC</h2>
              <h2 className="text-md ml-5 leading-relaxed text-[#2D232E] ">Staff of Talent Analytics and Consultant</h2>
            </div>
            <div className="flex flex-col bg-[#E0DDCF] pb-2 rounded-xl shadow-md">
              <Image src="/src/oti1.jpeg" alt="AIESEC Logo" width={500} height={500} className="mb-3 rounded-t-lg" />
              <h2 className="text-lg ml-5 leading-relaxed font-bold text-[#2D232E]">OmahTI</h2>
              <h2 className="text-md ml-5 leading-relaxed text-[#2D232E] ">Frontend Junior Staff</h2>
            </div>
            <div className="flex flex-col bg-[#E0DDCF] pb-2 rounded-xl shadow-md">
              <Image src="/src/questionmark.jpg" alt="AIESEC Logo" width={500} height={500} className="mb-3 rounded-t-lg" />
              <h2 className="text-lg ml-5 leading-relaxed font-bold text-[#2D232E]">What's next?</h2>
              <h2 className="text-md ml-5 leading-relaxed text-[#2D232E]">Coming Soon</h2>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-[#534B52] mt-20">Projects:</h2>
          <div className="flex-row flex xl:justify-between items-start w-full gap-3">
            <div className="flex flex-col bg-[#E0DDCF] pb-2 rounded-xl shadow-md">
              <Image src="/src/omahtoosn.jpg" alt="AIESEC Logo" width={500} height={500} className="mb-3 rounded-t-lg" />
              <h2 className="text-lg ml-5 leading-relaxed font-bold text-[#2D232E]">OmahTOOSN</h2>
              <h2 className="text-md ml-5 leading-relaxed text-[#2D232E] ">Frontend Developer</h2>
            </div>
            <div className="flex flex-col bg-[#E0DDCF] pb-2 rounded-xl shadow-md">
              <Image src="/src/questionmark.jpg" alt="AIESEC Logo" width={500} height={500} className="mb-3 rounded-t-lg" />
              <h2 className="text-lg ml-5 leading-relaxed font-bold text-[#2D232E]">What's next?</h2>
              <h2 className="text-md ml-5 leading-relaxed text-[#2D232E]">Coming Soon</h2>
            </div>
            <div className="flex flex-col bg-[#E0DDCF] pb-2 rounded-xl shadow-md">
              <Image src="/src/questionmark.jpg" alt="AIESEC Logo" width={500} height={500} className="mb-3 rounded-t-lg" />
              <h2 className="text-lg ml-5 leading-relaxed font-bold text-[#2D232E]">What's next?</h2>
              <h2 className="text-md ml-5 leading-relaxed text-[#2D232E]">Coming Soon</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="socials" className=" px-30 flex flex-row items-start justify-between w-full bg-[#474448] pt-20 pb-15">
        <div className="flex flex-col w-fit items-start justify-center">
          <h2 className="text-3xl text-[#F1F0EA] font-bold">Connect with Me</h2>
          <p className="text-md leading-relaxed text-[#E0DDCF]">
            Falah Aqlyalanadhif | Frontend Developer
          </p>
          <div className="flex gap-4 text-lg mt-7">
            <a href="https://www.instagram.com/falhnadip/" target="_blank" className="text-[#F1F0EA] hover:scale-110 transition-transform flex items-center">
              <Image src="/src/ig.svg" alt="Instagram Logo" width={30} height={30} className="inline-block mr-2" />
            </a>
            <a href="https://www.linkedin.com/in/falah-aqlyalanadhif-1b9b56388/" target="_blank" className="text-[#F1F0EA] hover:scale-110 transition-transform flex items-center">
              <Image src="/src/linked.svg" alt="LinkedIn Logo" width={30} height={30} className="inline-block mr-2" />
            </a>
            <a href="https://github.com/nadhif71" target="_blank" className="text-[#F1F0EA] hover:scale-110 transition-transform flex items-center">
              <Image src="/src/github.svg" alt="GitHub Logo" width={30} height={30} className="inline-block mr-2" />
            </a>
            <a href="mailto:falahaqlyalanadhif@ugm.ac.id" className="text-[#F1F0EA] hover:scale-110 transition-transform flex items-center">
              <Image src="/src/email.svg" alt="Email Logo" width={30} height={30} className="inline-block mr-2" />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-md items-start justify-center">
          <h2 className="text-2xl font-bold text-[#F1F0EA]">Get In Touch</h2>
          <p className="text-md leading-relaxed text-[#E0DDCF] mb-5">
            Contact me for collaborations, projects, or just to say hi!
          </p>
          <p className="text-md leading-relaxed text-[#E0DDCF]">
            Email: falahaqlyalanadhif@ugm.ac.id
          <br />
            Telp: +62 812-1198-3834
          </p>
        </div>

      </section>
    </main>
  );
}