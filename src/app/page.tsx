import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import ResumeGoals from "@/components/ResumeGoals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background3D />
      <Navbar />

      <main className="flex flex-col min-h-screen w-full relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Hobbies />
        <ResumeGoals />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
