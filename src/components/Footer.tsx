import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const brands = [
    { name: "Walmart", logo: "/walmart.svg" },
    { name: "Magna International", logo: "/magna.png" },
    { name: "Amazon", logo: "/amazon.png" },
    { name: "Ford", logo: "/ford.png" },
];

export default function Footer() {
    return (
        <footer className="bg-foreground text-white border-t border-primary/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Description */}
                    <div className="col-span-1 md:col-span-2">
                        <Image
                            src="/companylogo.PNG"
                            alt="IFX Group Logo"
                            width={140}
                            height={56}
                            className="h-12 w-auto object-contain mb-6"
                        />
                        <p className="text-white/80 max-w-md mb-8">
                            Delivering excellence across trucking, capital, metal, and estate.
                            A diversified group committed to efficiency, timeliness, and peace of mind.
                        </p>
                        <div className="flex flex-wrap gap-8 items-center">
                            {brands.map((brand) => (
                                <div key={brand.name} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={80}
                                        height={40}
                                        className="h-6 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/70 hover:text-accent transition-colors">IFX Group</Link></li>
                            <li><Link href="/capital" className="text-white/70 hover:text-accent transition-colors">IFX Capital</Link></li>
                            <li><Link href="/metal" className="text-white/70 hover:text-accent transition-colors">IFX Metal</Link></li>
                            <li><Link href="/estate" className="text-gray-400 hover:text-primary transition-colors">IFX Estate</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/70">
                                <Mail size={18} className="text-accent mt-1 shrink-0" />
                                <a href="mailto:info@ifxgroup.ca" className="hover:text-accent transition-colors">info@ifxgroup.ca</a>
                            </li>
                            <li className="flex items-start gap-3 text-white/70">
                                <MapPin size={18} className="text-accent mt-1 shrink-0" />
                                <span>1715 Britannia Rd E, Mississauga, ON L4W 2A3</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© {new Date().getFullYear()} IFX Group Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
