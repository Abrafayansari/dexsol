"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Laptop, Palette, ShoppingBag, Compass, Search, BarChart3, ArrowRight, Check
} from "lucide-react";

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    num: "01",
    title: "Website Development",
    desc: "Custom high-performance websites, portals, and web applications built using cutting-edge reactive tech for flawless responsiveness, direct SEO, and scalability.",
    icon: <Laptop className="w-6 h-6 stroke-[2]" />,
    features: ["Next.js & React 19", "Automated Pixel SEO", "Headless CMS", "Serverless"],
    gradient: "bg-brand-green",
  },
  {
    id: "ui-ux",
    num: "02",
    title: "UI/UX Design",
    desc: "Immersive, user-centric screen interfaces crafted via systematic wireframing, high-fidelity mockups, and strategic layouts designed to drive maximum customer retention.",
    icon: <Palette className="w-6 h-6 stroke-[2]" />,
    features: ["Figma Wireframes", "Fluid Layouts", "Design Systems", "UX Auditing"],
    gradient: "bg-brand-cyan",
  },
  {
    id: "shopify",
    num: "03",
    title: "Shopify Development",
    desc: "Advanced Shopify 2.0 storefront setups, custom product catalogs, subscription gateways, and fluid single-page checkouts structured to boost conversion.",
    icon: <ShoppingBag className="w-6 h-6 stroke-[2]" />,
    features: ["Liquid Themes", "Headless Shopify", "Custom Checkout", "ERP Sync"],
    gradient: "bg-brand-yellow",
  },
  {
    id: "brand",
    num: "04",
    title: "Brand Identity",
    desc: "Holistic brand discovery, identity definitions, visual styling guides, and market-positioning workshops crafted to build authority and connect deep with your core audience.",
    icon: <Compass className="w-6 h-6 stroke-[2]" />,
    features: ["Logo Systems", "Moodboards", "Positioning Maps", "Creative Assets"],
    gradient: "bg-brand-orange",
  },
  {
    id: "seo",
    num: "05",
    title: "SEO Optimization",
    desc: "High-level search engine optimization utilizing semantic markup, schema validation, real-time index monitoring, and optimized speed metrics to guarantee top page rankings.",
    icon: <Search className="w-6 h-6 stroke-[2]" />,
    features: ["Semantic Schema", "Index Monitoring", "Speed Audits", "Keyword Intel"],
    gradient: "bg-brand-purple",
  },
  {
    id: "marketing",
    num: "06",
    title: "Digital Marketing",
    desc: "Targeted brand campaigns, high-converting copy, automated pixel tracking, and custom conversion funnels engineered to expand your digital footprint and amplify revenue.",
    icon: <BarChart3 className="w-6 h-6 stroke-[2]" />,
    features: ["Targeted Ads", "Funnel Copy", "Pixel Tracking", "ROI Attribution"],
    gradient: "bg-brand-pink",
  }
];

// Register GSAP safely for Next.js SSR or just generally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!sectionRef.current || cards.length === 0) return;

    let ctx = gsap.context(() => {
      // Set initial positions: all cards except first start below the viewport
      gsap.set(cards.slice(1), { y: () => window.innerHeight });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top 15%",
          end: `+=${cards.length * 100}%`, // Scroll distance mapped to array length
          scrub: 1, // Smooth scrub
          markers: false // set to true to debug
        }
      });

      // Animate each sequential card from bottom of window to its stacked offset
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, {
          y: i * 35, // This is the offset that forms the "stacking card" header peek
          duration: 1,
          ease: "none"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-[30vh] my-10 flex flex-col md:flex-row gap-10 md:gap-14 items-start"
    >
      {/* 
        LEFT COLUMN ("Something to stay")
        This acts as the sticky header block. 
      */}
      <div className="w-full md:w-[350px] lg:w-[400px] shrink-0 sticky top-[15vh] bg-white border border-black/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-mono font-bold uppercase tracking-[0.15em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark tracking-tight leading-tight mb-6">
            Engineering Digital Excellence.
          </h2>
          <p className="text-brand-text-light text-sm lg:text-base leading-relaxed font-light mb-8">
            From strategic brand positioning to custom code deployment, we engineer digital products that turn ambitious visions into high-impact business results. Let's stack the odds in your favor.
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 self-start px-5 py-3 rounded-xl bg-brand-dark text-white hover:bg-brand-green transition-colors duration-300 text-xs font-bold uppercase tracking-wider shadow-lg"
        >
          <span>Work With Us</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* 
        RIGHT COLUMN (Stacking Cards)
        They perfectly stack visually due to CSS grid-area.
      */}
      <div className="relative w-full flex-1 grid mt-10 md:mt-0" style={{ gridTemplateRows: '1fr' }}>
        {SERVICES_DATA.map((service, i) => (
          <div
            key={service.id}
            ref={el => cardsRef.current[i] = el}
            className="w-full p-8 md:p-10 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col will-change-transform bg-white"
            style={{
              gridArea: "1 / 1 / 2 / 2", // Cards stack perfectly on each other in HTML
              zIndex: i + 1,
              height: "480px"
            }}
          >
            {/* Top Glowing Trim */}
            <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-full ${service.gradient}`} />

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-bg text-brand-dark`}>
                  {service.icon}
                </div>
                <div>
                  <span className="text-[10px] text-brand-text-muted font-mono tracking-[0.2em] uppercase">
                    CAPABILITY // {service.num}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark tracking-tight mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <p className="text-brand-text-light text-base font-light leading-relaxed mb-8 flex-1">
              {service.desc}
            </p>

            {/* Features Footer */}
            {/* <div className="grid grid-cols-2 gap-4 mt-auto">
              {service.features.map((feature, fi) => (
                <div key={fi} className="flex items-center gap-2 text-xs text-brand-text-muted font-medium">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-brand-bg border border-black/5">
                    <Check className="w-3 h-3 text-brand-dark" />
                  </span>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div> */}

          </div>
        ))}
      </div>
    </div>
  );
}
