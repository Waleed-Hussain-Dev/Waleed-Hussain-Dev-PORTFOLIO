"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { quentine, mono } from "@/app/fonts";

export const Hero = () => {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };


  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Original Hero Content */}
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-6">
            <motion.h1
              className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
              style={{ color: "hsl(var(--primary))" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {selfData.name}
            </motion.h1>

            <motion.p
              className={`${mono.className} text-lg md:text-xl`}
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {selfData.roles[0]}
            </motion.p>

            <motion.p
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {selfData.bio}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/resume">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                    style={{ background: "var(--glass-shimmer)" }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 font-medium">View Resume</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Code Card */}
        <motion.div
          className="hidden lg:block relative perspective-1000 w-full max-w-xl mx-auto"
          initial={{ opacity: 0, rotateY: 15, x: 50 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          whileHover={{ 
            rotateY: -5,
            rotateX: 5,
            scale: 1.02,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Crystal Clear Glass Container */}
          <div 
            className="rounded-2xl overflow-hidden backdrop-blur-none border shadow-2xl relative group/card"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
              borderColor: "rgba(255,255,255,0.2)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
            }}
          >
            {/* Mouse Tracking Glare overlay */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                background: `radial-gradient(circle 250px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.08), transparent)`
              }}
            />

            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/20 bg-white/5 relative z-30 group/terminal">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.5)] flex items-center justify-center overflow-hidden">
                <span className="opacity-0 group-hover/terminal:opacity-100 text-[8px] font-black text-black">×</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.5)] flex items-center justify-center overflow-hidden">
                <span className="opacity-0 group-hover/terminal:opacity-100 text-[8px] font-black text-black">−</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.5)] flex items-center justify-center overflow-hidden">
                <span className="opacity-0 group-hover/terminal:opacity-100 text-[8px] font-black text-black">+</span>
              </div>
              <span className="ml-2 text-xs font-mono text-white/70">developer.ts</span>
            </div>

            {/* Code Body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed bg-transparent text-[#ABB2BF] relative z-30">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                className="flex flex-col"
              >
                {[
                  { keyword: "const", var: "developer", eq: "=", text: "{" },
                  { space: "  ", key: "name", val: `"Waleed Hussain"`, comma: "," },
                  { space: "  ", key: "role", val: `"Senior Software Engineer"`, comma: "," },
                  { space: "  ", key: "location", val: `"Global"`, comma: "," },
                  { space: "  ", key: "passion", val: `"Building Luxury Web Applications"`, comma: "," },
                  { space: "  ", key: "tech_stack", text: "[", array: `"React", "Next.js", "AI", "Python"`, endArray: "]", comma: "," },
                  { space: "  ", key: "status", highlight: `"Available for Hire"`, comma: "" },
                  { text: "};" },
                  { break: true },
                  { function: "await", dot: " ", action: "developer.hire", args: "();" },
                ].map((line, idx) => {
                  const lineDelay = idx === 9 ? 6.5 : 1.2 + idx * 0.45;
                  return (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                      transition={{ duration: 0.3, delay: lineDelay - 0.1 }}
                      className="flex"
                    >
                      {/* Left Sidebar: Line Number */}
                      <div className="w-6 sm:w-8 text-right pr-3 sm:pr-4 text-white/30 select-none border-r border-white/10 text-xs sm:text-sm pt-[2px]">
                        {line.break ? "" : idx + 1}
                      </div>

                      {/* Right Panel: Typing Code */}
                      <div className="pl-3 sm:pl-4 flex-1">
                        <motion.div
                          variants={{
                            hidden: { width: "0%", opacity: 0 },
                            visible: { width: "100%", opacity: 1 }
                          }}
                          transition={{ duration: idx === 9 ? 0.3 : 0.6, delay: lineDelay, ease: "linear" }}
                          className="overflow-hidden whitespace-nowrap"
                        >
                          {line.break ? <div className="h-4" /> : (
                            <span className="block h-6 sm:h-7">
                              {line.space && <span className="mr-8 w-px inline-block" />}
                              {line.keyword && <span className="text-[#C678DD]">{line.keyword} </span>}
                              {line.var && <span className="text-[#E5C07B]">{line.var} </span>}
                              {line.eq && <span className="text-[#56B6C2]">{line.eq} </span>}
                              
                              {line.key && <span className="text-[#E06C75]">{line.key}: </span>}
                              
                              {line.val && <span className="text-[#98C379]">{line.val}</span>}
                              
                              {line.text && <span className="text-[#ABB2BF]">{line.text}</span>}
                              {line.array && <span className="text-[#98C379]">{line.array}</span>}
                              {line.endArray && <span className="text-[#ABB2BF]">{line.endArray}</span>}
                              
                              {line.highlight && <span className="text-[#E5C07B] font-bold shadow-primary/50">{line.highlight}</span>}
                              
                              {line.function && <span className="text-[#C678DD]">{line.function}</span>}
                              {line.dot && <span className="text-[#ABB2BF]">{line.dot}</span>}
                              {line.action && <span className="text-[#61AFEF]">{line.action}</span>}
                              {line.args && <span className="text-[#ABB2BF]">{line.args}</span>}
                              
                              {line.comma && <span className="text-[#ABB2BF]">{line.comma}</span>}
                            </span>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {/* Blinking Cursor */}
              <div className="flex">
                <div className="w-6 sm:w-8 border-r border-white/10" />
                <div className="pl-3 sm:pl-4 flex-1">
                  <motion.div
                    className="w-2 h-5 bg-[#56B6C2] rounded-sm inline-block mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 7.0 }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Holographic Glowing Effects Behind the Crystal Card */}
          <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl -z-10 rounded-full opacity-60 animate-pulse" style={{ animationDuration: "5s" }}></div>
        </motion.div>
      </div>
    </section>
  );
};
