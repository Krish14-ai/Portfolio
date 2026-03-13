"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        My <span className="text-gradient">Education</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                </motion.div>

                <div className="space-y-12">
                    {/* Timeline Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-6 md:gap-8 group"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white shrink-0 shadow-lg border border-primary/20">
                                <GraduationCap size={28} />
                            </div>
                            <div className="w-[2px] h-full bg-gradient-to-b from-primary/50 to-transparent mt-4 group-hover:from-primary transition-colors"></div>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl flex-grow mb-4 group-hover:-translate-y-1 transition-transform group-hover:border-primary/30">
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Engineering Degree</h3>
                            <p className="text-primary font-medium mb-4">Present</p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Currently pursuing an engineering degree with a strong focus on programming, software development, and machine learning.
                            </p>
                        </div>
                    </motion.div>

                    {/* Timeline Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-6 md:gap-8 group"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform group-hover:bg-secondary group-hover:text-white shrink-0 shadow-lg border border-secondary/20">
                                <BookOpen size={28} />
                            </div>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl flex-grow group-hover:-translate-y-1 transition-transform group-hover:border-secondary/30">
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Self Learning & Exploration</h3>
                            <p className="text-secondary font-medium mb-4">Continuous</p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                Actively studying and experimenting with modern technologies through hands-on projects and online resources.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Machine Learning", "Deep Learning", "AI Tools", "Data Science"].map((topic, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm font-medium text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors cursor-default">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
