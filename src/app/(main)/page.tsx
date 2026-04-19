"use client";

import { useState, useEffect } from "react";

import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Certifications,
} from "@/components/sections";
import { PreLoader, Background } from "@/components/common";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mount the website components right as the Preloader begins to fade out (4 seconds)
    const loadTimer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <>
      <PreLoader />
      
      {!loading && (
        <div className="min-h-screen relative">
          <Background />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
