import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SwipeCards({
  i,
  title,
  description,
  img,
  url,
  progress,
  range,
  targetScale,
  tags,
  date,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress: localProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(localProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale || 1]);

  return (
    <motion.div
      ref={containerRef}
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{
        scale,
        zIndex: i + 1,
        left: 0,
        right: 0,
        margin: "0 auto",
      }}
    >
      <div className="relative h-[74vh] w-[90vw] max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-zinc-950 shadow-2xl">
        {img && (
          <img
            src={img}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            style={{ scale: imageScale }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        <div className="relative grid h-full grid-cols-1 text-white md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-8 md:p-12">
            {date && <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">{date}</p>}
            <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-zinc-200 md:text-lg">
              {description}
            </p>

            {tags?.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {url && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
              >
                View project
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            )}
          </div>

          <div className="hidden items-center justify-center p-8 md:flex">
            {img && (
              <img
                src={img}
                alt={`${title} illustration`}
                className="max-h-64 w-full rounded-2xl border border-white/10 object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
