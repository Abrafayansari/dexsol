"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Laptop,
  Palette,
  ShoppingBag,
  Compass,
  BarChart3,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight
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
    desc: "We build websites that do more than look polished. They load fast, communicate clearly, and turn attention into trust, leads, and sales.",
    icon: <Laptop className="w-6 h-6 stroke-[2]" />,
    features: ["Fast, modern code", "Search-ready structure", "Conversion-focused UX", "Ongoing optimization"],
    gradient: "bg-[#095c65]",
  },
  {
    id: "ui-ux",
    num: "02",
    title: "UI/UX Design",
    desc: "We design interfaces that make it easier for customers to understand, trust, and choose your business.",
    icon: <Palette className="w-6 h-6 stroke-[2]" />,
    features: ["Figma systems", "Clear user journeys", "Intentional layouts", "Usability improvements"],
    gradient: "bg-[#67c7bf]",
  },
  {
    id: "shopify",
    num: "03",
    title: "Shopify Development",
    desc: "We create Shopify experiences that make buying easier, increase conversion rates, and support scalable ecommerce growth.",
    icon: <ShoppingBag className="w-6 h-6 stroke-[2]" />,
    features: ["Custom storefronts", "Checkout optimization", "Catalog strategy", "Growth tracking"],
    gradient: "bg-[#024b75]",
  },
  {
    id: "brand",
    num: "04",
    title: "Brand Identity",
    desc: "We build brands that feel credible, memorable, and aligned with the value you want customers to see.",
    icon: <Compass className="w-6 h-6 stroke-[2]" />,
    features: ["Brand direction", "Visual identity", "Messaging clarity", "Trust-building assets"],
    gradient: "bg-[#095c65]",
  },
  {
    id: "marketing",
    num: "05",
    title: "Digital Marketing",
    desc: "We plan and manage marketing that brings the right people to your business and turns interest into measurable demand.",
    icon: <BarChart3 className="w-6 h-6 stroke-[2]" />,
    features: ["Campaign strategy", "Audience targeting", "Conversion tracking", "Performance reporting"],
    gradient: "bg-[#67c7bf]",
  },
  {
    id: "social",
    num: "06",
    title: "Social Media Management",
    desc: "We shape a consistent social presence that helps the right audience remember your brand, trust your expertise, and engage with your offers.",
    icon: <Compass className="w-6 h-6 stroke-[2]" />,
    features: ["Content planning", "Posting strategy", "Audience growth", "Brand consistency"],
    gradient: "bg-[#024b75]",
  },
  {
    id: "video",
    num: "07",
    title: "Video Editing",
    desc: "We turn raw footage into clear, engaging content that supports launches, campaigns, explainers, and social growth.",
    icon: <Laptop className="w-6 h-6 stroke-[2]" />,
    features: ["Short-form edits", "Campaign videos", "Story-driven cuts", "Brand-aligned visuals"],
    gradient: "bg-[#095c65]",
  }
];

