'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { id: 1, src: '/src/aiesec1.webp', alt: 'aiesec1' },
  { id: 2, src: '/src/aiesec2.webp', alt: 'aiesec2' },
  { id: 3, src: '/src/oti1.webp', alt: 'oti1' },
  { id: 4, src: '/src/aiesec4.webp', alt: 'aiesec4' },
];


export default function AutoSlider() {
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