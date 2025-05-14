import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        <div className="relative w-20 h-20">
          {/* Rotating Outer Square */}
          <div className="absolute w-full h-full border-4 border-blue-500 animate-spin"></div>
          {/* Rotating Inner Square (Opposite Direction) */}
          <div className="absolute w-16 h-16 border-4 border-blue-300 animate-spin-reverse"></div>
          {/* Static Center Square */}
          <div className="absolute w-8 h-8 bg-blue-500"></div>
        </div>
      </div>
    </Html>
  )
}

export default Loader