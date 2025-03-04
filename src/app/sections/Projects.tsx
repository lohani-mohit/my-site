"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const experiences = [
  {
    company: "Moxtain",
    role: "Founding Member",
    period: "Sept 2017 - Present",
    highlights: [
      "Co-founded adventure travel company",
      "Led 50+ successful Himalayan expeditions",
      "Developed booking and management system",
      "Built and managed company website",
      "Handled digital marketing and social media",
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Digital Marketing",
      "Social Media Management",
    ],
    icon: "⛰️",
  },
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

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.9; // 90% of container width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="w-full py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional Journey
          </h2>

          {/* Mobile Scrollable / Desktop Grid */}
          <div className="relative">
            {/* Swipe Indicators for Mobile */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll("left")}
              className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 bg-base-100/80 p-2 rounded-full z-10 cursor-pointer hover:bg-base-100 active:bg-base-200 transition-colors"
            >
              <FaChevronLeft className="text-primary/60 text-xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll("right")}
              className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 bg-base-100/80 p-2 rounded-full z-10 cursor-pointer hover:bg-base-100 active:bg-base-200 transition-colors"
            >
              <FaChevronRight className="text-primary/60 text-xl" />
            </motion.div>

            <div className="md:grid md:grid-cols-2 md:gap-8 md:place-items-center">
              {/* Mobile Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="flex md:contents overflow-x-auto overflow-y-hidden pb-6 md:pb-0 gap-6 md:gap-0 snap-x snap-mandatory md:snap-none touch-pan-x will-change-scroll isolate px-4 -mx-4 md:mx-0 scroll-smooth"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-none w-[90vw] max-w-[500px] md:w-auto snap-center md:snap-align-none md:mb-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{exp.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                          <div className="min-w-0">
                            <h3 className="text-xl font-bold text-primary truncate">
                              {exp.company}
                            </h3>
                            <p className="text-lg font-semibold truncate">
                              {exp.role}
                            </p>
                          </div>
                          <span className="text-sm text-neutral/80 bg-base-200 px-3 py-1 rounded-full whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <ul className="list-disc list-inside space-y-1">
                              {exp.highlights.map((highlight, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-neutral/90 break-words"
                                >
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
                                  className="text-xs px-2 py-1 bg-base-300 rounded-full whitespace-nowrap"
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
            </div>
          </div>

          {/* Mobile Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-sm text-neutral/60 mt-4 md:hidden flex items-center justify-center gap-2"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll("left")}
              className="cursor-pointer"
            >
              <FaChevronLeft className="text-primary/60" />
            </motion.span>
            Swipe to explore more experiences
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll("right")}
              className="cursor-pointer"
            >
              <FaChevronRight className="text-primary/60" />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-x-auto {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          overscroll-behavior-x: contain;
          overscroll-behavior-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* Prevent vertical scroll interference */
        .overflow-x-auto {
          touch-action: pan-x pan-y pinch-zoom;
        }

        @media (min-width: 768px) {
          .contents {
            display: contents;
          }
        }
      `}</style>
    </section>
  );
}
