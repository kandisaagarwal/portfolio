"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SkillsCarousel({ skillsProp, autoplayInterval = 3000 }) {
  const defaultSkills = [
{ id: "cpp", name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { id: "python", name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { id: "pytorch", name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { id: "tensorflow", name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { id: "sklearn", name: "Scikit-Learn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { id: "pandas", name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { id: "numpy", name: "Numpy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { id: "matplotlib", name: "Matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { id: "tailwind", name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "css", name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { id: "react", name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { 
    id: "cnn", 
    name: "CNN", 
    // Custom SVG for Neural Network since no standard logo exists
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHN0eWxlPi5ue2ZpbGw6IzYxZGFmYjt9Lmx7c3Ryb2tlOiM2MWRhZmI7c3Ryb2tlLXdpZHRoOjI7fTwvc3R5bGU+PGc+PGxpbmUgY2xhc3M9ImwiIHgxPSIxMCIgeTE9IjE1IiB4Mj0iMzIiIHkyPSI4Ii8+PGxpbmUgY2xhc3M9ImwiIHgxPSIxMCIgeTE9IjE1IiB4Mj0iMzIiIHkyPSIyNCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMTAiIHkxPSIzMiIgeDI9IjMyIiB5Mj0iOCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMTAiIHkxPSIzMiIgeDI9IjMyIiB5Mj0iMjQiLz48bGluZSBjbGFzcz0ibCIgeDE9IjEwIiB5MT0iMzIiIHgyPSIzMiIgeTI9IjQwIi8+PGxpbmUgY2xhc3M9ImwiIHgxPSIxMCIgeTE9IjQ5IiB4Mj0iMzIiIHkyPSIyNCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMTAiIHkxPSI0OSIgeDI9IjMyIiB5Mj0iNDAiLz48bGluZSBjbGFzcz0ibCIgeDE9IjEwIiB5MT0iNDkiIHgyPSIzMiIgeTI9IjU2Ii8+PGxpbmUgY2xhc3M9ImwiIHgxPSIzMiIgeTE9IjgiIHgyPSI1NCIgeTI9IjIwIi8+PGxpbmUgY2xhc3M9ImwiIHgxPSIzMiIgeTE9IjI0IiB4Mj0iNTQiIHkyPSIyMCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMzIiIHkxPSIyNCIgeDI9IjU0IiB5Mj0iNDQiLz48bGluZSBjbGFzcz0ibCIgeDE9IjMyIiB5MT0iNDAiIHgyPSI1NCIgeTI9IjIwIi8+PGxpbmUgY2xhc3M9ImwiIHgxPSIzMiIgeTE9IjQwIiB4Mj0iNTQiIHkyPSI0NCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMzIiIHkxPSI1NiIgeDI9IjU0IiB5Mj0iNDQiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iMTAiIGN5PSIxNSIgcj0iNSIvPjxjaXJjbGUgY2xhc3M9Im4iIGN4PSIxMCIgY3k9IjMyIiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0ibiIgY3g9IjEwIiBjeT0iNDkiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iMzIiIGN5PSI4IiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0ibiIgY3g9IjMyIiBjeT0iMjQiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iMzIiIGN5PSI0MCIgcj0iNSIvPjxjaXJjbGUgY2xhc3M9Im4iIGN4PSIzMiIgY3k9IjU2IiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0ibiIgY3g9IjU0IiBjeT0iMjAiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iNTQiIGN5PSI0NCIgcj0iNSIvPjwvZz48L3N2Zz4="
  },
  { id: "mysql", name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { id: "mongodb", name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { id: "node", name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { id: "html", name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { id: "git", name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  ];

  const skills = Array.isArray(skillsProp) && skillsProp.length ? skillsProp : defaultSkills;
  const total = skills.length;

  const [visible, setVisible] = useState(3);
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= 1280) setVisible(6);
      else if (w >= 1024) setVisible(4);
      else if (w >= 768) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - visible);
  const [index, setIndex] = useState(0);

  // If visible/total changes, ensure index is still valid
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex]);

  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, autoplayInterval);
    return () => clearInterval(autoplayRef.current);
  }, [paused, autoplayInterval, maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const wrapperWidthPct = (100 * total) / visible;
  const translatePct = (index * 100) / total;

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="relative">
        {/* viewport: ensure this sits behind controls (z-0) */}
        <div
          className="overflow-hidden rounded-xl borde bg-transparent relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${wrapperWidthPct}%`, transform: `translateX(-${translatePct}%)` }}
          >
            {skills.map((s) => (
              <div
                key={s.id}
                className="flex-shrink-0 p-2 flex flex-col items-center justify-center"
                style={{ width: `${100 / total}%` }}
              >
                <img src={s.img} alt={s.name} className="w-14 h-14 object-contain mb-1" />
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">{s.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: placed above the slider with a higher z-index */}
        <button
          aria-label="Previous skill"
          onClick={prev}
          disabled={maxIndex === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 shadow-md focus:outline-none ${
            maxIndex === 0 ? "pointer-events-none opacity-40" : "cursor-pointer"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="Next skill"
          onClick={next}
          disabled={maxIndex === 0}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 shadow-md focus:outline-none ${
            maxIndex === 0 ? "pointer-events-none opacity-40" : "cursor-pointer"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
