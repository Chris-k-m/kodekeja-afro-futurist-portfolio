import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

/* ---------- Palette (premium dark graphite) ---------- */
const NEON = {
  magenta: "#3a3a42",   // graphite warm
  purple: "#2a2a30",    // deep charcoal
  blue: "#5a6068",      // cool steel
  teal: "#3d4248",      // gunmetal
  gold: "#8a8f96",      // brushed silver accent
  white: "#c9ccd1",     // soft platinum
};

/* 6 modules arranged as a 2x3 cluster — connect into a slab when assembled */
const MODULE_SIZE = 1.25;
const GAP = 0.04;
const STEP = MODULE_SIZE + GAP;

type ModuleDef = {
  basePos: [number, number, number];
  color: string;
  accent: string;
};

const MODULES: ModuleDef[] = [
  { basePos: [-STEP, STEP / 2, 0], color: NEON.blue, accent: NEON.white },
  { basePos: [0, STEP / 2, 0], color: NEON.teal, accent: NEON.white },
  { basePos: [STEP, STEP / 2, 0], color: NEON.gold, accent: NEON.white },
  { basePos: [-STEP, -STEP / 2, 0], color: NEON.magenta, accent: NEON.white },
  { basePos: [0, -STEP / 2, 0], color: NEON.purple, accent: NEON.white },
  { basePos: [STEP, -STEP / 2, 0], color: NEON.white, accent: NEON.blue },
];

/* ---------- Single Module Cube ---------- */
const ModuleCube = ({
  def,
  index,
  pulseRef,
  detachRef,
}: {
  def: ModuleDef;
  index: number;
  pulseRef: React.MutableRefObject<number>;
  detachRef: React.MutableRefObject<number>;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const rimRef = useRef<THREE.LineBasicMaterial>(null);

  const seed = useMemo(() => {
    const out = new THREE.Vector3(...def.basePos);
    if (out.lengthSq() < 0.001) out.set(0, 1, 0);
    out.normalize();
    // push z slightly so things separate in depth too
    out.z += (Math.random() - 0.5) * 0.6;
    out.normalize();
    return {
      phase: Math.random() * Math.PI * 2,
      speed: 0.45 + Math.random() * 0.5,
      drift: 0.55 + Math.random() * 0.55,
      spinAxis: new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5,
      ).normalize(),
      spinSpeed: 0.25 + Math.random() * 0.45,
      outDir: out,
      bobAmp: 0.05 + Math.random() * 0.08,
    };
  }, [def, index]);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const detach = detachRef.current; // 0 connected, 1 fully separated
    const pulse = pulseRef.current;

    // Smooth easing for separation
    const ease = detach * detach * (3 - 2 * detach);
    const breathe = (Math.sin(t * seed.speed + seed.phase) * 0.5 + 0.5);
    const offsetMag = ease * seed.drift + breathe * seed.bobAmp * (0.4 + ease);

    g.position.set(
      def.basePos[0] + seed.outDir.x * offsetMag,
      def.basePos[1] + seed.outDir.y * offsetMag + Math.sin(t * 0.6 + seed.phase) * 0.04,
      def.basePos[2] + seed.outDir.z * offsetMag,
    );

    // Independent intelligent rotation while detached, calm when assembled
    const spinAmt = ease * seed.spinSpeed * t;
    g.rotation.x = seed.spinAxis.x * spinAmt + Math.sin(t * 0.3 + seed.phase) * 0.04;
    g.rotation.y = seed.spinAxis.y * spinAmt + Math.cos(t * 0.3 + seed.phase) * 0.04;
    g.rotation.z = seed.spinAxis.z * spinAmt * 0.6;

    if (matRef.current) {
      matRef.current.emissiveIntensity = 0.35 + pulse * 1.6;
    }
    if (rimRef.current) {
      rimRef.current.opacity = 0.4 + pulse * 0.5 + ease * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={def.basePos}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[MODULE_SIZE, MODULE_SIZE, MODULE_SIZE]} />
        <meshPhysicalMaterial
          ref={matRef}
          color={def.color}
          metalness={0.92}
          roughness={0.14}
          clearcoat={1}
          clearcoatRoughness={0.08}
          reflectivity={0.85}
          emissive={new THREE.Color(def.color)}
          emissiveIntensity={0.35}
          envMapIntensity={1.2}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(MODULE_SIZE * 1.005, MODULE_SIZE * 1.005, MODULE_SIZE * 1.005)]} />
        <lineBasicMaterial ref={rimRef} color={def.accent} transparent opacity={0.5} />
      </lineSegments>
      {/* inner glow core */}
      <mesh>
        <boxGeometry args={[MODULE_SIZE * 0.45, MODULE_SIZE * 0.45, MODULE_SIZE * 0.45]} />
        <meshBasicMaterial color={def.color} transparent opacity={0.18} />
      </mesh>
    </group>
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
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    t0.current += delta;
    const t = t0.current;

    // Continuous slow cinematic rotation
    groupRef.current.rotation.y += delta * 0.28;

    // Mouse parallax
    targetX.current += (mouseRef.current.y * 0.3 - targetX.current) * 0.06;
    targetY.current += (mouseRef.current.x * 0.4 - targetY.current) * 0.06;
    groupRef.current.rotation.x =
      Math.sin(t * 0.25) * 0.12 + targetX.current;

    // Pulse cycle ~3.6s, smooth bell shape
    const cycle = 3.6;
    const phase = (t % cycle) / cycle;
    const pulse = Math.exp(-Math.pow((phase - 0.5) * 4.2, 2));
    pulseRef.current = pulse;

    // Detach: separate between pulses, reconnect AT pulse peak
    // detach = 1 when phase far from 0.5, 0 at peak
    const dist = Math.abs(phase - 0.5) * 2; // 0..1
    const detach = Math.pow(dist, 1.6);
    detachRef.current = detach;

    // Subtle whole-cluster breathing scale
    const s = 1 + pulse * 0.05;
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group ref={groupRef}>
      {MODULES.map((m, i) => (
        <ModuleCube key={i} def={m} index={i} pulseRef={pulseRef} detachRef={detachRef} />
      ))}
    </group>
  );
};

