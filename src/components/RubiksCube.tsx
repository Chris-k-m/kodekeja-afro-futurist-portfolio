import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

type CubeProps = {
  pulse: number; // 0..1 pulse intensity
  hue: THREE.Color;
};

const FACE_COLORS = [
  "#22d3ee", // cyan - primary
  "#10b981", // emerald - secondary
  "#f5b43c", // gold - accent
  "#ef4444", // red
  "#a855f7", // purple
  "#f8fafc", // white
];

const Cubie = ({ position }: { position: [number, number, number] }) => {
  const materials = useMemo(
    () =>
      FACE_COLORS.map(
        (c) =>
          new THREE.MeshStandardMaterial({
            color: c,
            metalness: 0.6,
            roughness: 0.25,
            emissive: new THREE.Color(c),
            emissiveIntensity: 0.15,
          }),
      ),
    [],
  );

  return (
    <mesh position={position} castShadow receiveShadow material={materials}>
      <boxGeometry args={[0.92, 0.92, 0.92]} />
    </mesh>
  );
};

const RubiksGroup = ({ pulseRef }: { pulseRef: React.MutableRefObject<number> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const t0 = useRef(0);

  const cubies = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) arr.push([x, y, z]);
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    t0.current += delta;
    groupRef.current.rotation.y += delta * 0.6;
    groupRef.current.rotation.x = Math.sin(t0.current * 0.4) * 0.3;

    // Pulse cycle ~ every 2.4s
    const cycle = 2.4;
    const phase = (t0.current % cycle) / cycle; // 0..1
    // Bell-shaped pulse peaking around 0.5
    const pulse = Math.exp(-Math.pow((phase - 0.5) * 4, 2));
    pulseRef.current = pulse;

    const scale = 1 + pulse * 0.12;
    groupRef.current.scale.setScalar(scale);

    // Emissive pulse on materials
    groupRef.current.traverse((obj) => {
      const m = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial[] | undefined;
      if (Array.isArray(m)) {
        m.forEach((mat) => {
          mat.emissiveIntensity = 0.15 + pulse * 0.85;
        });
      }
    });
  });

  return (
    <group ref={groupRef}>
      {cubies.map((p, i) => (
        <Cubie key={i} position={p} />
      ))}
    </group>
  );
};

const RubiksCube = ({
  onPulse,
}: {
  onPulse?: (p: number) => void;
}) => {
  const pulseRef = useRef(0);
  const lastPeak = useRef(0);

  return (
    <Canvas
      camera={{ position: [4.5, 3.5, 5.5], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      frameloop="always"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <pointLight position={[-5, -3, -4]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[5, -2, 3]} intensity={0.6} color="#10b981" />
      <RubiksGroup pulseRef={pulseRef} />
      <PulseEmitter
        getPulse={() => pulseRef.current}
        onPeak={() => {
          const now = performance.now();
          if (now - lastPeak.current > 1500) {
            lastPeak.current = now;
            onPulse?.(pulseRef.current);
          }
        }}
      />
    </Canvas>
  );
};

const PulseEmitter = ({
  getPulse,
  onPeak,
}: {
  getPulse: () => number;
  onPeak: () => void;
}) => {
  const above = useRef(false);
  useFrame(() => {
    const p = getPulse();
    if (p > 0.85 && !above.current) {
      above.current = true;
      onPeak();
    } else if (p < 0.5) {
      above.current = false;
    }
  });
  return null;
};

export default RubiksCube;
