import Image from "next/image";
import MyImage from "@/public/sreynit.png";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { Icon, icons, Key } from "lucide-react";

export default function Home() {

  // const JourneyIcons = [
  //   {
  //     Icon: "/figma.svg",
  //     alt: "figma icon",
  //     width: 60,
  //     height: 60
  //   },
  //   {
  //     Icon: "/java.svg",
  //     alt: "java icon",
  //     width: 60,
  //     height: 60
  //   },
  //   {
  //     Icon: "/reactjs.svg",
  //     alt: "react.js icon",
  //     width: 60,
  //     height: 60
  //   },
  //   {
  //     Icon: "/nextjs.svg",
  //     alt: "next.js icon",
  //     width: 60,
  //     height: 60
  //   }
  // ]

  const FloatIcon = [
    {
      Icon: "/figma.svg",
      alt: "figma icon",
      year: "2024",
      title: "UX/UI design",
      desc: "Designed some responsive websites and a high-fidelity mini banking system app.",
      width: 48,
      height: 48,
      position:
        "top-45 left-25 lg:top-40 md:top-40 md:left-60 lg:left-140 -rotate-20 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: "/reactjs.svg",
      alt: "reactjs icon",
      year: "2025",
      title: "Frontend Development",
      desc: "Built e-commerce platforms, e-learning portals, and modern portfolio templates using React & Tailwind CSS.",
      width: 48,
      height: 48,
      position:
        "top-50 right-5 md:top-50 md:right-40 lg:right-130 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: "/java.svg",
      alt: "java icon",
      year: "2024",
      title: "Software Logic",
      desc: "Developed a Cinema Hall Booking system using 2D arrays for seating logic, alongside various logic-based mini-projects.",
      width: 48,
      height: 48,
      position:
        "top-100 right-0 md:top-110 md:right-45 lg:right-135 rotate-15 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: "/nextjs.svg",
      alt: "nextjs icon light",
      year: "2025",
      title: "Modern Web Mastery",
      desc: "Developed this portfolio using Next.js, focusing on optimized performance, fast page transitions, and SEO-friendly rendering.",
      width: 48,
      height: 48,
      position:
        "flex dark:hidden text-black dark:text-white top-100 left-15 md:top-110 md:left-50 lg:left-140 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: "/nextjs.png",
      alt: "nextjs icon dark",
      year: "2025",
      title: "Modern Web Mastery",
      desc: "Developed this portfolio using Next.js, focusing on optimized performance, fast page transitions, and SEO-friendly rendering.",
      width: 52,
      height: 52,
      position:
        "dark:flex hidden text-white top-110 left-10 md:top-110 lg:top-110 md:left-55 lg:left-140 transform -translate-x-1/2 -translate-y-1/2",
    },
  ];

  return (
    <main className="grid grid-cols-3 justify-center lg:justify-between md:justify-between items-center gap-x-10 px-16 md:px-16 lg:px-36">
      <section className="w-fit">
        <article className="md:w-full flex flex-col items-center md:items-start justify-center mb-13 gap-80 md:gap-6 lg:gap-6">
          <h1 className="text-2xl lg:text-5xl overflow-hidden font-bold text-start text-pink">
            <span className="md:flex lg:flex hidden">
              <b>Hiem Sreynit | Dev & Designer</b>
            </span>
            <span className="flex flex-row md:hidden lg:hidden">
              <b>
                Hiem Sreynit | <br /> Dev & Designer
              </b>
            </span>
          </h1>
          <section className="w-fit flex flex-col item-center md:items-start justify-start md:justify-center gap-4">
            <p className="hidden md:flex lg:flex text-sm text-desc-text">
              Developer & UX/UI Designer. I turn complex ideas into simple,
              beautiful digital solutions.
            </p>
            <section className="flex justify-start items-center gap-3">
              <a href="#about-me-sec">
                <Button className="border-2 border-primary bg-transparent hover:text-white hover:bg-pink hover:border-pink rounded-full text-primary">
                  About me
                </Button>
              </a>
              <Button className="rounded-full w-fit mx-auto block bg-primary text-white px-4 py-2 hover:bg-pink">
                Download Resume
              </Button>
            </section>
          </section>
        </article>
      </section>
      <figure className="flex flex-col justify-center items-center mt-30">
        <figure>
          {FloatIcon.map((icon) => (
            <section
              key={icon.alt}
              className={`absolute animate-bounce-slow ${icon.position}`}
            >
              <Image
                src={icon.Icon}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className="w-10 md:w-11 lg:w-12"
                
              />
            </section>
          ))}
        </figure>
        <div className="w-60 h-60 md:w-80 md:h-80 lg:w-80 lg:h-80 shadow-[inset_0_1px_60px_rgba(0,0,0,0.6)] shadow-pink/70 dark:shadow-background bg-pink/30 rounded-full flex justify-end overflow-hidden dark:bg-pink/50">
          <figure >
            <Image
            src={MyImage}
            alt="my picture"
            placeholder="blur"
            width={300}
            height={300}
            className="w-55 h-60 md:w-75 md:h-80 lg:w-75 lg:h-80"
          />
          </figure>
        </div>

        <article className="flex flex-col justify-center items-center gap-y-6">
          {/* <section className="flex flex-col justify-center item-center gap-y-30"> */}
            <section className="flex flex-col justify-center items-center mt-35 md:mt-8 gap-0">
              <h4 className="flex text-gray-700 md:hidden lg:hidden line-clamp-3 md:line-clamp-2 lg:line-clamp-2 w-70 md:w-90 text-center md:text-[16px] font-medium dark:text-gray-300">
                I turn complex ideas into simple,
                beautiful digital solutions.
              </h4>
              <section className="flex flex-col justify-center items-center gap-0">
                <section className="flex justify-center item-center gap-4 w-fit">
                  <a href="https://web.facebook.com/hiem.sreynit.9">
                    <FaFacebook className="mt-4 mx-auto block text-3xl text-primary hover:text-pink" />
                  </a>
                  <a href="https://github.com/hiemsreynit">
                    <FaGithub className="mt-4 mx-auto block text-3xl text-primary hover:text-pink" />
                  </a>
                  <a href="https://t.me/hiemsreynit">
                    <FaTelegram className="mt-4 mx-auto block text-3xl text-primary hover:text-pink" />
                  </a>
                  <a href="https://www.linkedin.com/in/hiem-sreynit-271531376/">
                    <FaLinkedin className="mt-4 mx-auto block text-3xl text-primary hover:text-pink" />
                  </a>
                </section>
              </section>
            </section>
          {/* </section> */}
        </article>
      </figure>

        <section className="flex flex-col items-center gap-y-2 overflow-hidden ">
          {FloatIcon.map((icon) => (
          <article key={icon.alt}>
            <section className="shadow-[inset_10px_1px_100px_rgba(0,0,0,0.6)] rounded-4xl shadow-background dark:shadow-background dark:bg-pink/50 bg-pink/30 w-fit flex justify-between items-center gap-x-4 px-12 py-6">
              <figure >
                  <Image
                  src={icon.Icon}
                  alt={icon.Icon}
                  width={icon.width}
                  height={icon.height}
                  />
              </figure>
              <div className="w-0.5 h-10 bg-desc-text text-desc-text"> </div>
              <section>
                <p className="text-md md:text-[16px] lg:text-[16px] font-bold text-accent-foreground">{icon.year} | {icon.title}</p>
                <p className="text-desc-text">{icon.desc}</p>
              </section>
            </section>
          </article>
          ))}
        </section>
    </main>
  );
}
