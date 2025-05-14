import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function AnimatedModel(props) {
  const group = useRef()
  const scroll = useScroll()
  const { scene, animations } = useGLTF('/robot.glb')  // model.glb should be in public/
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log('Available animations:', Object.keys(actions))
    const firstAction = Object.values(actions)[0]
    if (firstAction) firstAction.play()
  }, [actions])

  return (
    <primitive
      ref={group}
      object={scene}
      scale={[2.25, 2.25, 2.25]} // Increase the size of the model (uniform scaling)
      position={[0, -1.75, 0]} // Move the model down by decreasing the y value
      {...props}
    />
  )
}