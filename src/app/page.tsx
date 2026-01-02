"use client";

import Image from "next/image";
import { Truck, MapPin, Shield, Clock, ArrowRight, Globe } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const stats = [
  { label: "Miles a Year", value: "7.5M+", icon: Truck },
  { label: "Professional Drivers", value: "70+", icon: Shield },
  { label: "Trailers", value: "70+", icon: Clock },
  { label: "Trucks", value: "48+", icon: Truck },
];

const cities = [
  "Toronto", "Mississauga", "Buffalo", "Chicago", "Detroit", "New York", "Montreal", "Vancouver"
];

const partners = [
  { name: "Walmart", logo: "/walmart.svg" },
  { name: "Magna International", logo: "/magna.png" },
  { name: "Amazon", logo: "/amazon.png" },
  { name: "Ford", logo: "/ford.png" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Cinematic Image (Desktop) */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 hidden lg:block">
          <Image
            src="/GroupHero.jpg"
            alt="IFX Group Fleet"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-900 font-semibold text-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Global Logistics Partner
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-gray-900 tracking-tight animate-fade-in-up">
              Delivering More Than <span className="text-primary relative inline-block">
                Freight
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>.
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Dock-to-destination efficiency, timeliness, and peace of mind. We redefine transportation with modern solutions for a connected world.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Get a Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/capital"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>

            {/* Feature Row (Replaces Badge) */}
            <div className="flex flex-wrap gap-6 lg:gap-12 border-t border-gray-100 pt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Secure</p>
                  <p className="text-xs text-gray-500">Safety First</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Global Reach</p>
                  <p className="text-xs text-gray-500">International</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">On-Time</p>
                  <p className="text-xs text-gray-500">Reliable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image (Visible only on mobile/tablet) */}
          <div className="mt-12 lg:hidden relative rounded-2xl overflow-hidden shadow-xl aspect-video animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Image
              src="/GroupHero.jpg"
              alt="IFX Group Fleet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-primary-light/30 border border-primary/5 hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-foreground/60 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">Comprehensive <span className="text-primary">Logistics Solutions</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end supply chain services tailored to your business needs.
          </p>
        </div>
        <div className="space-y-12">
          {/* Featured Service: Intermodal */}
          <div className="max-w-4xl mx-auto px-4 md:px-0">
            <ServiceCard
              title="Intermodal"
              description="Seamlessly integrating rail and truck transport for efficient long-distance shipping."
              index={0}
              downloadUrl="/intermodal.pdf"
              downloadLabel="Download Brochure"
              details="We prioritize security by partnering with Customs Trade Partnership Against Terrorism (C-TPAT) certified Mexican carriers and drayage partners to facilitate a secure and expedited process. This ensures real-time visibility of your goods’ locations, providing assurance throughout the transportation journey."
              associations={["CTPAT", "CBSA", "Fast Expres"]}
            />
          </div>

          {/* Other Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "LTL & TL", description: "Flexible options for both Less-Than-Truckload and Full Truckload shipments." },
              { title: "Warehousing & Distribution", description: "Secure storage and streamlined distribution solutions for your inventory." },
              { title: "Drayage & Transload", description: "Expert handling of short-distance shipping and cargo transfer between modes." },
              { title: "Dedicated Fleets", description: "Custom fleet solutions dedicated exclusively to your business operations." },
              { title: "Linehaul", description: "Reliable transport between major hubs to keep your supply chain moving." },
              { title: "Supply Chain", description: "End-to-end management and optimization of your entire logistics network." },
              { title: "Domestic", description: "Comprehensive transportation coverage across the entire country." },
              { title: "Crossborder", description: "Smooth and compliant shipping solutions across international borders." },
              { title: "Multi-Modal", description: "Utilizing multiple modes of transport for the most efficient route." },
              { title: "Final Mile", description: "Precision delivery to the final destination, ensuring customer satisfaction." },
              { title: "Transportation", description: "Reliable and safe movement of goods for businesses of all sizes." },
              { title: "Logistics", description: "Strategic planning and execution of complex transportation needs." },
              { title: "Supply Chain Bundles", description: "Integrated service packages designed to maximize value and efficiency." },
              { title: "Full Truckload", description: "Exclusive use of a trailer for large shipments requiring direct transport." },
              { title: "Flex Model", description: "Adaptable logistics solutions that scale with your changing business needs." }
            ].map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Cities Section */}
      <Section className="bg-gradient-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-12">Main Cities We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <div
                key={city}
                className="bg-white px-6 py-3 rounded-xl shadow-sm border border-primary/5 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MapPin size={16} className="text-primary" />
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="bg-white overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Trusted by Industry Leaders</h2>
          <p className="text-foreground/60">We partner with the world&apos;s most recognized brands.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

