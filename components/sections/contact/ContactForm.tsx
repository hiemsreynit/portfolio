"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate an API call
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          id="email"
          required
          placeholder="Your email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Your message here..."
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-fit py-2 px-4 bg-primary hover:bg-primary/80 text-white font-medium rounded-full transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 font-medium text-center mt-4">
            Thank you! Your message has been sent successfully.
          </p>
        )}
      </form>
    </section>
  );
}
