"use client";

export default function Project() {
  return (
    <section className="min-h-screen">
      <article className="flex flex-col gap-y-2">
        <h2 className="text-center text-2xl md:text-4xl text-desc-text font-bold">
          My&nbsp;
          <span className="bg-linear-to-r from-primary via-primary/70 to-style bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-center text-desc-text">
          Practical applications of my tech stack, ranging from backend software
          logic to interactive user interfaces.
        </p>
      </article>
    <section className="bg-primary/20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
    </section>
  );
}
