"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Programming",
        skills: [
            { name: "Python", level: 90 },
            { name: "C", level: 85 },
            { name: "Java", level: 80 },
            { name: "DSA", level: 85 },
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "Scikit-learn", level: 80 },
            { name: "Pandas", level: 85 },
            { name: "NumPy", level: 85 },
            { name: "Data Analysis", level: 90 },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "Jupyter Notebook", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Antigravity", level: 90 },
            { name: "Cursor", level: 90 },
        ],
    },
    {
        title: "Concepts",
        skills: [
            { name: "Machine Learning", level: 85 },
            { name: "Data Processing", level: 90 },
            { name: "Model Training", level: 80 },
            { name: "Problem Solving", level: 95 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 bg-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white font-heading">{category.title}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-primary font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
