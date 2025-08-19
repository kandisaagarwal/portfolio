// // // // import React, { useMemo, useRef } from "react";
// // // // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // // /**
// // // //  * Drop this component anywhere on a page.
// // // //  * It creates a pinned (sticky) section where cards swipe horizontally
// // // //  * as the user scrolls vertically — similar to AI Fiesta's section 2.
// // // //  *
// // // //  * Requirements:
// // // //  * - Tailwind CSS
// // // //  * - framer-motion, lucide-react
// // // //  *
// // // //  * Usage:
// // // //  * <ScrollSwipeCards
// // // //  *   title="One Window. Six Perspectives."
// // // //  *   subtitle="Achieve Optimal Efficiency."
// // // //  *   cards={[
// // // //  *     { heading: "Compare All Premium AIs at Once", points: ["Save hours of manual comparison","Customize your AI team instantly","Never miss the most accurate answer again"], image: "/images/card-1.png" },
// // // //  *     { heading: "Prompt Boost – Instant Enhancement", points: ["Turn rough ideas into perfect prompts","Get 10x better responses instantly","No prompt engineering skills needed"], image: "/images/card-2.png" },
// // // //  *     { heading: "Generate Images & Transcribe Audio", points: ["High-quality images","Fast, accurate transcripts","Edit outputs effortlessly"], image: "/images/card-3.png" },
// // // //  *     { heading: "Custom Projects with System Instructions", points: ["One-time setup","Instantly switch modes","Consistent tone & rules"], image: "/images/card-4.png" },
// // // //  *   ]}
// // // //  * />
// // // //  */

// // // // export default function ScrollSwipeCards({
// // // //   title = "One Window. Six Perspectives.",
// // // //   subtitle = "Achieve Optimal Efficiency.",
// // // //   cards = [],
// // // //   heightPerCardVH = 120, // how much vertical scroll drives each horizontal swipe
// // // //   background = "bg-gray-50",
// // // // }) {
// // // //   const containerRef = useRef(null);

// // // //   // Create a predictable list if none provided
// // // //   const items = useMemo(() => {
// // // //     if (cards.length) return cards;
// // // //     return [
// // // //       {
// // // //         heading: "Compare All Premium AIs at Once",
// // // //         points: [
// // // //           "Save hours of manual comparison",
// // // //           "Customize your AI team instantly",
// // // //           "Never miss the most accurate answer again",
// // // //         ],
// // // //         image: "https://images.unsplash.com/photo-1551281044-8d0e597c3f87?q=80&w=1200&auto=format&fit=crop",
// // // //       },
// // // //       {
// // // //         heading: "Prompt Boost – Instant Enhancement",
// // // //         points: [
// // // //           "Turn rough ideas into perfect prompts",
// // // //           "Get 10x better responses instantly",
// // // //           "No prompt engineering skills needed",
// // // //         ],
// // // //         image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
// // // //       },
// // // //       {
// // // //         heading: "Generate Images & Transcribe Audio",
// // // //         points: [
// // // //           "High-quality images for any purpose",
// // // //           "Fast, accurate transcripts",
// // // //           "Effortlessly edit outputs",
// // // //         ],
// // // //         image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
// // // //       },
// // // //       {
// // // //         heading: "Custom Projects with System Instructions",
// // // //         points: [
// // // //           "One-time setup keeps replies on-brand",
// // // //           "Instantly switch modes across chats",
// // // //           "Consistent tone and rules",
// // // //         ],
// // // //         image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop",
// // // //       },
// // // //     ];
// // // //   }, [cards]);

// // // //   const total = items.length;

// // // //   // Scroll progress (0 -> 1) across the whole pinned section
// // // //   const { scrollYProgress } = useScroll({
// // // //     target: containerRef,
// // // //     offset: ["start start", "end end"],
// // // //   });

// // // //   // Smooth the progress for a polished feel
// // // //   const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

// // // //   // Convert progress to a horizontal translate across N-1 widths
// // // //   const x = useTransform(
// // // //     smoothProgress,
// // // //     [0, 1],
// // // //     ["0%", `-${(total - 1) * 100}%`]
// // // //   );

// // // //   // Optional subtle rotation/scale while sliding
// // // //   const rotate = useTransform(smoothProgress, [0, 1], [0, total * -1.25]);
// // // //   const scale = useTransform(smoothProgress, [0, 1], [1, 0.985]);

// // // //   // Section height = number of cards * heightPerCardVH
// // // //   const sectionMinHeight = `${Math.max(total, 1) * heightPerCardVH}vh`;

// // // //   // Fallback keyboard navigation for accessibility
// // // //   const onKeyNav = (dir) => {
// // // //     const delta = dir === "next" ? 1 : -1;
// // // //     const el = containerRef.current;
// // // //     if (!el) return;
// // // //     const perCard = (window.innerHeight * heightPerCardVH) / 100;
// // // //     el.scrollTo({ top: el.scrollTop + delta * perCard, behavior: "smooth" });
// // // //   };

// // // //   return (
// // // //     <section className={`relative ${background}`}>
// // // //       {/* This wrapper creates scroll space and pins the slider */}
// // // //       <div
// // // //         style={{ minHeight: sectionMinHeight }}
// // // //         className="relative"
// // // //       >
// // // //         <div
// // // //           ref={containerRef}
// // // //           className="sticky top-0 h-screen overflow-hidden"
// // // //           aria-roledescription="scroll-driven carousel"
// // // //         >
// // // //           {/* Headline Layer */}
// // // //           <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-2 p-6 md:p-10">
// // // //             <motion.h2
// // // //               className="text-3xl md:text-5xl font-semibold text-gray-900 text-center"
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true, amount: 0.6 }}
// // // //               aria-label={title}
// // // //             >
// // // //               {title}
// // // //             </motion.h2>
// // // //             <motion.p
// // // //               className="text-base md:text-lg text-gray-600 text-center max-w-3xl"
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
// // // //               viewport={{ once: true, amount: 0.6 }}
// // // //             >
// // // //               {subtitle}
// // // //             </motion.p>
// // // //           </div>

// // // //           {/* Horizontal Track */}
// // // //           <motion.div
// // // //             style={{ x, rotate, scale }}
// // // //             className="absolute inset-0 flex h-full w-[100vw] md:w-[100vw]"
// // // //           >
// // // //             {/* Set the width of the track to N * 100vw */}
// // // //             <div className="flex h-full" style={{ width: `${total * 100}vw` }}>
// // // //               {items.map((c, i) => (
// // // //                 <article
// // // //                   key={i}
// // // //                   className="relative h-full w-screen shrink-0"
// // // //                 >
// // // //                   <div className="mx-auto flex h-full max-w-6xl items-center px-6 md:px-8">
// // // //                     <div className="grid w-full grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1">
// // // //                       {/* Text */}
// // // //                       <div className="order-2 flex flex-col justify-center gap-4 md:order-1">
// // // //                         <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">
// // // //                           {c.heading}
// // // //                         </h3>
// // // //                         <ul className="space-y-2 text-gray-700 text-base md:text-lg">
// // // //                           {c.points.map((p, idx) => (
// // // //                             <li key={idx} className="flex items-start gap-2">
// // // //                               <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" />
// // // //                               <span>{p}</span>
// // // //                             </li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       </div>

// // // //                       {/* Visual */}
// // // //                       <div className="order-1 overflow-hidden rounded-2xl border border-gray-200 shadow-md md:order-2">
// // // //                         <img
// // // //                           src={c.image}
// // // //                           alt={c.heading}
// // // //                           className="h-full w-full object-cover"
// // // //                           loading="lazy"
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Index chip */}
// // // //                   <div className="absolute right-6 top-6 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 shadow">
// // // //                     {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
// // // //                   </div>
// // // //                 </article>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* On-screen navigation (optional) */}
// // // //           <div className="pointer-events-auto absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
// // // //             <button
// // // //               aria-label="Previous"
// // // //               onClick={() => onKeyNav("prev")}
// // // //               className="rounded-2xl border border-gray-300 bg-white/80 p-2 shadow hover:bg-white focus:outline-none"
// // // //             >
// // // //               <ChevronLeft className="h-5 w-5" />
// // // //             </button>
// // // //             <button
// // // //               aria-label="Next"
// // // //               onClick={() => onKeyNav("next")}
// // // //               className="rounded-2xl border border-gray-300 bg-white/80 p-2 shadow hover:bg-white focus:outline-none"
// // // //             >
// // // //               <ChevronRight className="h-5 w-5" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // /**
// // // //  * If you want a full demo page, export this below instead:
// // // //  *
// // // //  * export default function DemoPage() {
// // // //  *   return (
// // // //  *     <main className="min-h-[400vh] bg-white">
// // // //  *       <div className="mx-auto max-w-5xl px-6 py-24">
// // // //  *         <h1 className="text-4xl md:text-6xl font-bold mb-20">Demo</h1>
// // // //  *         <p className="text-gray-600 mb-40 max-w-2xl">Scroll down to the sticky section. Each ~120vh of scroll advances one card horizontally. Tweak the heightPerCardVH prop to make it faster or slower.</p>
// // // //  *       </div>
// // // //  *       <ScrollSwipeCards />
// // // //  *       <div className="mx-auto max-w-5xl px-6 py-24">
// // // //  *         <p className="text-gray-600">After the section…</p>
// // // //  *       </div>
// // // //  *     </main>
// // // //  *   );
// // // //  * }
// // // //  */

// // // import React, { useMemo, useRef } from "react";
// // // import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// // // /**
// // //  * Scroll-fade cards effect:
// // //  * Each card fades in fully, then fades out as the next one fades in.
// // //  * Ensures only one card is visible at a time (no overlapping readability issues).
// // //  */

// // // export default function ScrollSwipeCards({
// // //   title = "One Window. Six Perspectives.",
// // //   subtitle = "Achieve Optimal Efficiency.",
// // //   cards = [],
// // //   heightPerCardVH = 120,
// // //   background = "black",
// // // }) {
// // //   const containerRef = useRef(null);

// // //   const items = useMemo(() => {
// // //     if (cards.length) return cards;
// // //     return [
// // //       {
// // //         heading: "Compare All Premium AIs at Once",
// // //         points: [
// // //           "Save hours of manual comparison",
// // //           "Customize your AI team instantly",
// // //           "Never miss the most accurate answer again",
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1551281044-8d0e597c3f87?q=80&w=1200&auto=format&fit=crop",
// // //       },
// // //       {
// // //         heading: "Prompt Boost – Instant Enhancement",
// // //         points: [
// // //           "Turn rough ideas into perfect prompts",
// // //           "Get 10x better responses instantly",
// // //           "No prompt engineering skills needed",
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
// // //       },
// // //       {
// // //         heading: "Generate Images & Transcribe Audio",
// // //         points: [
// // //           "High-quality images for any purpose",
// // //           "Fast, accurate transcripts",
// // //           "Effortlessly edit outputs",
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
// // //       },
// // //       {
// // //         heading: "Custom Projects with System Instructions",
// // //         points: [
// // //           "One-time setup keeps replies on-brand",
// // //           "Instantly switch modes across chats",
// // //           "Consistent tone and rules",
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop",
// // //       },
// // //     ];
// // //   }, [cards]);

// // //   const total = items.length;
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start start", "end end"],
// // //   });
// // //   const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 30, mass: 0.3 });

// // //   const sectionMinHeight = `${Math.max(total, 1) * heightPerCardVH}vh`;

// // //   return (
// // //     <section className={`relative ${background}`}>
// // //       <div style={{ minHeight: sectionMinHeight }} className="relative" ref={containerRef}>
// // //         <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
// // //           {/* Headline */}
// // //           <div className="z-20 flex flex-col items-center gap-2 p-6 md:p-10">
// // //             <motion.h2
// // //               className="text-3xl md:text-5xl font-semibold text-gray-900 text-center"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true, amount: 0.6 }}
// // //             >
// // //               {title}
// // //             </motion.h2>
// // //             <motion.p
// // //               className="text-base md:text-lg text-gray-600 text-center max-w-3xl"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
// // //               viewport={{ once: true, amount: 0.6 }}
// // //             >
// // //               {subtitle}
// // //             </motion.p>
// // //           </div>

// // //           {/* Cards stacked */}
// // //           <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
// // //             {items.map((c, i) => {
// // //               const start = i / total;
// // //               const mid = (i + 0.5) / total;
// // //               const end = (i + 1) / total;

// // //               // Fade in at start->mid, fade out at mid->end
// // //               const opacity = useTransform(smoothProgress, [start, mid, end], [0, 1, 0]);
// // //               const y = useTransform(smoothProgress, [start, mid], [50, 0]);

// // //               return (
// // //                 <motion.article
// // //                   key={i}
// // //                   style={{ opacity, y }}
// // //                   className="absolute inset-0 flex items-center justify-center"
// // //                 >
// // //                   <div className="grid w-full max-w-5xl grid-rows-2 gap-6 rounded-2xl bg-white shadow-xl overflow-hidden md:grid-cols-2 md:grid-rows-1">
// // //                     {/* Text */}
// // //                     <div className="flex flex-col justify-center gap-4 p-6">
// // //                       <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">
// // //                         {c.heading}
// // //                       </h3>
// // //                       <ul className="space-y-2 text-gray-700 text-base md:text-lg">
// // //                         {c.points.map((p, idx) => (
// // //                           <li key={idx} className="flex items-start gap-2">
// // //                             <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" />
// // //                             <span>{p}</span>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>

// // //                     {/* Visual */}
// // //                     <div className="overflow-hidden">
// // //                       <img
// // //                         src={c.image}
// // //                         alt={c.heading}
// // //                         className="h-full w-full object-cover"
// // //                         loading="lazy"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </motion.article>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import { useRef } from "react";

// // // export default function ScrollStackCards({ cards }) {
// // //   const containerRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   return (
// // //     <section
// // //       ref={containerRef}
// // //       className="relative h-[500vh] bg-gray-50 flex items-center justify-center"
// // //     >
// // //       <div className="sticky top-0 h-screen flex items-center justify-center">
// // //         {cards.map((card, i) => {
// // //           // Define scroll ranges
// // //           const start = i / cards.length;
// // //           const end = (i + 1) / cards.length;

// // //           // Each card fades in as we reach its scroll range
// // //           const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
// // //           const y = useTransform(scrollYProgress, [start, end], [50, 0]);

// // //           return (
// // //             <motion.div
// // //               key={i}
// // //               style={{ opacity, y }}
// // //               className="absolute w-[80%] max-w-3xl bg-white shadow-2xl rounded-xl p-8"
// // //               // higher index cards will always appear above lower ones
// // //               style={{ zIndex: i + 1, opacity, y }}
// // //             >
// // //               <h2 className="text-2xl font-bold mb-4">{card.heading}</h2>
// // //               <ul className="list-disc ml-6 space-y-2 text-gray-700">
// // //                 {card.points.map((p, j) => (
// // //                   <li key={j}>{p}</li>
// // //                 ))}
// // //               </ul>
// // //             </motion.div>
// // //           );
// // //         })}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // export default function ScrollSwipeCards({ cards }) {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   return (
// //     <section
// //       ref={containerRef}
// //       className="relative h-[500vh] bg-gray-100 flex items-center justify-center"
// //     >
// //       <div className="sticky top-0 h-screen flex items-center justify-center">
// //         {cards.map((card, i) => {
// //           const start = i / cards.length;
// //           const end = (i + 1) / cards.length;

// //           // Each card fades + slides in
// //           const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
// //           const y = useTransform(scrollYProgress, [start, end], [50, 0]);

// //           // Progressive shrinking for depth effect
// //           const scale = useTransform(scrollYProgress, [start, end], [0.85 + i * 0.03, 1]);

// //           // Slight vertical stacking offset
// //           const offsetY = useTransform(scrollYProgress, [start, end], [i * 15, 0]);

// //           return (
// //             <motion.div
// //               key={i}
// //               style={{ opacity, y: offsetY, scale }}
// //               className="absolute w-[80%] max-w-3xl bg-white shadow-2xl rounded-xl p-8"
// //             >
// //               <h2 className="text-2xl font-bold mb-4">{card.heading}</h2>
// //               <ul className="list-disc ml-6 space-y-2 text-gray-700">
// //                 {card.points.map((p, j) => (
// //                   <li key={j}>{p}</li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // }


// // 'use client'
// import Image from 'next/image';
// import styles from './style.module.scss';

// const Card = ({title, description, src, url, color, i}) => {

//   return (
//     <div className={styles.cardContainer}>
//       <div 
//         className={styles.card}
//         style={{backgroundColor: color, top:`calc(-5vh + ${i * 25}px)`}}
//       >
//         <h2>{title}</h2>
//         <div className={styles.body}>
//           <div className={styles.description}>
//             <p>{description}</p>
//             <span>
//               <a href={url} target="_blank">See more</a>
//               <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
//               </svg>
//             </span>
//           </div>

//           <div className={styles.imageContainer}>
//             <div className={styles.inner}>
//               <Image
//                 fill
//                 src={`/images/${src}`}
//                 alt="image" 
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

// import { useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Lenis from '@studio-freight/lenis';

// /**
//  * ScrollCardsParallax
//  * - cards: array of { title, description, image? }
//  * - uses dark theme
//  */
// export default function ScrollCardsParallax({ cards }) {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'],
//   });

//   // Optional: smooth scroll via Lenis
//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative bg-black text-white">
//       {/* Stretch the section so scroll triggers stacking */}
//       <div className="h-[200vh] lg:h-[300vh]">
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           {cards.map((card, i) => {
//             const total = cards.length;
//             const start = i / total;
//             const end = (i + 1) / total;

//             // Fade in current card
//             const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

//             // Slide up slightly
//             const y = useTransform(scrollYProgress, [start, end], [50, 0]);

//             // Slightly shrink older cards (deeper appearance)
//             const scale = useTransform(scrollYProgress, [start, end], [0.9 - i * 0.02, 1]);

//             return (
//               <motion.div
//                 key={i}
//                 style={{ zIndex: i + 10, opacity, y, scale }}
//                 className="absolute h-96 w-10/11 p-8 bg-gray-900 rounded-xl shadow-xl"
//                 // Higher index cards are on top
//               >
//                 <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
//                 <p className="text-gray-300">{card.description}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ParallaxCards() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const cards = [
//     { title: "Card One", text: "This is the first card." },
//     { title: "Card Two", text: "Second card with some info." },
//     { title: "Card Three", text: "Third card sliding on top." },
//     { title: "Card Four", text: "Fourth card coming in last." },
//   ];

//   return (
//     <section
//       ref={container}
//       className="relative h-[500vh] bg-black text-white flex items-center justify-center"
//     >
//       <div className="sticky top-0 h-screen flex items-center justify-center">
//         {cards.map((card, i) => {
//           const start = i / cards.length;
//           const end = (i + 1) / cards.length;

//           // Controls fade + vertical slide
//           const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
//           const y = useTransform(scrollYProgress, [start, end], [100, 0]);

//           // Shrink older cards to create stack effect
//           const scale = useTransform(
//             scrollYProgress,
//             [start, end],
//             [0.9, 1]
//           );

//           return (
//             <motion.div
//               key={i}
//               style={{ opacity, y, scale, zIndex: i + 1 }}
//               className="absolute w-10/11 h-96 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-10"
//             >
//               <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
//               <p className="text-gray-300">{card.text}</p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// // App.jsx
// import React, { useRef, useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import { motion, useScroll, useTransform } from "framer-motion";

// // Example card data
// const projects = [
//   { title: "Matthias Leidinger", description: "Photography from Berlin", color: "#BBACAF" },
//   { title: "Clément Chapillon", description: "Contrasting reality and imagination", color: "#977F6D" },
//   { title: "Zissou", description: "Ambiguous, tension-filled images", color: "#C2491D" },
// ];

// export default function App() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Smooth scroll setup
//   useEffect(() => {
//     const lenis = new Lenis({ smooth: true });
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   return (
//     <main ref={containerRef} className="relative bg-black text-white min-h-[300vh]">
//       {projects.map((proj, i) => {
//         const start = i / projects.length;
//         const end = (i + 1) / projects.length;

//         // Scale + y transform for parallax
//         const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
//         const y = useTransform(scrollYProgress, [start, end], [0, -100]);

//         return (
//           <section key={i} className="h-screen relative">
//             <motion.div
//               className="sticky top-0 h-screen flex items-center justify-center"
//               style={{ scale, y }}
//             >
//               <div
//                 className="w-11/12 h-96 p-8 rounded-2xl shadow-xl"
//                 style={{ backgroundColor: proj.color }}
//               >
//                 <h2 className="text-4xl font-bold mb-4">{proj.title}</h2>
//                 <p className="text-lg">{proj.description}</p>
//               </div>
//             </motion.div>
//           </section>
//         );
//       })}
//     </main>
//   );
// }

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Data (feel free to replace)
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

function ScrollSwipeCards({ i, title, description, img, url, color, progress, range, targetScale }) {
  const containerRef = useRef(null);

  // Local scroll for image parallax (scale image as card enters)
  const { scrollYProgress: localProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(localProgress, [0, 1], [2, 1]);

  // Global scroll controls the card scale (parallax depth)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <section ref={containerRef} className="relative h-screen">
      {/* Sticky card with slight top offset to create the stacked look */}
      <motion.div
        className="sticky top-0 flex items-center justify-center h-screen"
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div
          className="w-[90vw] max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-black/10"
          style={{ backgroundColor: color }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text side */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-black/20 text-black">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]">
                {title}
              </h2>
              <p className="text-base md:text-lg opacity-90 mb-6">
                {description}
              </p>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
                >
                  See more
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Image side */}
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[40vh]">
              <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
                <img src={img} alt={title} className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
