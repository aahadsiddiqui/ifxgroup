import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IFX Group Inc | Coming Soon",
  description: "IFX Group Inc - Corporate Coming Soon Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "'Bai Jamjuree', Arial, Helvetica, sans-serif", fontWeight: 300, background: '#ffffff', color: '#2c3c5c' }}>
        {children}
      </body>
    </html>
  );
}
