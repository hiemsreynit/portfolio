"use client";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "Figma",
      Icon: "/figma.svg",
      percent: "90%",
      w: 44,
      h: 44,
    },
    {
      name: "Tailwind",
      Icon: "/tailwindcss.svg",
      percent: "95%",
      w: 44,
      h: 44,
    },
    {
      name: "React.js",
      Icon: "/reactjs.svg",
      percent: "92%",
      w: 44,
      h: 44,
    },
    {
      name: "Next.js",
      Icon: "/nextjs.svg",
      percent: "85%",
      w: 44,
      h: 44,
    },
    {
      name: "Java",
      Icon: "/java.svg",
      percent: "90%",
      w: 44,
      h: 44,
    },
  ];

  return (
    <section className="relative flex flex-col justify-center gap-y-12" id = "skills-sec">
      <article className="flex flex-col gap-y-2">
        <h2 className="text-center text-2xl md:text-4xl text-desc-text font-bold">My&nbsp;<span className="bg-linear-to-r from-primary via-primary/70 to-style bg-clip-text text-transparent">Skills</span></h2>
        <p className="text-center text-desc-text">A breakdown of my technical stack and proficiency in various tools and frameworks.</p>
      </article>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
        {skills.map((skillsItem, index) => (
          <li
            key={index}
            className="bg-primary/20 w-full md:w-full lg:w-full rounded-lg flex flex-col items-start justify-center gap-y-8 px-4 md:px-4 lg:px-4 py-4"
          >
            <section className="w-full flex flex-col items-center justify-center gap-y-2">
              <figure>
                <Image
                  src={skillsItem.Icon}
                  alt={skillsItem.percent}
                  width={skillsItem.w}
                  height={skillsItem.h}
                />
              </figure>
              <h5>{skillsItem.name}</h5>
              <div className="w-full h-2 bg-white rounded-full">
                <div className="w-[80%] h-2 bg-linear-to-r from-primary/80 via-style/70 to-primary/80 rounded-full" />
              </div>
              <p>{skillsItem.percent}</p>
            </section>
            <div className="w-[40%] h-0.5 bg-primary/70 rounded-full" />
          </li>
        ))}
      </ul>
    </section>
  );
}