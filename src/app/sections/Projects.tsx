"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Speechify Inc",
    role: "Individual Contributor",
    period: "Dec 2022 - Present",
    highlights: [
      "Leading QA & Release Management for Monetization",
      "Architected Test Automation for Web & Mobile platforms",
      "Worked on building Next.js web apps for user onboarding and monetization",
      "Worked on migrating Wordpress to Payload CMS",
      "Managing and monitoring subscription management",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Playwright",
      "Google Cloud",
      "Payload CMS",
      "Amplitude",
      "Google Analytics",
      "Stripe",
      "Vercel",
    ],
    icon: "🚀",
  },
  {
    company: "Byjus",
    role: "Lead SDET",
    period: "Nov 2021 - Nov 2022",
    highlights: [
      "Led 8-member SDET team for Web & Mobile automation",
      "Built Appium framework for Android/iOS testing",
      "Implemented Cloud Infrastructure on AWS & GCP",
      "Established CI/CD pipelines and quality gates",
    ],
    tech: [
      "Appium",
      "AWS",
      "GCP",
      "Jenkins",
      "Python",
      "Docker",
      "Selenium",
      "Playwright",
    ],
    icon: "👨‍💻",
  },
  {
    company: "Situs AMC",
    role: "Sr Software Engineer",
    period: "Aug 2020 - Nov 2021",
    highlights: [
      "Architected end-to-end test automation framework",
      "Implemented API and Performance testing solutions",
      "Set up automated CI/CD test pipelines",
    ],
    tech: [
      "Cypress",
      "Selenium",
      "K6",
      "Jenkins",
      "Docker",
      "REST APIs",
      "Java",
    ],
    icon: "💼",
  },
  {
    company: "Expedia Groups",
    role: "Sr Software Engineer",
    period: "Jan 2019 - July 2020",
    highlights: [
      "Microservices Testing & Service Reliability",
      "API Testing Strategy Implementation",
      "Performance Optimization",
    ],
    tech: ["Java", "Spring Boot", "Kubernetes", "GraphQL"],
    icon: "✈️",
  },
  {
    company: "Pitney Bowes",
    role: "Sr QA Engineer",
    period: "Apr 2017 - July 2018",
    highlights: [
      "Led Web Testing initiatives",
      "Implemented Automated Regression",
      "Enhanced Test Coverage & CI Pipeline",
    ],
    tech: ["Selenium", "Java", "TestNG", "Jenkins"],
    icon: "📦",
  },
  {
    company: "Akamai Technologies",
    role: "Sr QA Engineer",
    period: "Sept 2014 - Mar 2017",
    highlights: [
      "Security Testing Implementation",
      "Global QA Collaboration",
      "Test Automation",
    ],
    tech: ["Python", "Selenium", "Java", "JMeter", "Shell Scripting", "CDN"],
    icon: "🌐",
  },
  {
    company: "iGate Global Solutions",
    role: "Sr Engineer",
    period: "Aug 2012 - Sept 2014",
    highlights: [
      "Banking Domain",
      "Built Test Automation Framework",
      "Web Application Testing",
      "Team Mentoring",
    ],
    tech: ["QTP", "Selenium", "TestNG", "Banking Domain"],
    icon: "💡",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="w-full py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{exp.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold">{exp.role}</p>
                      </div>
                      <span className="text-sm text-neutral/80 bg-base-200 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <ul className="list-disc list-inside space-y-1">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-neutral/90">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-primary/80 mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-base-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
