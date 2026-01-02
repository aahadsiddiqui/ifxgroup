"use client";

import Image from "next/image";
import { Factory, Settings, Shield, Zap, ArrowRight, MapPin, Download } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";

const products = [
    {
        title: "Non Load Bearing Steel Studs",
        description: "Light Gauge framing for interior partitions.",
        icon: Factory,
    },
    {
        title: "Load Bearing Stud Framing",
        description: "Heavy Gauge system for curtain walls and structural support.",
        icon: Shield,
    },
    {
        title: "Standard Track Products",
        description: "Structural track manufactured in various widths and lengths.",
        icon: Settings,
    },
    {
        title: "Slotted Deflection Track",
        description: "Specialized track used when vertical deflection is required.",
        icon: Zap,
    },
    {
        title: "Deep Track",
        description: "Allows for easy accommodation of larger wall heights.",
        icon: Factory,
    },
    {
        title: "Bridging / Carrying Channel",
        description: "Used to stabilize walls by stiffening the stud system.",
        icon: Shield,
    },
    {
        title: "Resilient Channel",
        description: "Significantly improves STC ratings for sound control.",
        icon: Settings,
    },
    {
        title: "Windbrace",
        description: "Designed to offer resistance against racking.",
        icon: Zap,
    },
    {
        title: "U-Flex Track",
        description: "Flexible track solution for curved profiles and walls.",
        icon: Factory,
    },
    {
        title: "Furring Channel",
        description: "Provides a means to connect drywall to concrete or masonry.",
        icon: Shield,
    },
    {
        title: "L Track",
        description: "Available in a variety of profiles and gauges.",
        icon: Settings,
    },
    {
        title: "Z-Bar",
        description: "Designed to hold rigid insulation in place.",
        icon: Zap,
    },
];

const locations = [
    {
        address: "536G+59F, Nanhai District, Foshan, Guangdong Province, China, 528234",
        label: "China Manufacturing Hub",
    },
    {
        address: "240 Massey Rd, Guelph, ON N1K 1B2",
        label: "Canada Distribution Center",
    },
];

