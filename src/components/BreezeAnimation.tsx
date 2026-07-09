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
  const [length, setLength] = useState(0);

  useEffect(() => {
    // Wait for layout to settle to calculate SVG path length
    const handleCalculation = () => {
      if (pathRef.current && trailRef.current && planeRef.current && wrapperRef.current) {
        const totalLength = pathRef.current.getTotalLength();
        setLength(totalLength);

        // Configure initial trail dash properties
        gsap.set(trailRef.current, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
        });

        // Create main timeline bound to scrolling
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom 90%",
            scrub: 1.2, // smooth scroll lag/catch-up
            invalidateOnRefresh: true,
          },
        });

        // 1. Animate paper plane along the responsive SVG path
        tl.to(
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

        // 2. Grow the trailing colorful path in perfect synchrony with the paper plane
        tl.to(
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

    // Delay calculation slightly to guarantee DOM rendering and coordinates are fully ready
    const timeoutId = setTimeout(handleCalculation, 200);

    // Re-calculate on window resize to keep it perfectly responsive
    window.addEventListener("resize", handleCalculation);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleCalculation);
    };
  }, [wrapperRef]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 select-none overflow-visible">
      {/* Flight Path SVG */}
      <svg
        className="w-full h-full min-h-[1400px]"
        viewBox="0 0 1440 1800"
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
          d="M 1200,150 C 950,50 650,150 550,450 C 450,750 950,700 850,1100 C 750,1500 450,1400 150,1650"
          stroke="#d1d6d2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 8"
          fill="none"
        />

        {/* 2. Glowing trail path that grows on scroll */}
        <path
          ref={trailRef}
          d="M 1200,150 C 950,50 650,150 550,450 C 450,750 950,700 850,1100 C 750,1500 450,1400 150,1650"
          stroke="url(#trail-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow-breeze)"
        />

        {/* 3. Fully styled 3D-like Paper Plane */}
        <g ref={planeRef} id="paper-plane" className="origin-center scale-[0.8] md:scale-[1.1]">
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
      </svg>
    </div>
  );
}
