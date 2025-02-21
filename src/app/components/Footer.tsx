"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/_.lohani._/?hl=en",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    url: "https://x.com/MohitLohan8599",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mlohani2/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/lohani-mohit",
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-base-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl text-neutral hover:text-primary transition-colors"
                title={link.name}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-neutral/20" />

          {/* Copyright */}
          <div className="text-sm text-neutral/60">
            <p>
              © {new Date().getFullYear()} Mohit Lohani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
