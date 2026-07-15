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
    desc: "Custom, high-performance websites and web applications built using modern frameworks, fast-loading architecture, and clean, SEO-ready code.",
    icon: <Laptop className="w-6 h-6 stroke-[2]" />,
    features: ["Fast & React JS", "Headless CMS", "Automated Pixel SEO", "Animations"],
    gradient: "bg-brand-green",
  },
  {
    id: "ui-ux",
    num: "02",
    title: "UI/UX Design",
    desc: "User-centric screen designs crafted via systematic wireframing, high-fidelity mockups, and strategic layouts built to hold attention and drive action.",
    icon: <Palette className="w-6 h-6 stroke-[2]" />,
    features: ["Figma Wireframes", "Design Systems", "Pixel Layouts", "UX Auditing"],
    gradient: "bg-brand-cyan",
  },
  {
    id: "shopify",
    num: "03",
    title: "Shopify Development",
    desc: "Advanced Shopify 2.0 storefront builds, custom product catalogs, subscription integrations, and streamlined single-page checkouts designed to boost conversions.",
    icon: <ShoppingBag className="w-6 h-6 stroke-[2]" />,
    features: ["Liquid Themes", "Custom Checkout", "Headless Shopify", "ERP Sync"],
    gradient: "bg-brand-yellow",
  },
  {
    id: "brand",
    num: "04",
    title: "Brand Identity",
    desc: "Full brand discovery, identity design, and visual style guides, paired with market-positioning workshops that build authority and connect with your core audience.",
    icon: <Compass className="w-6 h-6 stroke-[2]" />,
    features: ["Logo Systems", "Moodboards", "Positioning Maps", "Creative Assets"],
    gradient: "bg-brand-green",
  },
  {
    id: "seo",
    num: "05",
    title: "SEO Optimization",
    desc: "In-depth search engine optimization covering semantic markup, schema validation, real-time index monitoring, and speed metrics tuned for measurable ranking gains.",
    icon: <Search className="w-6 h-6 stroke-[2]" />,
    features: ["Semantic Schema", "Index Monitoring", "Speed Audits", "Keyword Intel"],
    gradient: "bg-brand-green",
  },
  {
    id: "marketing",
    num: "06",
    title: "Digital Marketing",
    desc: "Targeted brand campaigns, high-converting ad copy, pixel-based conversion tracking, and custom funnels built to expand your reach and grow revenue.",
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
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(cards.slice(1), { y: () => window.innerHeight + 200 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: "top 12%",
            end: `+=${cards.length * 58}%`,
            scrub: 0.45,
            invalidateOnRefresh: true,
            markers: false
          }
        });

        cards.forEach((card, i) => {
          if (i === 0) return;
          tl.to(card, {
            y: i * 28,
            duration: 0.72,
            ease: "power1.out"
          });
        });

        return () => {
          tl.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cards, { clearProps: "transform" });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 pt-6 md:pt-14 pb-20 md:pb-[24vh] my-4 md:my-10 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-start"
    >
      <div className="w-full md:w-[330px] lg:w-[390px] shrink-0 md:sticky md:top-[12vh] bg-white/90 border border-black/5 rounded-[28px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_24px_80px_rgba(17,24,39,0.07)] backdrop-blur">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[11px] font-mono font-bold uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span>SPECIALIZED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark tracking-tight leading-tight mb-5">
            Services built to move the needle.
          </h2>
          <p className="text-brand-text-light text-sm lg:text-base leading-relaxed mb-7">
            Strategy, design, code, commerce, and growth systems shaped into digital work that feels sharp on launch day and keeps compounding after it.
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 self-start px-5 py-3 rounded-xl bg-brand-dark text-white hover:bg-brand-green hover:text-brand-dark transition-colors duration-300 text-xs font-bold uppercase tracking-wider shadow-lg"
        >
          <span>Work With Us</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="relative w-full flex-1 grid gap-5 md:gap-0 mt-2 md:mt-0" style={{ gridTemplateRows: '1fr' }}>
        {SERVICES_DATA.map((service, i) => (
          <div
            key={service.id}
            ref={el => {
              cardsRef.current[i] = el;
            }}
            className="relative w-full overflow-hidden rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_18px_55px_rgba(17,24,39,0.08)] md:shadow-[0_-14px_44px_rgba(17,24,39,0.08)] border border-black/5 flex flex-col will-change-transform bg-white md:[grid-area:1/1/2/2]"
            style={{
              zIndex: i + 1,
              minHeight: "clamp(390px, 58vh, 500px)"
            }}
          >
            <div className={`absolute top-0 left-0 w-full h-1.5 ${service.gradient}`} />
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-bg pointer-events-none" />

            <div className="relative flex items-start justify-between gap-4 mb-7">
              <div className="flex items-start gap-4 min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex shrink-0 items-center justify-center bg-brand-bg text-brand-dark border border-black/5">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-brand-teGxt-muted font-mono tracking-[0.2em] uppercase">
                    CAPABILITY // {service.num}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark tracking-tight mt-1 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              <span className="hidden sm:block font-display text-5xl font-bold text-brand-dark/5 leading-none">
                {service.num}
              </span>
            </div>

            <p className="relative text-brand-text-light text-sm sm:text-base leading-relaxed mb-7 flex-1 max-w-2xl">
              {service.desc}
            </p>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
              {service.features.map((feature, fi) => (
                <div key={fi} className="flex items-center gap-2 text-xs text-brand-text-light font-semibold min-w-0">
                  <span className="w-5 h-5 rounded-full flex shrink-0 items-center justify-center bg-brand-bg border border-black/5">
                    <Check className="w-3 h-3 text-brand-dark" />
                  </span>
                  <span className="min-w-0 truncate">{feature}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
