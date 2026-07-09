"use client";

import React from "react";
import ServiceStack from "./ServiceStack";

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-bg overflow-hidden">
      
      {/* Header section with generous negative space and cinematic typography */}
      <div className="w-full text-center max-w-4xl mx-auto px-6 pt-32 pb-16 relative z-10">
        
        {/* Animated ambient tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-mono font-bold uppercase tracking-[0.15em] mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
          <span>Specialized Capabilities</span>
        </div>
        
        {/* Main Section Header */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark mb-6">
          Our Core Services
        </h2>
        
        {/* Elegant Description */}
        <p className="text-brand-text-light text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          From strategic brand positioning to custom code deployment, we engineer digital products that turn ambitious visions into high-impact business results. Scroll down to see our card stack.
        </p>
      </div>

      {/* Cinematic Stacking Cards Component */}
      <div className="w-full relative z-10">
        <ServiceStack />
      </div>

    </section>
  );
}
