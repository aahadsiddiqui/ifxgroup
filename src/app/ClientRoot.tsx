"use client";
import Navbar from "./Navbar";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 