export default function MetalPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                {/* Cinematic Image (Desktop) */}
                <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 hidden lg:block">
                    <Image
                        src="/metal3.jpg"
                        alt="IFX Metal Factory"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Blend */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
                    {/* Image by freestockcenter on Freepik: https://www.freepik.com/free-photo/working-hard-building-man-construction-worker_1007009.htm#fromView=keyword&page=2&position=31&uuid=87f52502-1eb6-466a-8b6f-1e951d1d527a&query=Metal+rebar */}
                </div>

                <div className="w-full px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-900 font-semibold text-sm mb-8 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Industrial Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-gray-900 tracking-tight animate-fade-in-up">
                            IFX <span className="text-primary relative inline-block">
                                Metal
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Precision-driven metal manufacturing. Our factories are at the forefront of industrial
                            innovation, delivering high-quality solutions for diverse applications.
                        </p>
                    </div>

                    {/* Mobile Image (Visible only on mobile/tablet) */}
                    <div className="mt-12 lg:hidden relative rounded-2xl overflow-hidden shadow-xl aspect-video animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        <Image
                            src="/metal3.jpg"
                            alt="IFX Metal Factory"
                            fill
                            className="object-cover"
                        />
                        {/* Image by freestockcenter on Freepik: https://www.freepik.com/free-photo/working-hard-building-man-construction-worker_1007009.htm#fromView=keyword&page=2&position=31&uuid=87f52502-1eb6-466a-8b6f-1e951d1d527a&query=Metal+rebar */}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-6">Our <span className="text-primary">Products</span></h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        We offer a comprehensive range of high-quality metal framing and structural components
                        to meet all your construction needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.title}
                            className="p-6 rounded-2xl bg-primary-light/20 border border-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20"
                        >
                            <product.icon className="text-primary mb-4 transition-transform duration-300 hover:scale-110" size={24} />
                            <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                            <p className="text-sm text-foreground/60">{product.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Locations Section */}
            <Section className="bg-primary-light/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl mb-6">Global <span className="text-primary">Locations</span></h2>
                        <p className="text-lg text-foreground/70">
                            Strategically positioned to serve our clients worldwide.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {locations.map((loc, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{loc.label}</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {loc.address}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Industrial Standards */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl mb-8">Setting the Standard</h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        Our factories adhere to the highest international standards for safety, quality, and environmental responsibility.
                        We continuously invest in our people and technology to remain at the cutting edge of the metal industry.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-2 bg-primary-light/20 px-6 py-3 rounded-full border border-primary/10">
                            <Shield size={20} className="text-primary" />
                            <span className="font-medium">ISO Certified</span>
                        </div>
                        <div className="flex items-center gap-2 bg-primary-light/20 px-6 py-3 rounded-full border border-primary/10">
                            <Shield size={20} className="text-primary" />
                            <span className="font-medium">Quality Guaranteed</span>
                        </div>
                        <div className="flex items-center gap-2 bg-primary-light/20 px-6 py-3 rounded-full border border-primary/10">
                            <Shield size={20} className="text-primary" />
                            <span className="font-medium">Safety First</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Product Catalog Download */}
            <Section className="bg-gray-50">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Download Our Full Catalog</h3>
                        <p className="text-foreground/70 max-w-md">
                            Get detailed specifications, dimensions, and technical data for our complete range of metal products.
                        </p>
                    </div>
                    <a
                        href="/metal.pdf"
                        download
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-3 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                    >
                        <Download size={20} />
                        Download Catalog
                    </a>
                </div>
            </Section>

            {/* Visual Section 1: Rebar/Steel Bars */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Premium Materials</span>
                        <h2 className="text-3xl md:text-5xl mb-6">High-Grade <span className="text-primary">Steel Reinforcement</span></h2>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            Our seamless steel bars and rebar solutions are engineered for maximum durability and structural integrity.
                            Perfect for demanding construction projects where strength and reliability are non-negotiable.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Superior Tensile Strength", "Corrosion Resistant Options", "Custom Lengths Available"].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <Image
                                src="/metal1.jpg"
                                alt="Seamless steel bars"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Image by macrovector on Freepik: https://www.freepik.com/free-vector/seamless-steel-bar-set_13187630.htm#fromView=keyword&page=1&position=2&uuid=054004fe-7ef9-4b19-9751-c2c7140769db&query=Metal+rebar */}
                    </div>
                </div>
            </Section>

            {/* Visual Section 2: Construction */}
            <Section className="bg-gradient-to-b from-white to-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Construction Ready</span>
                        <h2 className="text-3xl md:text-5xl mb-6">Building the <span className="text-primary">Future</span></h2>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            From skyscrapers to infrastructure, our metal components form the backbone of modern construction.
                            We supply the essential framework that brings architectural visions to life.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center flex-1">
                                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Compliance</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center flex-1">
                                <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <Image
                                src="/metal2.jpg"
                                alt="Steel bars building construction"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Image by freestockcenter on Freepik: https://www.freepik.com/free-photo/steel-bars-building-construction_1006345.htm#fromView=keyword&page=1&position=14&uuid=054004fe-7ef9-4b19-9751-c2c7140769db&query=Metal+rebar */}
                    </div>
                </div>
            </Section>

            {/* Call to Action */}
            <Section className="text-center bg-gradient-to-b from-transparent to-primary-light/20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl mb-8">Ready to Start Your Project?</h2>
                    <p className="text-foreground/70 text-lg mb-10">
                        Contact us today to discuss your manufacturing needs and how IFX Metal can help you achieve your goals.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary text-white hover:bg-accent px-8 py-4 rounded-full font-semibold transition-all group shadow-lg hover:shadow-xl"
                    >
                        Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Section>
        </div>
    );
}
