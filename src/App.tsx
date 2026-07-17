import { useState, useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import BreezeAnimation from "./components/BreezeAnimation"; // Commented out — re-enable to restore aeroplane animation
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // const breezeWrapperRef = useRef<HTMLDivElement | null>(null); // Used by BreezeAnimation — re-enable when animation is active
  const breezeWrapperRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Wake up the backend server on page load (prevents cold-start delay on first form submission)
  useEffect(() => {
    fetch("http://localhost:5000/api/ping")
      .then(() => console.log("Backend is awake ✓"))
      .catch(() => console.warn("Backend ping failed — server may be offline"));
  }, []);

  useEffect(() => {
    // 1. Mouse Tracking with RequestAnimationFrame (Zero React State Lag)
    let cursorX = 0, cursorY = 0, targetX = 0, targetY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (targetX - cursorX) * 0.12;
      cursorY += (targetY - cursorY) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const handleMouseEnterInteractive = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("scale-[3.5]", "bg-white", "border-white");
      }
    };
    const handleMouseLeaveInteractive = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("scale-[3.5]", "bg-white", "border-white");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Set up custom cursor reactive targets continuously
    const interactives = document.querySelectorAll(
      "a, button, select, input, textarea, select, [role='button']"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    // 2. Track global scroll via DOM (Zero React State Lag)
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollRef.current && totalScrollHeight > 0) {
        scrollRef.current.style.transform = `scaleX(${window.scrollY / totalScrollHeight})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanups
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 0.9, smoothWheel: true }}>
      <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-green selection:text-brand-dark overflow-x-hidden relative">
        
        {/* Dynamic Top Scroll Progress Bar */}
        <div
          ref={scrollRef}
          className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-brand-green via-brand-cyan to-brand-yellow z-[10001] origin-left"
          style={{ transform: `scaleX(0)`, width: "100%" }}
        />

        {/* Modern Trailing Cursor Overlay */}
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-4 h-4 bg-brand-dark rounded-full pointer-events-none z-[10000] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-[transform,background-color] duration-300 md:block hidden scale-100"
          style={{ left: '-20px', top: '-20px' }}
        />

        {/* Global Header Navigation */}
        <Navbar />

        {/* Joint Wrapper enclosing Hero and About for the scrolling Paper Plane flight path */}
        <div ref={breezeWrapperRef} className="relative w-full overflow-visible">

          {/* Breeze Scroll-Driven Flight Path and Paper Plane — commented out, re-enable below to restore */}
          {/* <BreezeAnimation wrapperRef={breezeWrapperRef} /> */}

          {/* Hero Landing Stage */}
          <Hero />

          {/* About Brand Segment */}
          <About />

        </div>

        {/* Core Services Section */}
        <Services />

        {/* Process Section */}
        <Process />

        {/* Customer Testimonials & Performance Statistics */}
        <Reviews />

        {/* Interactive Message / Request Proposals Form */}
        <Contact />

        {/* Brand Footer */}
        <Footer />

      </div>
    </ReactLenis>
  );
}
