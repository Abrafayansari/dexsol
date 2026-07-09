"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    icon?: React.ReactNode;
    iconBgClass?: string;
    features?: string[];
    accentColor?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  // Track page-level scroll relative to the services section container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgba(10, 11, 10, 0.95)", // dark theme bg
    "rgba(12, 16, 13, 0.95)", // subtly green-tinted dark
    "rgba(10, 14, 15, 0.95)", // subtly cyan-tinted dark
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 transition-colors duration-500 py-16 md:py-24"
      ref={ref}
    >
      {/* Left Column: Scrolling content (Titles, Descriptions, Features list, Inline visual for mobile) */}
      <div className="relative w-full lg:w-1/2 flex items-start px-4 md:px-8">
        <div className="w-full space-y-24 md:space-y-36">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="scroll-mt-28 flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Icon and Number Row */}
                <div className="flex items-center gap-4">
                  {item.icon && (
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10", item.iconBgClass)}>
                      {item.icon}
                    </div>
                  )}
                  <span className="text-xs font-mono font-bold text-white/30 tracking-widest">
                    SERVICE // 0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <motion.h2
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                    scale: activeCard === index ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight origin-left"
                >
                  {item.title}
                </motion.h2>

                {/* Service Description */}
                <motion.p
                  animate={{
                    opacity: activeCard === index ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
                >
                  {item.description}
                </motion.p>

                {/* Features dynamic list */}
                {item.features && (
                  <motion.div 
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
                  >
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-400 font-medium">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                          <span className={cn("text-xs font-bold", item.accentColor)}>✓</span>
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Mobile/Tablet Picture Inline display (rendered below the text for small viewports) */}
                <div className="block lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden mt-8 border border-white/10 shadow-2xl relative z-10 bg-brand-dark/40 p-4">
                  {item.content}
                </div>

                {/* Service CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10"
                  >
                    <span>Request Callback</span>
                    <span className="text-lg transition-transform group-hover/btn:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
          {/* Bottom spacing helper */}
          <div className="h-12" />
        </div>
      </div>

      {/* Right Column: Sticky container displaying active card picture/illustration (Desktop Only) */}
      <div
        className={cn(
          "sticky top-28 hidden lg:block h-[420px] w-full max-w-[460px] xl:max-w-[500px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500",
          contentClassName
        )}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {content.map((item, index) => (
            <motion.div
              key={"visual-" + index}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{
                opacity: activeCard === index ? 1 : 0,
                scale: activeCard === index ? 1 : 0.92,
                y: activeCard === index ? 0 : 15,
                pointerEvents: activeCard === index ? "auto" : "none",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
