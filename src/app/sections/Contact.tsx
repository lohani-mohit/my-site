"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mlohani2/",
    icon: FaLinkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_.lohani._/?hl=en",
    icon: FaInstagram,
    label: "Follow on Instagram",
  },
  {
    name: "Twitter",
    url: "https://x.com/MohitLohan8599",
    icon: FaTwitter,
    label: "Follow on Twitter",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Please email me directly at mohit.lohanivk@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-2.5 rounded-lg bg-base-200 border border-base-300 transition focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

  return (
    <section id="contact" className="w-full py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-1">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-neutral/90 max-w-2xl mx-auto mb-6">
            Building something with AI, hiring for a full-stack role, up for a
            musical collaboration, or just want to say hi? My inbox is always
            open, and I&apos;d genuinely love to hear from you.
          </p>

          <a
            href="mailto:mohit.lohanivk@gmail.com"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-10"
          >
            <FaEnvelope /> mohit.lohanivk@gmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
              >
                <span className="text-3xl text-neutral group-hover:text-primary transition-colors">
                  <link.icon />
                </span>
                <span className="text-sm font-medium text-neutral/80 group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-left mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-left mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about what you have in mind…"
                  className={`${inputClasses} resize-none`}
                  required
                ></textarea>
              </div>
              {formStatus.message && (
                <div
                  className={`text-sm ${
                    formStatus.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full md:w-auto px-10"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
