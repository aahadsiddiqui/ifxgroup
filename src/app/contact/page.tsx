"use client";

import { Mail, MapPin, Send } from "lucide-react";
import Section from "@/components/Section";

const locations = [
    {
        company: "IFX Group",
        addresses: [
            "145 Traders Blvd E, Mississauga, ON L4Z 2E5",
            "1715 Britannia Rd E, Mississauga, ON L4W 2A3",
            "1285 William St, Buffalo, NY 14206, United States",
        ],
    },
    {
        company: "IFX Capital",
        addresses: [
            "1715 Britannia Rd E, Mississauga, ON L4W 2A3",
        ],
    },
    {
        company: "IFX Metal",
        addresses: [
            "536G+59F, Nanhai District, Foshan, Guangdong Province, China, 528234",
            "240 Massey Rd, Guelph, ON N1K 1B2",
        ],
    },
];

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-blue section-padding flex flex-col items-center text-center">
                <div className="max-w-4xl animate-fade-in-up">
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                    <h1 className="text-4xl md:text-7xl mb-6">Contact <span className="text-gradient">IFX Group</span></h1>
                    <p className="text-xl text-foreground/70 mb-10 leading-relaxed">
                        Have questions or need a quote? Our team is here to help.
                        Reach out to us through any of our physical locations or via email.
                    </p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div>
                        <h2 className="text-3xl md:text-4xl mb-8">Our <span className="text-primary">Locations</span></h2>
                        <div className="space-y-10">
                            {locations.map((loc) => (
                                <div key={loc.company} className="transition-all duration-300 hover:translate-x-2">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-primary rounded-full" />
                                        {loc.company}
                                    </h3>
                                    <ul className="space-y-4">
                                        {loc.addresses.map((address, i) => (
                                            <li key={i} className="flex items-start gap-3 text-foreground/70">
                                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                                <span>{address}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="pt-6 border-t border-primary/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary-light p-3 rounded-xl">
                                        <Mail className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Email Us</h4>
                                        <a href="mailto:info@ifxgroup.ca" className="text-primary hover:underline">info@ifxgroup.ca</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-8 md:p-12 rounded-3xl shadow-sm border border-primary/10 transition-all duration-300 hover:shadow-lg">
                        <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 focus:scale-[1.02]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 focus:scale-[1.02]"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/70">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                                    <option>General Inquiry</option>
                                    <option>IFX Group (Trucking)</option>
                                    <option>IFX Capital</option>
                                    <option>IFX Metal</option>
                                    <option>IFX Estate</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/70">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-accent text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
