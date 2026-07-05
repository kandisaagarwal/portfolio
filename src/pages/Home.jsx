import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useScroll } from "framer-motion";
import RobotModel from "../models/RobotModel";
import Loader from "../components/Loader";
import SwipeCards from "../components/SwipeCards";
import FloatingButton from "../components/FloatingButton";
import { projects } from "../data/projects_data";
import { skills } from "../data/skils_data";
import Background from "../components/Background";
import SkillsCarousel from "../components/SkillsCarousel";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "C/C++", "Bash", "HTML", "R", "MATLAB"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "DAX", "Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "SciPy", "PyTorch", "Hugging Face Transformers"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Next.js", "React Native", "Node.js", "Prisma ORM", "PostgreSQL", "MongoDB", "Supabase", "Docker", "Git", "AWS S3", "Clerk"],
  },
  {
    title: "AI / ML & Practices",
    items: ["OpenAI Realtime API", "GPT-4o", "Gemini API", "Transformer fine-tuning", "Prompt Engineering", "Class Imbalance Handling", "Agile", "REST APIs", "Technical Writing", "LaTeX"],
  },
];

const experiences = [
  {
    title: "Student Fundraising Team Lead",
    org: "Advancement & Alumni Engagement – Simon Fraser University",
    dates: "September 2025 – Present",
    bullets: [
      "Manage daily data operations for 30,000+ alumni outreach records and track gift transactions over $500 for a 35+ person calling team.",
      "Coached callers on objection handling, helped exceed fundraising targets, and supported reporting integrity for the advancement office.",
    ],
  },
  {
    title: "Student Fundraiser",
    org: "Advancement & Alumni Engagement – Simon Fraser University",
    dates: "February 2024 – August 2025",
    bullets: [
      "Secured $15,000+ in alumni donations and ranked in the top 5% of callers across multiple fundraising cycles.",
      "Maintained 100% data accuracy across 4,000+ donor records and transactions while adapting communication style to diverse alumni profiles.",
    ],
  },
];

const volunteer = [
  {
    title: "Finance Coordinator",
    org: "SFU Data Science Student Society",
    dates: "September 2025 – April 2026",
    bullets: [
      "Managed budget allocation, reimbursement processing, and financial reporting for a student organization serving 200+ data science students.",
      "Coordinated event budgeting and sponsorship tracking while supporting workshops and networking events.",
    ],
  },
  {
    title: "Peer Tutor – Computing Science",
    org: "SFU Computing Science Peer Tutoring",
    dates: "September 2024 – December 2024",
    bullets: [
      "Taught introductory programming, data structures, algorithms, and discrete mathematics to undergraduate students.",
      "Translated complex concepts into approachable explanations and supported students during high-volume exam periods.",
    ],
  },
];

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="flex flex-col bg-black">
      <Background />

      <div className="z-4 h-screen w-full">
        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 0, 5]} intensity={0.6} />

            <FloatingButton
              position={[0, 2, 1]}
              label="KANDISA AGARWAL"
              targetId=""
              colour="black"
              textcolour="#00c6ff"
              textsize={30}
              size={0}
              widthScale={[1, 0.1, 0.1]}
            />

            <RobotModel />

            <FloatingButton
              position={[4, -1, 1]}
              label="Projects"
              targetId="projects-section"
              colour="purple"
              size={1}
              widthScale={[0.4, 0.4, 0.4]}
            />

            <FloatingButton
              position={[-4, 1, 1]}
              label="Skills"
              targetId="skills-section"
              colour="hotpink"
              size={1}
              widthScale={[0.4, 0.4, 0.4]}
            />

            <FloatingButton
              position={[-4, -1.5, 1]}
              label="Resume"
              targetId="resume-section"
              colour="purple"
              size={1}
              widthScale={[0.4, 0.4, 0.4]}
            />
          </Suspense>

          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

      <section id="about-section" className="mx-auto max-w-6xl px-6 py-20 text-white">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Computing Science student building AI, data, and research-driven products.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
          I’m a Bachelor of Science student at Simon Fraser University, specializing in computing science with a strong interest in machine learning, analytics, and human-centered AI applications. My work spans building real-time AI systems, developing interpretable NLP models, and communicating technical findings through research and data storytelling.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Education</p>
            <p className="mt-2 font-semibold">BSc, Computing Science (Co-op)</p>
            <p className="mt-1 text-sm text-zinc-400">SFU • Expected Dec 2026</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Focus</p>
            <p className="mt-2 font-semibold">AI Systems & Analytics</p>
            <p className="mt-1 text-sm text-zinc-400">Realtime APIs, NLP, dashboards, research</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Current</p>
            <p className="mt-2 font-semibold">Student Fundraising Team Lead</p>
            <p className="mt-1 text-sm text-zinc-400">Leading data operations and outreach strategy</p>
          </div>
        </div>
      </section>

      <section id="skills-section" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">Skills</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
            A blend of AI, analytics, product development, and collaborative engineering experience.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SkillsCarousel skillsProp={skills} />
          </div>
        </div>
      </section>

      <section
        id="projects-section"
        ref={containerRef}
        className="relative w-full min-h-screen bg-black py-16"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <Background />
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl">Projects</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
          Selected work spanning AI products, NLP research, analytics, and mobile app experiences.
        </p>

        <div className="mt-8">
          {projects.map((proj, i) => {
            const start = i / projects.length;
            const end = (i + 1) / projects.length;

            return (
              <SwipeCards
                key={proj.title}
                i={i}
                title={proj.title}
                description={proj.description}
                img={proj.img}
                url={proj.url}
                tags={proj.tags}
                date={proj.date}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={0.9}
              />
            );
          })}
        </div>
      </section>

      <section id="resume-section" className="mx-auto max-w-6xl px-6 py-24 text-white">
        <h1 className="text-center text-4xl font-bold md:text-5xl">Resume</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-400">
          A snapshot of my education, leadership experience, and technical background.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">Education</h2>
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold">Bachelor of Science, Computing Science (Co-op)</p>
                <p className="mt-1 text-zinc-300">Simon Fraser University</p>
                <p className="mt-1 text-sm text-zinc-400">September 2023 – December 2026 (Expected)</p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Relevant coursework: Computational Data Science, Machine Learning, Database Systems, Computer Security, Computer Graphics, and Intro to Computing Science Research.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">Experience</h2>
              <div className="mt-4 space-y-4">
                {experiences.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{item.org}</p>
                    <p className="mt-1 text-sm text-zinc-400">{item.dates}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-cyan-300">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">Leadership & Volunteering</h2>
              <div className="mt-4 space-y-4">
                {volunteer.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{item.org}</p>
                    <p className="mt-1 text-sm text-zinc-400">{item.dates}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-cyan-300">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">Highlights</h2>
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-300">
                <ul className="space-y-2">
                  <li>• Built an AI-powered fundraising simulator and led architecture and sprint planning.</li>
                  <li>• Achieved a Macro-F1 of 0.7811 on a 7-class mental health NLP classifier.</li>
                  <li>• Published research on cross-modal prompt injection attacks and AI safety implications.</li>
                  <li>• Delivered a Power BI dashboard for agricultural ROI analysis in a 24-hour hackathon.</li>
                  <li>• Built a Gemini-powered medical assistant app at StormHacks 2025.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
