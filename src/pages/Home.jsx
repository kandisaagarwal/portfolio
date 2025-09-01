import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useScroll } from "framer-motion";
import RobotModel from "../models/RobotModel";
import Loader from "../components/Loader";
import ScrollSwipeCards from "./ScrollSwipeCards";
import { projects } from "./projects_data"; // ✅ your projects array

export default function Home() {
  const containerRef = useRef(null);

  // Track page scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="w-screen min-h-screen bg-black flex flex-col">
      {/* 3D Robot Section */}
      <div className="w-full h-screen">
        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 0, 5]} intensity={0.6} />

            {/* Robot */}
            <RobotModel />
          </Suspense>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Projects Section */}
      <div
        ref={containerRef}
        className="relative w-full bg-gray-900"
        style={{ height: `${projects.length * 100}vh` }} // each card takes a full screen
      >
        {projects.map((proj, i) => {
          const start = i / projects.length;
          const end = (i + 1) / projects.length;

          return (
            <ScrollSwipeCards
              key={i}
              i={i}
              title={proj.title}
              description={proj.description}
              img={proj.img}
              url={proj.url}
              color={proj.color}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={0.9}
            />
          );
        })}
      </div>
    </div>
  );
}
