// "use client";

// import React, { useEffect, useRef, useState } from "react";

// export default function SkillsCarousel({ skillsProp, speed = 30 }) {
//   const defaultSkills = [
//     { id: "react", name: "React", img: "/skills/react.png" },
//     { id: "js", name: "JavaScript", img: "/skills/javascript.png" },
//     { id: "ts", name: "TypeScript", img: "/skills/typescript.png" },
//     { id: "py", name: "Python", img: "/skills/python.png" },
//     { id: "node", name: "Node.js", img: "/skills/node.png" },
//   ];

//   const skills = Array.isArray(skillsProp) && skillsProp.length ? skillsProp : defaultSkills;

//   // duplicate list to create infinite marquee effect
//   const marqueeSkills = [...skills, ...skills];

//   const [paused, setPaused] = useState(false);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     let frame;
//     let offset = 0;

//     const animate = () => {
//       if (!paused && scrollRef.current) {
//         offset -= 0.5; // speed of movement
//         if (Math.abs(offset) >= scrollRef.current.scrollWidth / 2) {
//           offset = 0; // reset to create loop
//         }
//         scrollRef.current.style.transform = `translateX(${offset}px)`;
//       }
//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [paused]);

//   return (
//     <section className="w-full bg-transparent py-8">
//       <div
//         className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 shadow-lg"
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//       >
//         {/* Gradient fade edges for modern look */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/60 dark:from-black/60 to-transparent z-10" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/60 dark:from-black/60 to-transparent z-10" />

//         <div
//           ref={scrollRef}
//           className="flex whitespace-nowrap will-change-transform"
//           style={{ display: "flex" }}
//         >
//           {marqueeSkills.map((s, i) => (
//             <div
//               key={s.id + i}
//               className="flex-shrink-0 px-8 py-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-xl"
//             >
//               <img src={s.img} alt={s.name} className="w-16 h-16 object-contain mb-2" />
//               <h3 className="text-base font-semibold tracking-wide text-gray-800 dark:text-gray-100">
//                 {s.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";

export default function SkillsGrid({ skillsProp }) {
  const defaultSkills = [
    { id: "react", name: "React", img: "/skills/react.png" },
    { id: "js", name: "JavaScript", img: "/skills/javascript.png" },
    { id: "ts", name: "TypeScript", img: "/skills/typescript.png" },
    { id: "py", name: "Python", img: "/skills/python.png" },
    { id: "node", name: "Node.js", img: "/skills/node.png" },
  ];

  const skills = Array.isArray(skillsProp) && skillsProp.length ? skillsProp : defaultSkills;

  return (
    <section className="w-full py-12 bg-transparent">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        My Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center justify-center p-4 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <img src={s.img} alt={s.name} className="w-16 h-16 object-contain mb-2" />
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
              {s.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
