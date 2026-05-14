import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

/* ---------- Palette (Afro-futuristic neon) ---------- */
const NEON = {
  magenta: "#d946ef",
  purple: "#a855f7",
  blue: "#22d3ee",
  teal: "#10b981",
  gold: "#f5b43c",
  white: "#f8fafc",
};

const FACE_PALETTE = [NEON.blue, NEON.teal, NEON.gold, NEON.magenta, NEON.purple, NEON.white];

/* ---------- Single Cubie ---------- */
type CubiePos = [number, number, number];

const Cubie = ({
  basePos,
  index,
  pulseRef,
  detachRef,
}: {
  basePos: CubiePos;
  index: number;
  pulseRef: React.MutableRefObject<number>;
  detachRef: React.MutableRefObject<number>;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // Per-cubie randomness
  const seed = useMemo(() => ({
    color: FACE_PALETTE[index % FACE_PALETTE.length],
    phase: Math.random() * Math.PI * 2,
    speed: 0.6 + Math.random() * 0.8,
    drift: 0.35 + Math.random() * 0.45,
    rotAxis: new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5,
    ).normalize(),
    // detach offset direction = away from center
    outDir: new THREE.Vector3(...basePos).normalize().lengthSq() > 0
      ? new THREE.Vector3(...basePos).normalize()
      : new THREE.Vector3(0, 1, 0),
  }), [basePos, index]);

  useFrame((state) => {
    const mesh = meshRef.current;
    const mat = matRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;

    // Detach amount: 0..1 — drives outward float + independent rotation
    const detach = detachRef.current;
    // Per-cubie wobble so each one breathes individually
    const wobble = (Math.sin(t * seed.speed + seed.phase) * 0.5 + 0.5) * detach;

    const offsetMag = wobble * seed.drift;
    mesh.position.set(
      basePos[0] + seed.outDir.x * offsetMag,
      basePos[1] + seed.outDir.y * offsetMag,
      basePos[2] + seed.outDir.z * offsetMag,
    );

    // Independent rotation while detached
    const rotAmt = wobble * 0.8;
    mesh.rotation.x = seed.rotAxis.x * rotAmt + Math.sin(t * 0.4 + seed.phase) * 0.05;
    mesh.rotation.y = seed.rotAxis.y * rotAmt + Math.cos(t * 0.4 + seed.phase) * 0.05;
    mesh.rotation.z = seed.rotAxis.z * rotAmt;

    // Emissive pulse
    if (mat) {
      mat.emissiveIntensity = 0.25 + pulseRef.current * 1.4;
    }
  });

  return (
    <mesh ref={meshRef} position={basePos} castShadow receiveShadow>
      <boxGeometry args={[0.88, 0.88, 0.88]} />
      <meshPhysicalMaterial
        ref={matRef}
        color={seed.color}
        metalness={0.85}
        roughness={0.18}
        clearcoat={1}
        clearcoatRoughness={0.15}
        reflectivity={0.6}
        emissive={new THREE.Color(seed.color)}
        emissiveIntensity={0.25}
      />
      {/* Edge rim light */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.9, 0.9, 0.9)]} />
        <lineBasicMaterial color={seed.color} transparent opacity={0.55} />
      </lineSegments>
    </mesh>
  );
};

/* ---------- Cube assembly ---------- */
const CubeAssembly = ({
  pulseRef,
  detachRef,
  mouseRef,
}: {
  pulseRef: React.MutableRefObject<number>;
  detachRef: React.MutableRefObject<number>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const t0 = useRef(0);
  const targetRot = useRef({ x: 0, y: 0 });

  const cubies: CubiePos[] = useMemo(() => {
    const arr: CubiePos[] = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) arr.push([x, y, z]);
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    t0.current += delta;

    // Continuous slow rotation
    groupRef.current.rotation.y += delta * 0.35;

    // Parallax from mouse
    targetRot.current.x = mouseRef.current.y * 0.35;
    targetRot.current.y += (mouseRef.current.x * 0.4 - (targetRot.current.y - 0)) * 0.05;
    groupRef.current.rotation.x +=
      (Math.sin(t0.current * 0.3) * 0.18 + targetRot.current.x - groupRef.current.rotation.x) *
      0.04;

    // Pulse cycle ~3.2s, bell shape
    const cycle = 3.2;
    const phase = (t0.current % cycle) / cycle;
    const pulse = Math.exp(-Math.pow((phase - 0.5) * 4, 2));
    pulseRef.current = pulse;

    // Detach cycle: cubies float out between pulses, return at peak
    // Detach high during phase 0..0.35 and 0.65..1, low at peak
    const detach = Math.min(
      1,
      Math.max(0, 1 - Math.exp(-Math.pow((phase - 0.5) * 3.2, 2)) * 1.05),
    );
    detachRef.current = detach;

    // Whole-cube subtle scale pulse
    const s = 1 + pulse * 0.06;
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group ref={groupRef}>
      {cubies.map((p, i) => (
        <Cubie key={i} basePos={p} index={i} pulseRef={pulseRef} detachRef={detachRef} />
      ))}
    </group>
  );
};

/* ---------- Particles ---------- */
const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 220;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.04;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.04}
        color={NEON.blue}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

/* ---------- Pulse peak emitter ---------- */
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
    } else if (p < 0.4) {
      above.current = false;
    }
  });
  return null;
};

/* ---------- Mouse parallax sync ---------- */
const MouseSync = ({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) => {
  const { gl } = useThree();
  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.x = x;
      mouseRef.current.y = -y;
    };
    const onLeave = () => { mouseRef.current.x = 0; mouseRef.current.y = 0; };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [gl, mouseRef]);
  return null;
};

/* ---------- Main ---------- */
const RubiksCube = ({ onPulse }: { onPulse?: (p: number) => void }) => {
  const pulseRef = useRef(0);
  const detachRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastPeak = useRef(0);

  return (
    <Canvas
      camera={{ position: [4.8, 3.6, 5.8], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      frameloop="always"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 5]} intensity={1.1} color={NEON.white} />
      <pointLight position={[-6, -2, -4]} intensity={1.6} color={NEON.magenta} distance={20} />
      <pointLight position={[6, -3, 3]} intensity={1.4} color={NEON.blue} distance={20} />
      <pointLight position={[0, 6, -3]} intensity={0.9} color={NEON.gold} distance={18} />
      <pointLight position={[-3, 4, 4]} intensity={0.8} color={NEON.purple} distance={18} />

      <Environment preset="city" />

      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.55}>
        <CubeAssembly pulseRef={pulseRef} detachRef={detachRef} mouseRef={mouseRef} />
      </Float>

      <Particles />

      <MouseSync mouseRef={mouseRef} />

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

export default RubiksCube;
