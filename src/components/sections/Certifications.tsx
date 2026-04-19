"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { FiAward, FiDownload } from "react-icons/fi";
import Link from "next/link";

const certificates = [
  {
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    description: "A comprehensive professional certification demonstrating rigorous proficiency in Python programming, automated workflows, and complex data structures.",
    file: "/docs/python-certification.pdf",
    delay: 0.4,
  },
  {
    title: "Fundamentals of AI",
    issuer: "Cambridge International",
    description: "An international certification covering the core principles, machine learning concepts, and practical integration of Artificial Intelligence.",
    file: "/docs/ai-certification.pdf",
    delay: 0.6,
  }
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      id="certifications"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Certifications
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional credentials and continued learning.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: cert.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group h-full"
            >
              <div
                className="relative overflow-hidden backdrop-blur-xl border transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl group-hover:shadow-luxury-hover-glow/30 p-8"
                style={{
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                  borderRadius: "1.5rem",
                }}
              >
                {/* Glass shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "var(--shimmer)" }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />

                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(45deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2), hsl(var(--accent) / 0.2))",
                    filter: "blur(1px)",
                  }}
                />

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <FiAward className="w-6 h-6" />
                    </div>
                    <span 
                      className="font-semibold text-sm uppercase tracking-wider"
                      style={{ color: "hsl(var(--secondary))" }}
                    >
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-4 transition-colors font-nasalization"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    {cert.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed mb-8 font-inter"
                    style={{ color: "hsl(var(--foreground) / 0.8)" }}
                  >
                    {cert.description}
                  </p>

                  <Link href={cert.file} target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-block">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-5 py-3 border transition-colors text-sm font-medium w-full text-center shadow-md font-mono"
                      style={{
                        backgroundColor: "hsl(var(--glass-bg-light))",
                        borderColor: "hsl(var(--glass-border))",
                        color: "hsl(var(--foreground))",
                        borderRadius: "0.5rem",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <FiDownload className="w-4 h-4" />
                      View Certificate
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
