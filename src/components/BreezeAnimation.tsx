import { useEffect, useRef, useState, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface BreezeAnimationProps {
  wrapperRef: RefObject<HTMLDivElement | null>;
}

export default function BreezeAnimation({ wrapperRef }: BreezeAnimationProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const trailRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<SVGGElement | null>(null);
  const planeArtworkRef = useRef<SVGGElement | null>(null);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    let timeline: gsap.core.Timeline | undefined;
    let animationFrame: number | undefined;

    const createAnimation = () => {
      if (pathRef.current && trailRef.current && planeRef.current && planeArtworkRef.current && wrapperRef.current) {
        timeline?.kill();
        const totalLength = pathRef.current.getTotalLength();

        gsap.set(trailRef.current, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
        });
        // Scale the artwork inside a separate group, leaving the outer group as
        // an exact, unscaled anchor for MotionPathPlugin.
        gsap.set(planeArtworkRef.current, {
          scale: isMobile ? 0.98 : 1.1,
          transformOrigin: "50% 50%",
        });

        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: isMobile ? "top 15%" : "top 40%",
            end: isMobile ? "bottom 75%" : "bottom 90%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(
          planeRef.current,
          {
            motionPath: {
              path: pathRef.current,
              autoRotate: true,
              align: pathRef.current,
              alignOrigin: [0.5, 0.5],
            },
            ease: "none",
            duration: 1,
          },
          0
        );

        timeline.to(
          trailRef.current,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0
        );
      }
    };

    const scheduleAnimation = () => {
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(createAnimation);
    };

    scheduleAnimation();
    window.addEventListener("resize", scheduleAnimation, { passive: true });

    return () => {
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", scheduleAnimation);
      timeline?.kill();
    };
  }, [wrapperRef, isMobile]);

  const flightPath = isMobile
    ? "M 325,115 C 245,35 105,120 110,360 C 115,570 310,575 250,830 C 200,1080 80,1050 78,1370 C 76,1580 205,1630 310,1710"
    : "M 1380,115 C 1400,290 1390,500 1360,650 C 1290,770 1080,800 860,960 C 650,1120 480,1370 150,1650";

  return (
    <div className="absolute inset-0 pointer-events-none z-20 select-none overflow-visible">
      {/* Flight Path SVG */}
      <svg
        className="w-full h-full min-h-[1400px]"
        viewBox={isMobile ? "0 0 390 1800" : "0 0 1440 1800"}
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Stunning linear gradients for the folded paper plane */}
          <linearGradient id="plane-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ecdc4" />
            <stop offset="100%" stopColor="#3dbdb5" />
          </linearGradient>
          <linearGradient id="plane-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff758f" />
            <stop offset="100%" stopColor="#f15bb5" />
          </linearGradient>
          <linearGradient id="plane-grad-keel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9b5de5" />
            <stop offset="100%" stopColor="#7a2bc2" />
          </linearGradient>

          {/* Glowing gradient for the flight trail */}
          <linearGradient id="trail-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5cb85c" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4ecdc4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9b5de5" stopOpacity="0.8" />
          </linearGradient>

          {/* SVG Glow Filter for the breeze trail */}
          <filter id="glow-breeze" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Background dashed 'Flight Plan' path */}
        <path
          ref={pathRef}
          d={flightPath}
          stroke="#d1d6d2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 8"
          fill="none"
        />

        {/* 2. Glowing trail path that grows on scroll */}
        <path
          ref={trailRef}
          d={flightPath}
          stroke="url(#trail-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow-breeze)"
        />

        {/* 3. Fully styled 3D-like Paper Plane */}
        <g ref={planeRef} id="paper-plane">
          <g ref={planeArtworkRef}>
            {/* Left Wing */}
            <path d="M 28,0 L -28,-14 L -8,0 Z" fill="url(#plane-grad-left)" />
            {/* Right Wing */}
            <path d="M 28,0 L -8,0 L -28,14 Z" fill="url(#plane-grad-right)" />
            {/* Top Fold highlight */}
            <path d="M 28,0 L -28,-14 L -28,0 Z" fill="rgba(0, 0, 0, 0.12)" />
            {/* Bottom Fold shading */}
            <path d="M 28,0 L -28,0 L -28,14 Z" fill="rgba(255, 255, 255, 0.1)" />
            {/* Center Keel/Fold underneath */}
            <path d="M -8,0 L -18,10 L -28,0 Z" fill="url(#plane-grad-keel)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
