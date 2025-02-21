"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/my-site/images/night-camp.jpg')",
            backgroundPosition: "center 75%",
            filter: "contrast(1.4) brightness(0.9)",
          }}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-base-100/60 via-base-100/40 to-base-100/85" />
      </div>

      {/* Animated Overlay Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-soft-light filter blur-lg animate-float opacity-40" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-secondary/5 rounded-full mix-blend-soft-light filter blur-lg animate-float opacity-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent/5 rounded-full mix-blend-soft-light filter blur-lg animate-float opacity-40"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-[1px]"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-xl"
            >
              <img
                src="/my-site/images/profile.jpeg"
                alt="Mohit Lohani"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-5xl md:text-7xl font-bold text-[#00A6FF] dark:text-[#4DFFDB] drop-shadow-lg transition-colors duration-300 cursor-default"
            >
              Mohit Lohani
            </motion.h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-white font-semibold drop-shadow-lg">
              Software Engineer(Web, Test Automation, Backend)
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl text-white/90 font-medium drop-shadow-lg"
          >
            11+ Years of Excellence in Quality Engineering & Development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 space-x-4"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg shadow-lg"
            >
              About Me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn glass btn-lg shadow-lg text-white hover:bg-base-200 hover:text-neutral-900"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12"
          >
            <p className="text-lg text-white/90 font-medium drop-shadow-lg">
              QA Expert • Developer • Musician • Mountain Enthusiast
            </p>
          </motion.div>

          {/* Mountain Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <p className="text-sm text-white/80 italic">
              "Because it's there" - George Mallory
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
