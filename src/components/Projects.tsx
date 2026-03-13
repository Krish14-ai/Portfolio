"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "House Price Prediction Model",
        description: "An advanced machine learning model using regression techniques to predict housing prices with high accuracy based on historical data.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Snake Game in Python",
        description: "A classic recreation of the Snake game built entirely in Python using the Pygame library, featuring score tracking and increasing difficulty.",
        tech: ["Python", "Pygame", "OOP"],
        github: "https://github.com",
        demo: null,
    },
    {
        title: "Data Analysis Dashboard",
        description: "Comprehensive data analysis projects visualizing trends in large datasets using Jupyter Notebooks and interactive charts.",
        tech: ["Jupyter", "Data Science", "NumPy", "Seaborn"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Machine Learning Experiments",
        description: "A collection of experimental AI projects exploring deep learning, neural networks, and future AI capabilities.",
        tech: ["TensorFlow", "Keras", "AI", "Python"],
        github: "https://github.com",
        demo: null,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="group h-full glass-panel p-8 rounded-3xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-white/5 hover:border-primary/30 relative overflow-hidden">

                                {/* Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner border border-primary/20">
                                            <FolderGit2 size={24} />
                                        </div>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <Link href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                                                    <Github size={20} />
                                                </Link>
                                            )}
                                            {project.demo && (
                                                <Link href={project.demo} target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                                                    <ExternalLink size={20} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-white font-heading group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors shadow-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
