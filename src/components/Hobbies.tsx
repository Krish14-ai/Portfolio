"use client";

import { motion } from "framer-motion";
import { Laptop, Code2, Film, Trophy, Bot, Puzzle, Dumbbell, Gamepad2 } from "lucide-react";

const hobbies = [
    { name: "Learning New Tech", icon: <Laptop size={24} />, color: "text-blue-400" },
    { name: "Software Projects", icon: <Code2 size={24} />, color: "text-green-400" },
    { name: "Movies & Anime", icon: <Film size={24} />, color: "text-purple-400" },
    { name: "Playing Cricket", icon: <Trophy size={24} />, color: "text-yellow-400" },
    { name: "Exploring AI", icon: <Bot size={24} />, color: "text-cyan-400" },
    { name: "Problem Solving", icon: <Puzzle size={24} />, color: "text-red-400" },
    { name: "Fitness", icon: <Dumbbell size={24} />, color: "text-orange-400" },
    { name: "Gaming", icon: <Gamepad2 size={24} />, color: "text-indigo-400" },
];

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-24 relative z-10 bg-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Hobbies & <span className="text-gradient">Interests</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {hobbies.map((hobby, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-2 transition-all duration-300 group cursor-default border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center ${hobby.color} group-hover:scale-110 transition-transform shadow-inner border border-white/5`}>
                                {hobby.icon}
                            </div>
                            <h3 className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                {hobby.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
