import type { Metadata } from "next";
import "@/lib/localStorage-polyfill";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IFX Group Inc | Delivering More Than Freight",
  description: "IFX Group Inc - A diversified group committed to excellence in trucking, capital, metal, and properties.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <NavbarWrapper />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

