"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 150;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00F5FF" size={0.04} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function GlowOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {[
        { pos: [4, 2, -5], color: "#00F5FF", size: 0.4 },
        { pos: [-5, -1, -4], color: "#7B61FF", size: 0.3 },
        { pos: [3, -2.5, -6], color: "#00FFB2", size: 0.2 },
        { pos: [-3, 3, -7], color: "#00F5FF", size: 0.25 },
      ].map((orb, i) => (
        <mesh key={i} position={orb.pos as [number, number, number]}>
          <sphereGeometry args={[orb.size, 32, 32]} />
          <meshStandardMaterial color={orb.color} emissive={orb.color} emissiveIntensity={0.4} transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#00F5FF" />
        <Particles />
        <GlowOrbs />
      </Canvas>
    </div>
  );
}
