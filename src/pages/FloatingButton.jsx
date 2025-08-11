// FloatingButton.jsx
import { Float, Html } from '@react-three/drei'

export default function FloatingButton({ position, label, onClick }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} onClick={onClick}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
        <Html center>
          <div style={{ color: 'white', fontWeight: 'bold', pointerEvents: 'none' }}>
            {label}
          </div>
        </Html>
      </mesh>
    </Float>
  )
}
