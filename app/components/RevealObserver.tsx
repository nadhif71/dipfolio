"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            entry.target.classList.remove("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };

    observe();

    return () => observer.disconnect();
  }, []);

  return null;
}