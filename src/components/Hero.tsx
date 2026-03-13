"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <span className="text-sm font-medium text-gray-300">Welcome to my portfolio</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-heading"
                >
                    Hi, I&apos;m <span className="text-gradient">Krish</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-3xl text-gray-400 font-medium mb-6 font-heading"
                >
                    Machine Learning Developer <span className="text-primary hidden md:inline">|</span><br className="md:hidden" /> Engineering Student
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-gray-400 max-w-2xl mb-10"
                >
                    &quot;Building intelligent systems with code and curiosity.&quot;
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                    <Link href="#projects" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                        View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="#resume" className="px-8 py-3 rounded-full glass font-medium hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2">
                        Download Resume <Download size={18} />
                    </Link>
                    <Link href="#contact" className="px-8 py-3 rounded-full glass font-medium hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2">
                        Contact Me <Mail size={18} />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex gap-6"
                >
                    {[
                        { icon: <Linkedin size={22} />, href: "https://linkedin.com", label: "LinkedIn" },
                        { icon: <Github size={22} />, href: "https://github.com", label: "GitHub" },
                        { icon: <Twitter size={22} />, href: "https://twitter.com", label: "X (Twitter)" },
                        { icon: <Facebook size={22} />, href: "https://facebook.com", label: "Facebook" },
                    ].map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all hover:-translate-y-1"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-400 uppercase tracking-widest hidden sm:block font-medium">Scroll</span>
                    <div className="w-[2px] h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                </motion.div>

            </div>
        </section>
    );
}
