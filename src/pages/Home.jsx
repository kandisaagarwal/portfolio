import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'
import RobotModel from '../models/RobotModel'
import Loader from '../components/Loader'
import SectionsOverlay from './SectionsOverlay'
import FloatingButton from './FloatingButton'
import ScrollSwipeCards from "./ScrollSwipeCards";


const PAGES = 3 // change to how many full-screen sections you want

export default function Home() {
  const scrollRef = useRef();

  const handleNavigate = (section) => {
    const sectionIndex = { about: 0, projects: 1, resume: 2 }[section]
    if (sectionIndex !== undefined && scrollRef.current) {
      scrollRef.current.el.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth',
      })
    }
  }
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  return (
    <div>
    <section style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          {/* single place for lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[0, 0, 5]} intensity={0.6} />

          <ScrollControls damping={0.12} ref={scrollRef}>
            {/* 3D content (robot) — still inside <Scroll> so useScroll works */}
            <Scroll>
              <RobotModel />

              <FloatingButton
                position={[4, -1, 0]}
                label="Projects"
                onClick={() => {
                  // Use React Router's useNavigate for routing
                  window.location.href = '/project';
                }}
              />

              <FloatingButton
                position={[-4, 1, 0]}
                label="About"
                onClick={() => handleNavigate('about')}
              />
            </Scroll>

            {/* DOM content driven by scroll */}
            <Scroll html>
              <SectionsOverlay pages={PAGES} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </section>
    
        <section ref={mainRef} className="bg-black text-white">
      {projects.map((p, i) => {
        // Target scale diminishes for older cards -> depth
        const targetScale = 1 - (projects.length - i) * 0.05;
        const rangeStart = i / projects.length; // same as tutorial's i * .25 when 4 items
        return (
          <Card
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

        <ScrollSwipeCards />

        {/* <ScrollSwipeCards
        title="One Window. Six Perspectives."
        subtitle="Achieve Optimal Efficiency."
        cards={[
          {
            heading: "Compare All Premium AIs at Once",
            points: [
              "Save hours of manual comparison",
              "Customize your AI team instantly",
              "Never miss the most accurate answer again",
            ],
            image: "/images/card-1.png",
          },
          {
            heading: "Prompt Boost – Instant Enhancement",
            points: [
              "Turn rough ideas into perfect prompts",
              "Get 10x better responses instantly",
              "No prompt engineering skills needed",
            ],
            image: "/images/card-2.png",
          },
        ]}
        heightPerCardVH={120} // tune scroll distance per swipe
      /> */}

    </div>
  )
}


