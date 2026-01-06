"use client";
import About from "@/components/layouts/About";
import HeroSection from "@/components/layouts/HeroSection";

export default function Portfolio() {
 
  return (
    <main className="px-12 md:px-16 lg:px-36 flex flex-col gap-30 md:gap-20 lg:gap-20">
      <HeroSection />
      <About/>
    </main>
  );
}
