"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Object from "./Object";
import { OrbitControls } from "@react-three/drei";

export default function Logo() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={2} />
        <directionalLight position={[20, 20, 20]} />
        <Object />
      </Canvas>
    </div>
  );
}
