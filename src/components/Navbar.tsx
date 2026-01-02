"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "IFX Group", href: "/" },
  { name: "IFX Capital", href: "/capital" },
  { name: "IFX Metal", href: "/metal" },
  { name: "IFX Estate", href: "/estate" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-10 animate-fade-in">
          <Image
            src={
              pathname?.startsWith("/metal")
                ? "/IFXMetal.svg"
                : pathname?.startsWith("/capital")
                  ? "/IFXCapital.svg"
                  : pathname?.startsWith("/estate")
                    ? "/IFXEstate.svg"
                    : "/IFXGroupInc.svg"
            }
            alt="IFX Group Logo"
            width={180}
            height={72}
            className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative group",
                pathname === link.href ? "text-primary" : "text-gray-600"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <div className="h-0.5 bg-primary mt-0.5 animate-slide-in" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden flex flex-col p-6 gap-4 animate-fade-in-up border-t border-gray-100">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2",
                pathname === link.href ? "text-primary" : "text-gray-600"
              )}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
