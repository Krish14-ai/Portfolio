import Link from "next/link";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 relative z-10 border-t border-white/10 bg-[#050505]">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-gradient mb-2">
                        Krish<span className="text-foreground">.</span>
                    </Link>
                    <p className="text-gray-500 text-sm">Building intelligent systems with code and curiosity.</p>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-white hover:scale-110 transition-all">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-white hover:scale-110 transition-all">
                        <Github size={20} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-white hover:scale-110 transition-all">
                        <Twitter size={20} />
                    </Link>
                    <Link href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-white hover:scale-110 transition-all">
                        <Facebook size={20} />
                    </Link>
                </div>

                <div className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Krish Portfolio
                </div>

            </div>
        </footer>
    );
}
