"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cube() {
  const cubeRef = useRef();
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.02;
      cubeRef.current.rotation.y += 0.04;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />

      <meshNormalMaterial />
    </mesh>
  );
}
