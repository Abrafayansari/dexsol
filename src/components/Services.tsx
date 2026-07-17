"use client";

import React from "react";
import ServiceStack from "./ServiceStack";

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-bg overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      
      <div className="w-full text-center max-w-4xl mx-auto px-5 sm:px-6 pt-24 md:pt-32 pb-10 md:pb-14 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-green/20 text-brand-green text-[11px] font-mono font-bold uppercase tracking-[0.15em] mb-5 shadow-sm backdrop-blur">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
          <span>Growth Solutions</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark mb-5 leading-[1.05]">
          Solutions shaped around how your business grows.
        </h2>
        
        <p className="text-brand-text-light text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          Every business has different goals, pressures, and customers. We combine the right disciplines into one digital system so the work supports growth from day one and keeps improving over time.
        </p>
      </div>

      <div className="w-full relative z-10">
        <ServiceStack />
      </div>

    </section>
  );
}
