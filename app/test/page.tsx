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

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#2D232E]/90 backdrop-blur-md px-6 py-2 rounded-full shadow-md z-50">
        <div className="flex gap-6 text-sm md:text-base text-[#F1F0EA]">
          <a href="#introduction" className="hover:opacity-80 transition">Introduction</a>
          <a href="#about" className="hover:opacity-80 transition">About</a>
          <a href="#experience" className="hover:opacity-80 transition">Experience</a>
          <a href="#socials" className="hover:opacity-80 transition">Socials</a>
        </div>
      </nav>

        
        <div className="flex fixed flex-row top-[40%] opacity-30 items-center justify-center w-full inset-x-0 -z-10">
          <Image src="/src/pic4.png" alt="Profile Picture" width={400} height={400} className="-z-10 scale-180" />
        </div>

      {/* HERO */}
      <section id="introduction" className="w-full max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D232E] leading-tight">
            Falah 
            <br />
            Aqlyala<span className="text-[#6d626c]">nadhif</span>
          </h1>
        </div>

        <div className="max-w-sm text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D232E]">Introduction</h2>
          <p className="mt-4 text-[#2D232E] text-sm md:text-base">
            I design and build modern web experiences with a focus on clarity,
            efficiency, and impact.
          </p>

          <a href="#about" className="mt-6 inline-flex items-center text-[#534B52] hover:opacity-70 transition">
            My Story
          </a>
        </div>
      </section>

      <div className=" px-20 mt-28 flex-row items-start justify-center w-full bg-[#2D232E] pt-10 pb-35 h-max"></div>

      {/* ABOUT */}
      <section id="about" className="bg-[#2D232E] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 items-center">
          
          <div className="max-w-xl text-center lg:text-left text-[#E0DDCF]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
            <p className="leading-relaxed text-sm md:text-base">
              Hi, I’m Falah Aqlyalanadhif (you can call me Nadhif), a Computer Science student at Universitas Gadjah Mada.
              I focus on frontend development using Next.js, TypeScript, and Tailwind CSS.
              <br /><br />
              I’m also part of AIESEC as a Talent Analytics and Consultant staff, where I work on data-driven improvements and member support.
            </p>
          </div>

          <div className="w-full lg:w-[28rem] rounded-lg overflow-hidden shadow-md">
            <AutoSlider />
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D232E]">Experience</h2>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[ 
              { title: "AIESEC", desc: "Talent Analytics & Consultant", img: "/src/aiesec1.jpeg" },
              { title: "OmahTI", desc: "Frontend Junior Staff", img: "/src/oti1.jpeg" },
              { title: "What's next?", desc: "Coming Soon", img: "/src/questionmark.jpg" }
            ].map((item, i) => (
              <div key={i} className="bg-[#E0DDCF] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover aspect-video" />
                <div className="p-4">
                  <h3 className="font-bold text-[#2D232E]">{item.title}</h3>
                  <p className="text-sm text-[#2D232E]">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D232E] mt-10">Projects</h2>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[ 
              { title: "OmahTOOSN", desc: "Frontend Developer", img: "/src/omahtoosn.jpg" },
              { title: "Coming Soon", desc: "-", img: "/src/questionmark.jpg" },
              { title: "Coming Soon", desc: "-", img: "/src/questionmark.jpg" }
            ].map((item, i) => (
              <div key={i} className="bg-[#E0DDCF] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover aspect-video" />
                <div className="p-4">
                  <h3 className="font-bold text-[#2D232E]">{item.title}</h3>
                  <p className="text-sm text-[#2D232E]">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <section id="socials" className="bg-[#474448] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10 text-[#F1F0EA]">

          <div>
            <h2 className="text-2xl font-bold">Connect</h2>
            <p className="text-sm mt-2">Frontend Developer</p>

            <div className="flex gap-5 mt-6">
              <a href="https://www.instagram.com/falhnadip/" target="_blank"><Image src="/src/ig.svg" alt="IG" width={25} height={25} /></a>
              <a href="https://www.linkedin.com" target="_blank"><Image src="/src/linked.svg" alt="LinkedIn" width={25} height={25} /></a>
              <a href="https://github.com" target="_blank"><Image src="/src/github.svg" alt="GitHub" width={25} height={25} /></a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-sm mt-2">
              falahaqlyalanadhif@ugm.ac.id
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}