/* ---------- Particles ---------- */
const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 280;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4;
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
    if (ref.current) {
      ref.current.rotation.y += d * 0.03;
      ref.current.rotation.x += d * 0.01;
    }
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.035}
        color={NEON.blue}
        transparent
        opacity={0.6}
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

/* ---------- Ambient pulsing rim light ---------- */
const PulseLight = ({ pulseRef }: { pulseRef: React.MutableRefObject<number> }) => {
  const a = useRef<THREE.PointLight>(null);
  const b = useRef<THREE.PointLight>(null);
  useFrame(() => {
    const p = pulseRef.current;
    if (a.current) a.current.intensity = 1.4 + p * 2.4;
    if (b.current) b.current.intensity = 1.2 + p * 2.0;
  });
  return (
    <>
      <pointLight ref={a} position={[-6, -2, -4]} color={NEON.magenta} distance={22} />
      <pointLight ref={b} position={[6, -3, 3]} color={NEON.blue} distance={22} />
    </>
  );
};

/* ---------- Main ---------- */
const RubiksCube = ({ onPulse }: { onPulse?: (p: number) => void }) => {
  const pulseRef = useRef(0);
  const detachRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastPeak = useRef(0);

  return (
    <Canvas
      camera={{ position: [5.2, 3.4, 6.4], fov: 36 }}
      dpr={[1, 2]}
      shadows
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      frameloop="always"
    >
      <ambientLight intensity={0.28} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={1.2}
        color={NEON.white}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 6, -3]} intensity={0.9} color={NEON.gold} distance={20} />
      <pointLight position={[-3, 4, 4]} intensity={0.7} color={NEON.purple} distance={20} />
      <PulseLight pulseRef={pulseRef} />

      <Environment preset="city" />

      <Float speed={0.9} rotationIntensity={0.18} floatIntensity={0.6}>
        <CubeAssembly pulseRef={pulseRef} detachRef={detachRef} mouseRef={mouseRef} />
      </Float>

      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.45}
        scale={12}
        blur={3}
        far={6}
        color={NEON.purple}
      />

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
