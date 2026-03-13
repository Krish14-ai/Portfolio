import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krish | Machine Learning Developer & Engineering Student",
  description: "Portfolio of Krish, a Machine Learning Developer and Engineering Student passionate about building intelligent systems.",
  openGraph: {
    title: "Krish | Portfolio",
    description: "Building intelligent systems with code and curiosity.",
    url: "https://krish-portfolio.vercel.app",
    siteName: "Krish Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
