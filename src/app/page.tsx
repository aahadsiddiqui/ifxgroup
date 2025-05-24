import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/homepageigx.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Content */}
        <main className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4 py-8 sm:py-16" style={{ fontFamily: "'Bai Jamjuree', Arial, Helvetica, sans-serif", fontWeight: 300 }}>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl mb-4 tracking-wide leading-tight drop-shadow-lg">Delivering More Than Freight.</h1>
          {/* Partner logos and caption */}
          <div className="flex flex-col items-center w-full mb-4">
            <p className="text-white text-base sm:text-lg md:text-xl mb-2" style={{ fontFamily: "'Bai Jamjuree', Arial, Helvetica, sans-serif", fontWeight: 300 }}>
              Trusted by industry leaders under our group:
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 mb-4 w-full">
              <Image src="/partner1.PNG" alt="Partner 1" width={100} height={60} className="object-contain h-12 sm:h-16 w-auto" />
              <Image src="/partner2.PNG" alt="Partner 2" width={100} height={60} className="object-contain h-12 sm:h-16 w-auto" />
              <Image src="/partner3.PNG" alt="Partner 3" width={100} height={60} className="object-contain h-12 sm:h-16 w-auto" />
            </div>
          </div>
          <p className="text-white text-base sm:text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md mt-2 mb-0" style={{ fontFamily: "'Bai Jamjuree', Arial, Helvetica, sans-serif", fontWeight: 300 }}>
            We partner with our customers to achieve dock-to-destination efficiency, timeliness, flexibility and above all, peace of mind.
          </p>
          <p className="text-white font-bold text-2xl sm:text-3xl md:text-5xl max-w-2xl mx-auto drop-shadow-md mt-8" style={{ fontFamily: "'Bai Jamjuree', Arial, Helvetica, sans-serif", fontWeight: 300 }}>
            Coming Soon
          </p>
        </main>
      </div>
    </>
  );
}
