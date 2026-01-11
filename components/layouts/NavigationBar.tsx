"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Use Bars instead of Hamburger for standard UI
import { ModeToggle } from "../ui/ModeToggle";
import { useActiveSection } from "../hooks/useActiveItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = ["home-sec", "about-me-sec", "project-sec", "contact-sec", "skills-sec"];
  const activeSectionId = useActiveSection(sectionIds);

  const items = [
    { name: "home", link: "#home-sec", id: "home-sec" },
    { name: "about", link: "#about-me-sec", id: "about-me-sec" },
    { name: "projects", link: "#project-sec", id: "project-sec" },
    { name: "skills", link: "#skills-sec", id: "skills-sec" },
    { name: "contact", link: "#contact-sec", id: "contact-sec" },
  ];

  return (
    <header className="sticky top-5 z-50 mx-auto w-full pr-4 md:w-fit flex justify-end">
      {/* Desktop & Mobile Toggle Bar */}
      <nav className="flex items-center justify-between gap-8 bg-primary rounded-full px-6 md:px-8 py-2 shadow-md ">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {items.map((item) => {
            const isActive =
              activeSectionId === item.id ||
              (item.name === "home" && activeSectionId === "");
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`px-3 py-1
                ${
                  isActive
                    ? "capitalize bg-white/30 text-white rounded-full"
                    : "capitalize hover:underline text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>

        <div className="flex flex-row-reverse items-center gap-4 bg-transparent">
          <ModeToggle />

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-primary rounded-2xl p-6 flex flex-col gap-4 shadow-xl md:hidden text-white"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-lg capitalize border-b border-white/10 pb-2"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
