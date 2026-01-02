"use client";

import { Map, Construction, ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const developmentSteps = [
    {
        title: "Land Acquisition",
        description: "Identifying and purchasing strategic land parcels suitable for trucking operations.",
        icon: Map,
    },
    {
        title: "Site Development",
        description: "Transforming raw land into fully functional trucking terminals and yards.",
        icon: Construction,
    },
    {
        title: "Operational Readiness",
        description: "Ensuring all facilities meet the highest standards for trucking efficiency and safety.",
        icon: CheckCircle2,
    },
];

export default function PropertiesPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                {/* Cinematic Image (Desktop) */}
                <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 hidden lg:block">
                    <Image
                        src="/estate1.jpg"
                        alt="IFX Estate Modern Architecture"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Blend */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
                    {/* Image by wirestock on Freepik: https://www.freepik.com/free-photo/low-angle-shot-high-buildings-with-modern-architecture-patterns_8280940.htm#fromView=search&page=1&position=2&uuid=a99c5386-b689-4f3a-8e7b-620cf80901a8&query=commercial+properties?sign-up=google */}
                </div>

                <div className="w-full px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-900 font-semibold text-sm mb-8 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Premier Real Estate
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-gray-900 tracking-tight animate-fade-in-up">
                            IFX <span className="text-primary relative inline-block">
                                Estate
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Strategic property management and development. We create and manage premium spaces that foster business growth and community.
                        </p>
                    </div>

                    {/* Mobile Image (Visible only on mobile/tablet) */}
                    <div className="mt-12 lg:hidden relative rounded-2xl overflow-hidden shadow-xl aspect-video animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        <Image
                            src="/estate1.jpg"
                            alt="IFX Estate Modern Architecture"
                            fill
                            className="object-cover"
                        />
                        {/* Image by wirestock on Freepik: https://www.freepik.com/free-photo/low-angle-shot-high-buildings-with-modern-architecture-patterns_8280940.htm#fromView=search&page=1&position=2&uuid=a99c5386-b689-4f3a-8e7b-620cf80901a8&query=commercial+properties?sign-up=google */}
                    </div>
                </div>
            </section>

            {/* Truck Yards Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl mb-6">Premium <span className="text-primary">Truck Yards</span></h2>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            Our truck yards are strategically located to provide maximum efficiency for trucking operations.
                            Equipped with modern amenities and high-level security, they are the preferred choice for
                            industry leaders.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Strategically located near major highways",
                                "24/7 high-level security and surveillance",
                                "Ample space for large fleets and trailers",
                                "Modern driver facilities and amenities",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-foreground/80 transition-all duration-300 hover:translate-x-2 group"
                                >
                                    <CheckCircle2 size={20} className="text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl">
                            <Image
                                src="/estate2.png"
                                alt="Premium Truck Yard"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Image by freepik: https://www.freepik.com/free-photo/full-shot-woman-fixing-truck_39700460.htm#fromView=search&page=1&position=11&uuid=91980ba3-5d1b-47da-8083-7d47d705e89b&query=truck+yard */}
                        </div>
                    </div>
                </div>
            </Section>

            {/* IFX Development Section */}
            <Section className="bg-primary-light/30">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">IFX Development</span>
                    <h2 className="text-3xl md:text-5xl mb-6">From Land to <span className="text-primary">Terminals</span></h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        IFX Development is the specialized arm of IFX Estate focused on the full lifecycle
                        of trucking infrastructure development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {developmentSteps.map((step) => (
                        <div
                            key={step.title}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-all"
                        >
                            <div className="bg-primary-light w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <step.icon className="text-primary" size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Call to Action */}
            <Section className="text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl mb-8">Looking for Strategic Yard Space?</h2>
                    <p className="text-foreground/70 text-lg mb-10">
                        Contact us to learn more about our current locations and upcoming development projects.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary text-white hover:bg-accent px-8 py-4 rounded-full font-semibold transition-all group"
                    >
                        Contact Estate Team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Section>
        </div>
    );
}
