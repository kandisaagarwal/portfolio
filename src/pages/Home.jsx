import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { useScroll } from "framer-motion";
import RobotModel from "../models/RobotModel";
import Loader from "../components/Loader";
import SwipeCards from "../components/SwipeCards";
import FloatingButton from "../components/FloatingButton"; // ✅ Import your floating button
import { projects } from "../data/projects_data"; // ✅ your projects array
import Background from "../components/Background";
import SkillsCarousel from "../components/SkillsCarousel";

export default function Home() {
  const containerRef = useRef(null);

  // Track page scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    
    <div className=" bg-black flex flex-col">
      <Background />
{/* 
      <Canvas className="w-0">
              <FloatingButton 
              position={[0, -1.5, 1]} 
              label="Projects" 
              targetId="projects-section" 
        />
      </Canvas> */}

      {/* 3D Robot Section */}
      <div className="w-full h-screen z-4">
        
        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 0, 5]} intensity={0.6} />

             <FloatingButton 
              position={[0,2,1]}  
              label="KANDISA AGARWAL" 
              targetId=""
              colour={"black"}
              textcolour={"#00c6ff"}
              textsize={30}
              size={0} 
              widthScale={[1,0.1,0.1]}
              />

            {/* Robot */}
            <RobotModel />

            <FloatingButton 
              position={[4, -1, 1]} 
              label="Projects" 
              targetId="projects-section" 
              colour={"purple"}
              size={1} 
              widthScale={[0.4,0.4,0.4]}
              />

              <FloatingButton 
              position={[-4, 1, 1]} 
              label="Skills" 
              targetId="skills-section" 
              colour={"hotpink"}
              size={1} 
              widthScale={[0.4,0.4,0.4]}
              />

              <FloatingButton 
              position={[-4, -1.5, 1]} 
              label="Resume" 
              targetId="resume-section" 
              colour={"purple"}
              size={1} 
              widthScale={[0.4,0.4,0.4]}
              />

          </Suspense>

          <OrbitControls enableZoom={false} enableRotate={false}/>
        </Canvas>
 
      </div>
    
      <br/>
      <br/>
      <br/>
      <br/>
      

      <div
      id="skills-section">
      <br/>
      <br/>
        <h1 className="text-white text-center text-5xl font-bold"> Skills </h1>


        <SkillsCarousel/>

      </div>

       <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>

      {/* Projects Section */}
      <div
        id="projects-section"
        ref={containerRef}
        className="relative w-full h-screen bg-black"
        style={{ height: `${projects.length * 100}vh` }}
      >
      <Background />

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
