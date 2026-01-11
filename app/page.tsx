"use client";
import Footer from "@/components/layouts/Footer";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import HeroSection from "@/components/sections/home/HeroSection";
import Project from "@/components/sections/projects/Project";
import Skills from "@/components/sections/Skills";

export default function Portfolio() {
  return (
    <main className="mt-20 min-h-screen flex flex-col gap-30 md:gap-20 lg:gap-40">
      <section className="px-12 md:px-16 lg:px-36 flex flex-col gap-y-40">
        <HeroSection />
        <About />
        <Skills/>
      </section>
      <Project />
      <section className="px-12 md:px-16 lg:px-36">
        <Contact />
      </section>
      <section className="px-12 md:px-16 lg:px-36 mb-10">
        <Footer />
      </section>
    </main>
  );
}
