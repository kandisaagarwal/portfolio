// import { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import Loader from '../components/Loader'
// import RobotModel from '../models/RobotModel'
// import { OrbitControls, ScrollControls } from '@react-three/drei'

// const Home = () => {
//   return (
//     <section className='w-full h-screen relative'>
//         {/*Do you want a popup?? If not then see what you can put here*/}


//         <Canvas className='w-full h-screen bg-transparent
//         camera={{near: 0.1, far: 1000}}>'>
//             <ambientLight intensity={0.5}/>
//             <Suspense fallback={<Loader />}>
//             <ScrollControls pages={1} damping={4}>
//                 <RobotModel />
//             </ScrollControls>
//             <OrbitControls enableZoom={false} />
//                 <directionalLight/>
//                 <ambientLight/>
//                 <pointLight/>
//                 <spotLight/>
//                 <hemisphereLight/>
//             </Suspense>
//         </Canvas>
//     </section>
//   )
// }

// export default Home

import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import RobotModel from '../models/RobotModel'
import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei'

const Home = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
  
      // You can tweak these multipliers
      const rotateY = scrollY * 2   // horizontal twist
      const rotateX = scrollY * 3   // upward tilt
      const translateZ = -scrollY * 4  // move into the screen
  
      if (sectionRef.current) {
        sectionRef.current.style.transform = `
          perspective(1000px)
          rotateY(${rotateY}deg)
          rotateX(${rotateX}deg)
          translateZ(${translateZ}px)
        `
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    
    <section
      ref={sectionRef}
      className='w-full h-screen relative transition-transform duration-300'
      style={{
        transformOrigin: 'center center',
        willChange: 'transform',
      }}
    >
      <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={2} damping={4}>
            <Scroll>
              {/* Model 1 */}
              <group position={[0, 0, 0]}>
                <RobotModel />
              </group>

              {/* Model 2 (scroll to see it) */}
              <group position={[0, -10, 0]}>
              </group>
            </Scroll>
          </ScrollControls>
          <OrbitControls enableZoom={false} />
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home

