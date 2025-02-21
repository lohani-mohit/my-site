"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: "Testing & QA",
                skills: [
                  "Test Architecture",
                  "Performance Testing",
                  "API Testing",
                  "Test Strategy",
                  "Test Automation",
                  "Quality Gates",
                ],
              },
              {
                category: "Development",
                skills: [
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "GraphQL",
                  "MongoDB",
                  "REST APIs",
                ],
              },
              {
                category: "DevOps & Cloud",
                skills: [
                  "CI/CD",
                  "Docker",
                  "AWS",
                  "GCloud",
                  "Kubernetes",
                  "Infrastructure",
                ],
              },
              {
                category: "Leadership",
                skills: [
                  "Technical Leadership",
                  "System Design",
                  "Mentoring",
                  "Code Reviews",
                  "Team Management",
                  "Agile",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-base-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-6 text-primary">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-base-300 rounded-full text-sm inline-block hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
