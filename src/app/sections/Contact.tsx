"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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

  return (
    <section id="contact" className="w-full py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-neutral/90 mb-12">
            Whether you want to discuss a project, ask about my experience, or
            just want to say hi, I'd love to hear from you!
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-2 group"
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

          <div className="bg-base-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-left mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-left mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="btn btn-primary w-full md:w-auto px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
