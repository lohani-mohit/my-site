"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
                  I started my journey as a middle-class college student in QA,
                  armed with nothing but curiosity to learn and determination to
                  grow. Through stumbles and setbacks, each challenge became a
                  stepping stone, shaping my understanding and building
                  resilience.
                </p>
                <p className="leading-relaxed">
                  Today, as an engineer at Speechify, I continue to embrace
                  growth and push beyond limits. With over 11 years in Quality
                  Assurance and Development, I've evolved from manual testing to
                  becoming an ISTQB certified Testing Professional and Full
                  Stack Developer.
                </p>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Beyond Tech
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏔️</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Mountain Soul
                    </h4>
                    <p className="leading-relaxed">
                      As an avid Himalayan trekker, I find my greatest
                      inspiration in the mountains. Each trek teaches invaluable
                      lessons about persistence, adaptability, and maintaining
                      focus under challenging conditions. The mountains have
                      become my second home, where every journey reinforces the
                      importance of preparation, teamwork, and resilience.
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
                  title: "Maintain Balance",
                  desc: "Recognizing progress keeps you grounded; knowing there's more keeps you hungry",
                  icon: "⚖️",
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
