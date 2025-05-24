"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center px-4 sm:px-8 py-2 bg-[#2c3c5c] shadow-md relative z-30">
      <div className="flex items-center h-14">
        <Image src="/companylogo.PNG" alt="Logo" height={48} width={120} style={{ height: '48px', width: 'auto' }} />
      </div>
    </nav>
  );
} 