"use client";

import React, { useEffect, useRef, useState } from "react";
import skills from "../data/skils_data"

export default function SkillsCarousel({ skillsProp, autoplayInterval = 3000 }) {
  // const defaultSkills = [
  //   { id: "react", name: "React", img: "/skills/react.png" },
  //   { id: "js", name: "JavaScript", img: "/skills/javascript.png" },
  //   { id: "ts", name: "TypeScript", img: "/skills/typescript.png" },
  //   { id: "py", name: "Python", img: "/skills/python.png" },
  //   { id: "node", name: "Node.js", img: "/skills/node.png" },
  //   { id: "node", name: "Node.js", img: "/skills/node.png" },
  //   { id: "node", name: "Node.js", img: "/skills/node.png" },
  // ];

  const myskills = Array.isArray(skillsProp) && skillsProp.length ? skillsProp : skills;
  const total = myskills.length;

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
            {myskills.map((s) => (
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
