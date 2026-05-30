"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function ArcReactorCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer ring */}
      <Torus args={[2.2, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} transparent opacity={0.6} />
      </Torus>

      {/* Middle ring */}
      <Torus args={[1.8, 0.02, 16, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} transparent opacity={0.4} />
      </Torus>

      {/* Inner ring */}
      <Torus args={[1.4, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.3} transparent opacity={0.4} />
      </Torus>

      {/* Core sphere */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.6, 64, 64]}>
          <MeshDistortMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <OrbitingParticle key={i} index={i} total={8} />
      ))}
    </group>
  );
}

function OrbitingParticle({ index, total }: { index: number; total: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 1.6;
  const speed = 0.5 + index * 0.05;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 1.5) * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1} />
    </mesh>
  );
}

function FloatingGeometry() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Icosahedron args={[0.3, 1]} position={[-3, 1, -2]}>
          <MeshWobbleMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} transparent opacity={0.15} wireframe />
        </Icosahedron>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron args={[0.2, 1]} position={[3.5, -0.5, -1]}>
          <MeshWobbleMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.3} transparent opacity={0.12} wireframe />
        </Icosahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1}>
        <Torus args={[0.2, 0.05, 16, 32]} position={[2.5, 2, -3]} rotation={[1, 0, 0.5]}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} transparent opacity={0.1} />
        </Torus>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00d4ff" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#14b8a6" />
        <ArcReactorCore />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
