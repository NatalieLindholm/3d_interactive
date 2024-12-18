"use client";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="bg-indigo-300 h-screen flex justify-center items-center flex-col">
      <div className="css">
        <h1>Move It</h1>
      </div>
      <Logo />
    </div>
  );
}
