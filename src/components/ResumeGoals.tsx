"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

const goals = [
    "Learning advanced AI & Deep Learning techniques",
    "Building impactful, real-world Machine Learning projects",
    "Contributing to open source AI communities",
    "Becoming a professional Machine Learning Engineer",
];

export default function ResumeGoals() {
    return (
        <section id="resume" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Resume Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                            My <span className="text-gradient">Resume</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Want to see my full professional experience, skills, and academic background? Download my latest resume.
                        </p>

                        <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center border border-white/5 bg-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <FileText size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-medium text-white mb-2">Resume.pdf</h3>
                            <p className="text-sm text-gray-400 mb-8">PDF • 1.2 MB</p>

                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 relative z-10"
                            >
                                Download Resume <Download size={18} />
                            </a>
                            <p className="text-xs text-gray-500 mt-4">(Place your resume in public/resume.pdf)</p>
                        </div>
                    </motion.div>

                    {/* Goals Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                            Future <span className="text-gradient">Goals</span>
                        </h2>
                        <div className="h-1 w-20 bg-secondary rounded-full mb-8"></div>

                        <div className="space-y-4">
                            {goals.map((goal, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                                    className="flex items-start gap-4 glass-panel p-4 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors"
                                >
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-secondary" size={20} />
                                    </div>
                                    <p className="text-gray-300 text-lg">
                                        {goal}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
