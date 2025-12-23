"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { link } from "fs";
import { ModeToggle } from "../ModeToggle";

export default function NavigationBar() {
  const items = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About me",
      link: "#about-me",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <header className="hidden md:flex lg:flex sticky z-0 top-5 transform transition-transform items-center justify-between w-6/16 mx-auto bg-primary rounded-full px-12 py-3 shadow-md">
        <nav>
          <ul>
            <li className="md:flex lg:flex md:justify-between md:items-center md:gap-8 text-white">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="capitalize hover:underline-offset-4 hover:underline transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </header>
    </>
  );
}
