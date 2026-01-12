"use client";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="" id="contact-sec">
      <article className="flex flex-col gap-y-2 items-center">
        <h2 className="text-center text-2xl md:text-4xl text-desc-text font-bold">
          Contact&nbsp;
          <span className="bg-linear-to-r from-primary via-primary/70 to-style bg-clip-text text-transparent">
            me
          </span>
        </h2>
        <p className="text-desc-text text-center flex flex-col items-center justify-center">
          Got a question? Drop me a line at
          <a
            href="mailto:hiemsreynit282@gmail.com"
            className="font-bold underline"
          >
            hiemsreynit282@gmail.com
          </a>{"hiemsreynit282@gmail.com"}
          or use the form below and I&apos;ll get back to you shortly.
        </p>
      </article>
      <ContactForm/>
    </section>
  );
}