export default function ServiceStack() {
  const desktopSectionRef = useRef<HTMLDivElement>(null);
  const desktopCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (err) => reject(err);
        document.head.appendChild(script);
      });
    };

    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js")
    ])
      .then(() => {
        if (isMounted) {
          setScriptsLoaded(true);
        }
      })
      .catch((err) => {
        console.error("Error loading GSAP animation libraries:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!scriptsLoaded) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP ANIMATION (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        const desktopCards = desktopCardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (!desktopSectionRef.current || desktopCards.length === 0) return;

        gsap.set(desktopCards.slice(1), { y: () => window.innerHeight + 200 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopSectionRef.current,
            pin: true,
            start: "top 12%",
            end: `+=${desktopCards.length * 58}%`,
            scrub: 0.45,
            invalidateOnRefresh: true,
            markers: false
          }
        });

        desktopCards.forEach((card, i) => {
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

      // MOBILE ANIMATION (max-width: 767px)
      mm.add("(max-width: 767px)", () => {
        const mobileCards = mobileCardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (!mobileContainerRef.current || mobileCards.length === 0) return;

        const total = mobileCards.length;

        // Set initial stack positions cleanly
        mobileCards.forEach((card, i) => {
          gsap.set(card, {
            yPercent: 0,
            y: i * 12,
            scale: 1 - i * 0.05,
            opacity: i < 3 ? 1 - i * 0.15 : 0,
            zIndex: total - i,
            transformOrigin: "center top",
            rotate: 0
          });
        });

        // Create non-conflicting step-by-step timeline
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: mobileContainerRef.current,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: `+=${total * 300}`,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const idx = Math.min(
                Math.floor(progress * total),
                total - 1
              );
              setActiveMobileIndex(idx);
            }
          }
        });

        // Build deterministic step animations
        for (let i = 0; i < total - 1; i++) {
          const stepStart = i;

          // 1. Current card flies up and off screen
          mobileTl.to(
            mobileCards[i],
            {
              yPercent: -130,
              opacity: 0,
              rotate: i % 2 === 0 ? -6 : 6,
              scale: 0.9,
              duration: 1,
              ease: "power2.inOut"
            },
            stepStart
          );

          // 2. Next card moves up to full active focal point
          mobileTl.to(
            mobileCards[i + 1],
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut"
            },
            stepStart
          );

          // 3. Card after next moves up to slot 1
          if (i + 2 < total) {
            mobileTl.to(
              mobileCards[i + 2],
              {
                y: 12,
                scale: 0.95,
                opacity: 0.85,
                duration: 1,
                ease: "power2.inOut"
              },
              stepStart
            );
          }

          // 4. Card 3 deep moves up to slot 2
          if (i + 3 < total) {
            mobileTl.to(
              mobileCards[i + 3],
              {
                y: 24,
                scale: 0.9,
                opacity: 0.5,
                duration: 1,
                ease: "power2.inOut"
              },
              stepStart
            );
          }
        }

        // Force layout refresh after mount
        const timer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);

        return () => {
          clearTimeout(timer);
          mobileTl.kill();
        };
      });
    });

    return () => ctx.revert();
  }, [scriptsLoaded]);

  const handleMobileNavigate = (targetIndex: number) => {
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!mobileContainerRef.current || !ScrollTrigger) return;

    const st = ScrollTrigger.getById("mobile-stack") || ScrollTrigger.getAll().find((s: any) => s.pin === mobileContainerRef.current);
    
    if (st) {
      const targetProgress = targetIndex / (SERVICES_DATA.length - 1);
      const scrollPos = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: scrollPos,
        behavior: "smooth"
      });
    } else {
      setActiveMobileIndex(targetIndex);
    }
  };

  return (
    <section className="w-full bg-slate-50 text-slate-900 py-6 md:py-16 overflow-hidden">
      {}
      <div
        ref={desktopSectionRef}
        className="hidden md:flex relative w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pt-6 md:pt-14 pb-20 md:pb-[24vh] my-4 md:my-10 flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-start"
      >
        <div className="w-full md:w-[330px] lg:w-[390px] shrink-0 md:sticky md:top-[12vh] bg-white border border-slate-200 rounded-[28px] p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl backdrop-blur">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#095c65]/10 border border-[#67c7bf]/25 text-[#67c7bf] text-[11px] font-mono font-bold uppercase tracking-[0.15em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#67c7bf] animate-pulse" />
              <span>GROWTH SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              Everything we do is built around business growth.
            </h2>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-7">
              We match the right mix of strategy, design, development, content, commerce, and marketing to the challenge in front of you.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start px-5 py-3 rounded-xl bg-[#095c65] text-white hover:bg-[#024b75] transition-colors duration-300 text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative w-full flex-1 grid gap-4 sm:gap-5 md:gap-0 mt-2 md:mt-0" style={{ gridTemplateRows: "1fr" }}>
          {SERVICES_DATA.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => {
                desktopCardsRef.current[i] = el;
              }}
              className="relative w-full overflow-hidden rounded-[28px] p-5 sm:p-8 md:p-10 shadow-xl border border-slate-200 flex flex-col will-change-transform bg-white md:[grid-area:1/1/2/2]"
              style={{
                zIndex: i + 1,
                minHeight: "clamp(340px, 52vh, 480px)"
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 ${service.gradient}`} />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-slate-100 pointer-events-none" />

              <div className="relative flex items-start justify-between gap-4 mb-6 sm:mb-7">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex shrink-0 items-center justify-center bg-[#095c65]/10 text-[#095c65] border border-[#095c65]/15">
                    {service.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase">
                      CAPABILITY // {service.num}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:block font-mono text-5xl font-bold text-slate-200 leading-none">
                  {service.num}
                </span>
              </div>

              <p className="relative text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-7 flex-1 max-w-2xl">
                {service.desc}
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {service.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-slate-700 font-semibold min-w-0">
                    <span className="w-5 h-5 rounded-full flex shrink-0 items-center justify-center bg-[#095c65]/10 border border-[#095c65]/15">
                      <Check className="w-3 h-3 text-[#67c7bf]" />
                    </span>
                    <span className="min-w-0 truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      <div
        ref={mobileContainerRef}
        className="block md:hidden relative w-full h-screen px-4 py-6 flex flex-col justify-between items-center"
      >
        {/* Header Badge & Title */}
        <div className="text-center pt-2 mb-2 z-10 max-w-xs shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#095c65]/10 border border-[#67c7bf]/25 text-[#67c7bf] text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67c7bf] animate-pulse" />
            GROWTH SOLUTIONS
          </span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Our Core Capabilities
          </h2>
        </div>

        {/* Card Deck Container */}
        <div className="relative w-full max-w-[340px] h-[380px] mx-auto my-auto flex-1 flex items-center justify-center">
          {SERVICES_DATA.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => {
                mobileCardsRef.current[i] = el;
              }}
              className="absolute inset-x-0 top-2 h-[360px] w-full rounded-2xl p-5 bg-white border border-slate-200 shadow-xl flex flex-col justify-between overflow-hidden will-change-transform"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 ${service.gradient}`} />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#095c65]/10 text-[#095c65] border border-[#095c65]/15 shadow-inner">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#095c65] bg-[#095c65]/10 px-2.5 py-1 rounded-full border border-[#095c65]/20">
                    {i + 1} / {SERVICES_DATA.length}
                  </span>
                </div>

                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  CAPABILITY // {service.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-3">
                  {service.desc}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200 mt-auto">
                {service.features.slice(0, 3).map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-[11px] text-slate-700">
                    <span className="w-4 h-4 rounded-full flex shrink-0 items-center justify-center bg-[#095c65]/10 text-[#67c7bf]">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="w-full max-w-[340px] pt-2 pb-2 flex flex-col items-center gap-2.5 z-10 shrink-0">
          {/* Navigation Controls */}
          <div className="w-full flex items-center justify-between px-2">
            <button
              onClick={() => handleMobileNavigate(Math.max(0, activeMobileIndex - 1))}
              disabled={activeMobileIndex === 0}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {SERVICES_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMobileNavigate(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeMobileIndex
                      ? "w-6 bg-[#67c7bf]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleMobileNavigate(Math.min(SERVICES_DATA.length - 1, activeMobileIndex + 1))}
              disabled={activeMobileIndex === SERVICES_DATA.length - 1}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[10px] text-slate-500 font-mono tracking-wider flex items-center gap-1 animate-pulse">
            <span>Scroll down or use arrows to reveal capabilities</span>
            <span>↓</span>
          </p>
        </div>
      </div>
    </section>
  );
}