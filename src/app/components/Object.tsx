"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Object() {
  const objectRef = useRef();
  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.x += 0.02;
      objectRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={objectRef}>
      <torusGeometry args={[1, 0.5, 16, 100]} />
      <meshNormalMaterial />
    </mesh>
  );
}

// Skapa en ny React-applikation och installera react-three-fiber och react-drei.

// Bygg upp en 3D-scen som innehåller ljussättning, en kamera och interaktiva 3D-objekt.

// valbar: Skapa en egen avatar med ReadyPlayer.me och rigga den med animationer från Mixamo.com.
// Lägg till avataren på din webbsida och se till att den
// har grundläggande animationer, som gående eller vinkande.

// Se till att din webbsida är responsiv och fungerar på både dator och mobil.
// Lägg till kamerakontroller så användare kan rotera och zooma i scenen.
