'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// 1. Define the TypeScript interface for your slide data
interface Slide {
  id: number;
  src: string;
  alt: string;
}

// 2. Apply the interface to your array
const slides: Slide[] = [
  { id: 1, src: '/src/aiesec1.jpeg', alt: 'Mountain landscape' },
  { id: 2, src: '/src/aiesec2.jpeg', alt: 'Foggy nature' },
  { id: 3, src: '/src/oti1.jpeg', alt: 'Forest bridge' },
  { id: 4, src: '/src/pic1.png', alt: 'City skyline' },
  { id: 5, src: '/src/pic3.png', alt: 'City skyline' },
  { id: 6, src: '/src/pic4.png', alt: 'City skyline' },

];

export default function AutoSlider() {
  // TypeScript automatically infers this is a number, but you can be explicit: useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl h-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0} 
          />
        </div>
      ))}
    </div>
  );
}