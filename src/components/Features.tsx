import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Boxes, Code, Palette, Plug, Smartphone } from "lucide-react";
import Reveal from "./Reveal";

const offerings = [
  { icon: Code, label: "Web Dev", color: "#22D3FF" },
  { icon: Smartphone, label: "Mobile Apps", color: "#34D399" },
  { icon: Plug, label: "API Integrations", color: "#F5C451" },
  { icon: Boxes, label: "Architecture", color: "#22D3FF" },
  { icon: Palette, label: "UI / UX", color: "#34D399" },
  { icon: Code, label: "DevOps", color: "#F5C451" },
];

// ---- 3D scene ----------------------------------------------------------------

const Wireframe = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    // counter-clockwise, diagonal axis
    ref.current.rotation.y -= delta * 0.25;
    ref.current.rotation.x -= delta * 0.12;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.6, 2]} />
      <meshBasicMaterial color="#22D3FF" wireframe transparent opacity={0.35} />
    </mesh>
  );
};

const InnerSphere = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.08;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.45, 48, 48]} />
      <meshStandardMaterial
        color="#0a1628"
        emissive="#0891b2"
        emissiveIntensity={0.15}
        roughness={0.4}
        metalness={0.7}
      />
    </mesh>
  );
};

const OrbitGroup = () => {
  const group = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    // counter-clockwise revolve around a diagonal axis
    group.current.rotation.y -= delta * 0.35;
    group.current.rotation.x -= delta * 0.18;
    group.current.rotation.z -= delta * 0.05;
  });

  const items = useMemo(() => {
    const radius = 2.6;
    return offerings.map((o, i) => {
      const phi = Math.acos(-1 + (2 * i) / offerings.length);
      const theta = Math.sqrt(offerings.length * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return { ...o, pos: [x, y, z] as [number, number, number] };
    });
  }, []);

  return (
    <group ref={group} rotation={[0.3, 0, 0.4]}>
      {items.map((it, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={0.4}>
          <group position={it.pos}>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={it.color} />
            </mesh>
            <Html
              center
              distanceFactor={8}
              style={{ pointerEvents: "none" }}
            >
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] whitespace-nowrap backdrop-blur-md border"
                style={{
                  background: "hsl(222 47% 5% / 0.7)",
                  borderColor: `${it.color}55`,
                  color: it.color,
                  boxShadow: `0 0 12px ${it.color}40`,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: it.color, boxShadow: `0 0 6px ${it.color}` }}
                />
                {it.label}
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
};

const Globe3D = () => (
  <Canvas
    camera={{ position: [0, 0, 6.5], fov: 45 }}
    dpr={[1, 2]}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 5, 5]} intensity={1.2} color="#22D3FF" />
    <pointLight position={[-5, -3, -2]} intensity={0.8} color="#34D399" />
    <Suspense fallback={null}>
      <InnerSphere />
      <Wireframe />
      <OrbitGroup />
    </Suspense>
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate={false}
      enableRotate={false}
    />
  </Canvas>
);

// ---- Section ----------------------------------------------------------------

const Features = () => (
  <section id="features" className="relative py-28 sm:py-36 scroll-mt-24 overflow-hidden">
    <div className="absolute inset-0 pattern-grid opacity-[0.07] -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px] -z-10" />

    <div className="container">
      {/* Developer-style header */}
      <Reveal className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass font-mono text-[11px] uppercase tracking-widest text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-muted-foreground">$</span>
          <span>cat ./capabilities.json</span>
        </div>

        <h2 className="mt-6 font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-muted-foreground">{"<"}</span>
          <span className="text-gradient-primary">Capabilities</span>
          <span className="text-muted-foreground">{" />"}</span>
        </h2>

        <p className="mt-5 font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          <span className="text-accent">// </span>
          A constellation of services orbiting one mission —
          <span className="text-foreground"> ship real systems that scale.</span>
        </p>
      </Reveal>

      {/* 3D Globe */}
      <Reveal delay={150} className="mt-16">
        <div className="relative mx-auto max-w-3xl">
          {/* Terminal chrome wrapper */}
          <div className="rounded-2xl glass gradient-border overflow-hidden shadow-elevate">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-background/40">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-3 w-3 rounded-full bg-secondary" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                kodekeja-globe.tsx — three.js
              </span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-secondary flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                rendering
              </span>
            </div>

            <div className="relative h-[460px] sm:h-[520px] bg-[hsl(222_47%_3%)]/60">
              <Globe3D />
              {/* corner readouts */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/70 leading-relaxed pointer-events-none">
                <div>axis: diagonal</div>
                <div>dir: counter-clockwise</div>
                <div>nodes: {offerings.length}</div>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-secondary/70 leading-relaxed text-right pointer-events-none">
                <div>system: online</div>
                <div>uptime: 99.99%</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Offerings list under globe */}
      <Reveal delay={250} className="mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {offerings.map((o) => (
            <div
              key={o.label}
              className="group flex items-center gap-2 rounded-lg glass px-3 py-2.5 font-mono text-xs transition-all hover:-translate-y-0.5"
              style={{ borderColor: `${o.color}33` }}
            >
              <o.icon className="h-3.5 w-3.5" style={{ color: o.color }} />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {o.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Features;
