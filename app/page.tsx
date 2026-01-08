"use client";
import About from "@/components/layouts/About";
import HeroSection from "@/components/layouts/HeroSection";
import Project from "@/components/layouts/Project";
import Skills from "@/components/layouts/Skills";

export default function Portfolio() {
 
  return (
    <main className="flex flex-col gap-30 md:gap-20 lg:gap-20">
      <section className="px-12 md:px-16 lg:px-36 ">
        <HeroSection />
        <About/>
        <Skills/>
      </section>
      <Project/>
    </main>
  );
}
