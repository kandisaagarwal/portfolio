import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useScroll } from "framer-motion";
import RobotModel from "../models/RobotModel";
import Loader from "../components/Loader";
import SwipeCards from "./SwipeCards";
import FloatingButton from "../components/FloatingButton"; // ✅ Import your floating button
import { projects } from "../data/projects_data"; // ✅ your projects array
import Background from "./Background";


export default function Home() {
  const containerRef = useRef(null);

  // Track page scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    
    <div className="w-screen min-h-screen bg-black flex flex-col">
      <Background />

      {/* 3D Robot Section */}
      <div className="w-full h-screen z-4">
        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 0, 5]} intensity={0.6} />

            {/* Robot */}
            <RobotModel />

            <FloatingButton 
              position={[3, 1, 0]} 
              label="Projects" 
              targetId="projects-section" 
              />

          </Suspense>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    

      {/* Projects Section */}
      <div
        id="projects-section"
        ref={containerRef}
        className="relative w-full bg-black"
        style={{ height: `${projects.length * 100}vh` }}
      >
      <Background />

      <br/>
      <br/>

      <h1 className="text-white text-center text-5xl font-bold"> Projects </h1>

        {projects.map((proj, i) => {
          const start = i / projects.length;
          const end = (i + 1) / projects.length;

          return (
            <SwipeCards
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

      <h1>Hellow this is testing</h1>

    </div>
  );
}
