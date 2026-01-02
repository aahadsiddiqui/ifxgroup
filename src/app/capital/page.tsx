"use client";

import { TrendingUp, PieChart, ShieldCheck, Globe, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const features = [
    {
        title: "Strategic Investment",
        description: "Providing the essential capital that fuels growth across all IFX Group subsidiaries.",
        icon: TrendingUp,
    },
    {
        title: "Main Shareholder",
        description: "The primary owner and governing body for IFX Group's diverse portfolio of companies.",
        icon: PieChart,
    },
    {
        title: "Risk Management",
        description: "Ensuring long-term stability and sustainable growth for the entire group.",
        icon: ShieldCheck,
    },
    {
        title: "Global Vision",
        description: "Expanding our footprint across North America through strategic acquisitions and development.",
        icon: Globe,
    },
];

export default function CapitalPage() {
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
                        src="/capital1.png"
                        alt="IFX Capital Strategic Investment"
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
                            The Parent Company
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-gray-900 tracking-tight animate-fade-in-up">
                            IFX <span className="text-primary relative inline-block">
                                Capital
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            The foundation of the IFX Group. We provide the strategic capital and oversight
                            that empowers our subsidiaries to lead their respective industries.
                        </p>
                    </div>

                    {/* Mobile Image (Visible only on mobile/tablet) */}
                    <div className="mt-12 lg:hidden relative rounded-2xl overflow-hidden shadow-xl aspect-video animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        <Image
                            src="/capital1.png"
                            alt="IFX Capital Strategic Investment"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Core Role Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl mb-6">Empowering the <span className="text-primary">IFX Ecosystem</span></h2>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            As the main shareholder and parent entity, IFX Capital is the engine behind our group&apos;s success.
                            We don&apos;t just provide funding; we provide the vision and structural support necessary for
                            IFX Group, IFX Metal, and IFX Estate to thrive.
                        </p>
                        <div className="space-y-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4 transition-all duration-300 hover:translate-x-2 group">
                                    <div className="bg-primary-light p-3 rounded-xl h-fit transition-transform duration-300 group-hover:scale-110">
                                        <feature.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                                        <p className="text-foreground/60">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-primary-light/50 rounded-3xl overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-primary/10 rounded-full animate-pulse flex items-center justify-center">
                                    <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                                        <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                                            <TrendingUp size={48} className="text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </Section>

            {/* Call to Action */}
            <Section className="bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl mb-8 text-white">Driving Innovation Across Industries</h2>
                    <p className="text-white/80 text-lg mb-10">
                        Interested in learning more about our investment strategy or partnership opportunities?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-light px-8 py-4 rounded-full font-semibold transition-all group"
                    >
                        Contact Our Team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Section>
        </div>
    );
}
