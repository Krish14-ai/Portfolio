"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, GraduationCap, Target } from "lucide-react";

const infoCards = [
    {
        icon: <Calendar className="text-primary w-6 h-6" />,
        label: "Birth Date",
        value: "14 April 2006",
    },
    {
        icon: <MapPin className="text-primary w-6 h-6" />,
        label: "Location",
        value: "India",
    },
    {
        icon: <GraduationCap className="text-primary w-6 h-6" />,
        label: "Current Status",
        value: "Engineering Student",
    },
    {
        icon: <Target className="text-primary w-6 h-6" />,
        label: "Focus Areas",
        value: "Machine Learning, AI, Data Science, Self development",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-gray-300 text-lg leading-relaxed"
                    >
                        <p>
                            Hello! I am an <span className="text-white font-medium">engineering student</span> with a deep passion for Machine Learning and software development. My journey is driven by a curiosity to understand how intelligent systems can solve complex, real-world problems.
                        </p>
                        <p>
                            I am actively learning <span className="text-primary font-medium">AI, Data Science, and modern web development</span>. Whether it&apos;s training models to predict housing prices or building interactive web applications, I love translating concepts into functional, reliable code.
                        </p>
                        <p>
                            Curious, creative, and constantly learning, I believe in continuous self-improvement both in technology and life.
                        </p>

                        <div className="pt-6">
                            <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm pr-6 pl-2 py-2">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                                    <User size={20} className="text-primary" />
                                </div>
                                <span className="font-medium text-white text-sm md:text-base">Constantly building, constantly learning.</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {infoCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="glass-panel p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-2 transition-transform cursor-default group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/5 shadow-inner">
                                    {card.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium mb-1">{card.label}</p>
                                    <p className="text-white font-medium leading-tight">{card.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
