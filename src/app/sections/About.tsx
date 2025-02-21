"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMountain, FaGuitar } from "react-icons/fa";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="w-full py-20 bg-base-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

          {/* Two Column Layout - My Journey and Beyond Tech */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-base-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                My Journey
              </h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I started my journey as a QA, armed with nothing but curiosity
                  to learn and determination to grow. Through stumbles and
                  setbacks, each challenge became a stepping stone, shaping my
                  understanding and building resilience.
                </p>
                <p className="leading-relaxed">
                  Now at Speechify, I've expanded my horizons as a Full Stack
                  Developer while maintaining my QA expertise. With over 11
                  years in the field, I bring a unique blend of testing
                  precision and development innovation to every project I
                  undertake.
                </p>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Beyond Technology
              </h3>

              {/* Music Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary/80 mb-4">
                  Music
                </h4>
                <div className="flex items-start gap-4">
                  <span className="text-3xl text-primary">
                    <FaGuitar />
                  </span>
                  <div>
                    <p className="leading-relaxed">
                      As a musician, I find joy in creating melodies that bridge
                      emotions. Guitar is my primary instrument, accompanied by
                      harmonica, keys, and backing vocals. Music has been my
                      constant companion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mountaineering Section */}
              <div>
                <h4 className="text-xl font-semibold text-primary/80 mb-4">
                  Mountaineering
                </h4>
                <div className="flex items-start gap-4">
                  <span className="text-3xl text-primary">
                    <FaMountain />
                  </span>
                  <div>
                    <p className="leading-relaxed">
                      Born in the the Himalayas, mountains are integral to who I
                      am. As an avid trekker, I've explored numerous trails in
                      the mighty mountain range, each expedition teaching me
                      valuable lessons about perseverance, strategic planning,
                      and the importance of maintaining composure at high
                      altitudes - skills that translate perfectly into my
                      professional life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Beliefs Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-8">
              Core Beliefs
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Learn from Failures",
                  desc: "Every mistake is a step forward if you're willing to learn from it",
                  icon: "🎯",
                },
                {
                  title: "Stay Humble",
                  desc: "The moment you think you know it all is when you stop growing",
                  icon: "🌱",
                },
                {
                  title: "Balance Tech & Art",
                  desc: "Combining logical thinking with creative expression leads to innovative solutions",
                  icon: "🎵",
                },
              ].map((belief) => (
                <motion.div
                  key={belief.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-base-200 p-6 rounded-lg shadow-lg"
                >
                  <span className="text-2xl mb-3 block">{belief.icon}</span>
                  <h4 className="text-xl font-semibold mb-3">{belief.title}</h4>
                  <p>{belief.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
