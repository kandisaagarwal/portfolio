import { Float, Html } from '@react-three/drei'

export default function FloatingButton({ position, label, targetId }) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        position={position}
        onClick={handleClick}
        onPointerOver={() => { document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { document.body.style.cursor = "auto"; }}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
        <Html center>
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            {label}
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
