"use client";

import { quentine } from "@/app/fonts";
import { selfData } from "@/constant";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Background } from "./Background";

export const PreLoader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Shorter and much more satisfying timer
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 w-full h-full">
            <Background />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none w-full max-w-7xl mx-auto px-4">
            
            {/* SVG Handwritten Drawing Effect */}
            <svg 
              className="w-full h-[250px] md:h-[350px] drop-shadow-2xl" 
              viewBox="0 0 1800 400"
              style={{ willChange: "transform, opacity" }}
            >
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                className={`${quentine.className} text-[7rem] md:text-[10rem] lg:text-[13rem]`}
                style={{
                  fill: "transparent",
                  stroke: "hsl(var(--primary))",
                  strokeWidth: 2, 
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  willChange: "stroke-dashoffset, fill",
                }}
                initial={{ strokeDasharray: 2500, strokeDashoffset: 2500 }}
                animate={{ 
                  strokeDashoffset: 0,
                  fill: ["transparent", "transparent", "rgb(241 245 249)", "rgb(241 245 249)"] 
                }}
                transition={{ 
                  strokeDashoffset: { duration: 2.8, ease: "easeInOut" },
                  fill: { duration: 3.2, ease: "easeIn" }
                }}
              >
                {selfData.name}
              </motion.text>
            </svg>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
