// import React, { useRef, useEffect } from 'react'
// import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

// export default function RobotModel({ pages = 4, ...props }) {
//   const group = useRef()
//   const scroll = useScroll()
//   const { scene, animations } = useGLTF('/robot.glb') // ensure this path is correct
//   const { actions } = useAnimations(animations, group)

//   // animation clip playback (unchanged from your working file)
//   useEffect(() => {
//     const firstAction = Object.values(actions)[0]
//     if (firstAction) firstAction.play()
//   }, [actions])

//   // smoothing refs
//   const baseZ = 0 // visible Z
//   const amplitude = 6 // how far the robot "disappears" (tweak to taste)

//   useFrame((state, delta) => {
//     if (!group.current) return

//     // pageProgress ranges 0..pages (e.g. 0.0 -> 3.999)
//     const pageProgress = scroll.offset * pages

//     // We want robot to be closest at integer page centers, farthest at half-integers.
//     // Use abs(sin(pi * pageProgress)) → 0 at integers, 1 at half-integers.
//     const awayFactor = Math.abs(Math.sin(pageProgress * Math.PI))

//     const targetZ = baseZ - awayFactor * amplitude

//     // smooth interpolation for nice motion
//     group.current.position.z = THREE.MathUtils.lerp(
//       group.current.position.z,
//       targetZ,
//       0.08
//     )

//     // optional: slight rotation tied to pageProgress (or keep idle spin)
//     const targetY = pageProgress * 0.3 // tweak for rotational feel
//     group.current.rotation.y = THREE.MathUtils.lerp(
//       group.current.rotation.y,
//       targetY,
//       0.06
//     )
//   })

//   return (
//     <primitive
//       ref={group}
//       object={scene}
//       scale={[2,2,2]}     // smaller default — tweak if needed
//       position={[0, -1.75, 0]}
//       {...props}
//     />
//   )
// }

// useGLTF.preload('/robot.glb')


// RobotModel.jsx
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function RobotModel(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/robot.glb') // keep robot.glb inside "public/"
  const { actions } = useAnimations(animations, group)

  // Play first animation if available
  useEffect(() => {
    const firstAction = Object.values(actions)[0]
    if (firstAction) firstAction.play()
  }, [actions])

  return (
    <primitive
      ref={group}
      object={scene}
      scale={[2, 2, 2]}
      position={[0, -2.2, -1]} // adjust Y if robot is floating/sinking
      {...props}
    />
  )
}

useGLTF.preload('/robot.glb')
