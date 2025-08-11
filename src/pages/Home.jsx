import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import RobotModel from '../models/RobotModel'
import Loader from '../components/Loader'
import SectionsOverlay from './SectionsOverlay'
import FloatingButton from './FloatingButton'

const PAGES = 3 // change to how many full-screen sections you want

export default function Home() {
    const handleNavigate = (section) => {
    const sectionIndex = { about: 0, projects: 1, resume: 2 }[section]
    if (sectionIndex !== undefined) {
      scrollRef.current.el.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* single place for lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, 0, 5]} intensity={0.6} />

        <Suspense fallback={<Loader />}>
          <ScrollControls pages={PAGES} damping={0.12}>
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

            {/* DOM content driven by scroll */}}
            <Scroll html>
              <SectionsOverlay pages={PAGES} />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </section>
  )
}
