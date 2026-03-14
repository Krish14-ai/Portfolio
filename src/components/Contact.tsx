```tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative z-10 bg-white/5">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>

                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                </motion.div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6 font-heading">
                            Let's talk about everything!
                        </h3>

                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Feel free to reach out if you're looking for a developer,
                            have a question, or just want to connect.
                        </p>

                        <div className="space-y-6">

                            {/* EMAIL */}
                            <a
                                href="mailto:kkhandelwal292@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-white/5">
                                    <Mail size={20} />
                                </div>

                                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    kkhandelwal292@gmail.com
                                </span>
                            </a>


                            {/* GITHUB */}
                            <Link
                                href="https://github.com/Krish14-ai"
                                target="_blank"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-white/5">
                                    <Github size={20} />
                                </div>

                                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    github.com/Krish14-ai
                                </span>
                            </Link>


                            {/* LINKEDIN */}
                            <Link
                                href="https://www.linkedin.com/in/krish-khandelwal-b12958337"
                                target="_blank"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-white/5">
                                    <Linkedin size={20} />
                                </div>

                                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    linkedin.com/in/krish-khandelwal-b12958337
                                </span>
                            </Link>


                            {/* X (TWITTER) */}
                            <Link
                                href="https://x.com/kkha6652"
                                target="_blank"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-white/5">
                                    𝕏
                                </div>

                                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    x.com/kkha6652
                                </span>
                            </Link>

                        </div>
                    </motion.div>


                    {/* RIGHT SIDE FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass-panel p-8 rounded-3xl space-y-6 border border-white/5 hover:border-white/10 transition-colors"
                        >

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="your@email.com"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>

                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                                    placeholder="Your message..."
                                />
                            </div>


                            <button
                                type="submit"
                                disabled={loading || success}
                                className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                            >
                                {loading
                                    ? "Sending..."
                                    : success
                                    ? "Message Sent!"
                                    : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
```
