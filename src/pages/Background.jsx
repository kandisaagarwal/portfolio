// Background.jsx
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef } from "react";

export default function Background() {
  const ref = useRef();
  // Generate random sphere points
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
        >
          <PointMaterial
            transparent
            color="#ffffff"
            size={0.01}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
