import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll as useScrollDrei } from '@react-three/drei';
import { useScroll as useScrollFM } from 'framer-motion';

import RobotModel from '../models/RobotModel';
import Loader from '../components/Loader';
import SectionsOverlay from './SectionsOverlay';
import FloatingButton from './FloatingButton';
import ScrollSwipeCards from './ScrollSwipeCards';

const PAGES = 1; // how many full-screen sections the 3D scroll area has

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2069&auto=format&fit=crop",
    color: "#BBACAF",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
  },
  {
    title: "Clément Chapillon",
    description:
      "A story on the border between reality and imaginary, about the contradictory feelings that insularity provokes.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop",
    color: "#977F6D",
    url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
  },
  {
    title: "Zissou",
    description:
      "Both crisp and ethereal, encoded with an ambiguity that lets the viewer find their own story within them.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2069&auto=format&fit=crop",
    color: "#C2491D",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
  },
];

// Bridge component to expose drei's scroll API (el, offset, etc.)
function ScrollAPIForwarder({ onReady }) {
  const api = useScrollDrei();
  useEffect(() => {
    onReady?.(api);
  }, [api, onReady]);
  return null;
}

export default function Home() {
  const scrollApiRef = useRef(null); // will hold drei's scroll api (with .el)
  const mainRef = useRef(null);

  // IMPORTANT: this useScroll is from framer-motion, not drei
  const { scrollYProgress } = useScrollFM({
    target: mainRef,
    offset: ['start start', 'end end'],
  });

  const handleNavigate = (section) => {
    const sectionIndex = { about: 0, projects: 1, resume: 2 }[section];
    const el = scrollApiRef.current?.el;
    if (el && sectionIndex !== undefined) {
      el.scrollTo({ top: sectionIndex * window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* SECTION 1: 3D Canvas with scroll-driven robot + overlay */}
      <section style={{ width: '100vw', height: '100vh' }}>
        <Suspense fallback={<Loader />}>
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 0, 5]} intensity={0.6} />

            {/* Drei ScrollControls NEED the pages prop */}
            <ScrollControls pages={PAGES}>
              {/* Expose the scroll api so we can programmatically scroll */}
              <ScrollAPIForwarder onReady={(api) => (scrollApiRef.current = api)} />

              {/* 3D content (robot) */}
              <Scroll>
                <RobotModel />

                <FloatingButton
                  position={[4, -1, 0]}
                  label="Projects"
                  onClick={() => {
                    // Navigate to a route, or use handleNavigate('projects') if you want to scroll instead
                    window.location.href = '/project';
                  }}
                />

                <FloatingButton
                  position={[-4, 1, 0]}
                  label="About"
                  onClick={() => handleNavigate('about')}
                />
              </Scroll>

              {/* DOM overlay that scrolls with the canvas */}
              <Scroll html>
                <SectionsOverlay pages={PAGES} />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense>
      </section>

      {/* SECTION 2: Regular DOM section using framer-motion's scrollYProgress */}
      <section  ref={mainRef} className="bg-black text-white">
        <h1 className="justify-center">Projects</h1>
        {/* NOTE: projects and Card must exist in your codebase */}
        {projects.map((p, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          const rangeStart = i / projects.length;
          return (
            <ScrollSwipeCards
              key={i}
              i={i}
              title={p.title}
              description={p.description}
              img={p.img}
              url={p.url}
              color={p.color}
              progress={scrollYProgress}
              range={[rangeStart, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      {/* SECTION 3: Your stacked / swipe cards section */}
      {/* <section>
        <ScrollSwipeCards />
      </section> */}
    </div>
  );
}

// import React, { Suspense, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import RobotModel from '../models/RobotModel';
// import Loader from '../components/Loader';
// import SectionsOverlay from './SectionsOverlay';
// import FloatingButton from './FloatingButton';
// import ScrollSwipeCards from './ScrollSwipeCards';
// import { useScroll as useScrollFM } from 'framer-motion';

// const projects = [
//   {
//     title: "Matthias Leidinger",
//     description:
//       "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
//     img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2069&auto=format&fit=crop",
//     color: "#BBACAF",
//     url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//   },
//   {
//     title: "Clément Chapillon",
//     description:
//       "A story on the border between reality and imaginary, about the contradictory feelings that insularity provokes.",
//     img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop",
//     color: "#977F6D",
//     url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//   },
//   {
//     title: "Zissou",
//     description:
//       "Both crisp and ethereal, encoded with an ambiguity that lets the viewer find their own story within them.",
//     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2069&auto=format&fit=crop",
//     color: "#C2491D",
//     url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//   },
// ];

// export default function Home() {
//   const mainRef = useRef(null);
//   // Framer Motion scroll progress for cards
//   const { scrollYProgress } = useScrollFM({
//     target: mainRef,
//     offset: ['start start', 'end end'],
//   });

//   return (
//     <div>
//       {/* SECTION 1: 3D Canvas */}
//       <section style={{ width: '100vw', height: '100vh' }}>
//         <Suspense fallback={<Loader />}>
//           <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <pointLight position={[0, 0, 5]} intensity={0.6} />
//             <RobotModel />
//             {/* You can add floating buttons here if you want */}
//           </Canvas>
//         </Suspense>
//         {/* Overlay if needed */}
//         <SectionsOverlay />
//       </section>

//       {/* SECTION 2: Projects / Cards */}
//       <section ref={mainRef} className="bg-black text-white min-h-screen py-16">
//         <h1 className="text-center text-4xl font-bold mb-12">Projects</h1>
//         <div className="relative" style={{ height: `calc(100vh + ${projects.length * 40}px)` }}>
//           {projects.map((p, i) => {
//             const targetScale = 1 - (projects.length - i) * 0.05;
//             const rangeStart = i / projects.length;
//             return (
//               <ScrollSwipeCards
//                 key={i}
//                 i={i}
//                 title={p.title}
//                 description={p.description}
//                 img={p.img}
//                 url={p.url}
//                 color={p.color}
//                 progress={scrollYProgress}
//                 range={[rangeStart, 1]}
//                 targetScale={targetScale}
//               />
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }