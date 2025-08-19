import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSwipeCards({ i, title, description, img, url, color, progress, range, targetScale }) {
  const containerRef = useRef(null);

  // Local scroll for image parallax (scale image as card enters)
  const { scrollYProgress: localProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(localProgress, [0, 1], [2, 1]);

  // Only animate scale if you want a parallax effect, otherwise keep it 1
  // If you want a subtle effect, use [1, 0.97] or similar
  const scale = useTransform(progress, range, [1, targetScale || 1]);

  return (
    <motion.div
      ref={containerRef}
      className="sticky top-0 flex items-center justify-center h-screen"
      style={{
        scale,
        zIndex: i + 1,
        // Ensure all cards are perfectly aligned
        left: 0,
        right: 0,
        margin: "0 auto",
      }}
    >
      <div
        className="w-[90vw] max-w-6xl h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-black/10 flex flex-col justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
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
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"/>
                </svg>
              </a>
            )}
          </div>

          <div className="relative aspect-[4/3] md:aspect-auto min-h-[40vh]">
            <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
              <img src={img} alt={title} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
