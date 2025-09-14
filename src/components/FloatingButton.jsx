import { Float, Html } from '@react-three/drei'

export default function FloatingButton({ position, label, targetId, colour, textcolour, textsize, radius, widthScale }) {
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
        scale={widthScale}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={colour} />
        <Html center>
          <div
            style={{
              color: textcolour || 'white',
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontSize: textsize
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
