import { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles, TrendingUp, Check } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Parallax / card tilt interaction
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(card, {
        transform: `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px) scale(1.02)`,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)",
        duration: 0.6,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden bg-gradient-to-b from-brand-bg-alt/20 via-brand-bg to-brand-bg/40"
    >
      {/* Decorative Background Curved Shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 opacity-30 select-none pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
          <path
            d="M50,150 Q150,50 250,150 T250,250"
            stroke="#888"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
          <circle cx="220" cy="80" r="40" stroke="#888" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 w-64 h-64 opacity-25 select-none pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <path d="M20,100 Q100,20 180,100" stroke="#888" strokeWidth="1.5" strokeDasharray="8 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-gray-150/80 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-brand-text-light uppercase tracking-wider">
              We are a creative digital agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tight leading-[1.08] mb-6">
            <span className="block">Digital Products</span>
            <span className="relative inline-block mt-1">
              Engineered for
              <span className="relative z-10 text-brand-green ml-3">Growth</span>
              <span className="absolute left-0 bottom-1.5 md:bottom-2.5 w-full h-4 bg-brand-yellow -z-10 rounded-sm"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-brand-text-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
            Dexsol helps ambitious brands build exceptional digital experiences. We craft bespoke custom website development, UI/UX designs, and conversion-focused Shopify storefronts that turn ideas into meaningful growth.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4.5 bg-brand-dark text-white rounded-xl text-base font-bold transition-all duration-300 hover:bg-brand-green hover:text-brand-dark hover:scale-103 hover:shadow-lg group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4.5 bg-brand-yellow hover:bg-brand-yellow/95 text-brand-dark rounded-full text-base font-bold transition-all duration-300 hover:scale-103 hover:shadow-md cursor-pointer"
            >
              <Sparkles size={16} className="text-brand-dark fill-brand-dark/10" />
              <span>Our Services</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Bento Collage */}
        <div className="lg:col-span-5 relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
          
          {/* Main Person Circle */}
          <div className="absolute right-4 bottom-12 w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-brand-cyan to-[#3dbdb5] shadow-xl overflow-hidden animate-floating">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop&crop=face"
              alt="Dexsol Representative"
              className="w-full h-full object-cover object-center translate-y-4"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Golden Corner Block Accent */}
          <div className="absolute right-0 bottom-4 w-40 h-40 bg-brand-yellow rounded-3xl -z-10 shadow-sm"></div>

          {/* The Weekly Status Card */}
          <div
            ref={cardRef}
            className="absolute left-0 top-12 w-64 md:w-72 bg-gradient-to-br from-brand-green to-[#4a9a4a] text-white rounded-3xl p-6 shadow-xl z-20 cursor-grab active:cursor-grabbing border border-brand-green/20"
            style={{ transform: "rotate(-3deg)" }}
          >
            <span className="absolute top-4 right-6 text-5xl md:text-6xl font-extrabold opacity-15 select-none font-display leading-none">
              01
            </span>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp size={24} className="stroke-[2.5]" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-1">
              Active Growth
            </h3>
            <p className="text-white/85 text-xs leading-relaxed mb-4">
              Real-time analytics monitoring & direct search indexing.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-yellow text-brand-dark rounded-full text-xs font-black shadow-sm">
              <Check size={12} className="stroke-[3]" />
              <span>30K+ LEADS</span>
            </div>
          </div>

          {/* Floating Avatar Stack */}
          <div className="absolute top-10 right-20 flex items-center gap-1 z-20 bg-white/80 backdrop-blur-md border border-gray-150 px-4 py-2 rounded-2xl shadow-md">
            <div className="flex -space-x-3.5">
              <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-brand-green">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="User" referrerPolicy="no-referrer" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-brand-cyan">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="User" referrerPolicy="no-referrer" />
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-brand-yellow">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="User" referrerPolicy="no-referrer" />
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-black text-brand-dark tracking-wide ml-1">
              +120 clients
            </span>
          </div>

          {/* Rotating Circular Seal Badge */}
          <div className="absolute left-10 md:left-20 bottom-12 w-24 h-24 md:w-28 md:h-28 z-20">
            <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center relative animate-spin-slow shadow-lg">
              <svg className="absolute w-full h-full p-2.5" viewBox="0 0 100 100">
                <defs>
                  <path id="sealCirclePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                </defs>
                <text fill="white" fontSize="7.8" fontWeight="bold" letterSpacing="3.5">
                  <textPath href="#sealCirclePath">
                    AGENCY • DEXSOL • CREATIVE • PERFORMANCE •
                  </textPath>
                </text>
              </svg>
              <span className="text-white text-xl font-bold">↓</span>
            </div>
          </div>

          {/* Curved SVG arrow pointer */}
          <div className="absolute bottom-16 right-12 z-20 pointer-events-none opacity-80 md:block hidden animate-bounce-slow">
            <svg viewBox="0 0 60 60" fill="none" className="w-14 h-14">
              <path
                d="M10 50 Q30 10 50 30"
                stroke="#0a0a0a"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M45 25l5 5-5 5"
                stroke="#0a0a0a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-80 pointer-events-none select-none md:flex hidden">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">
          Scroll Down
        </span>
        <div className="w-[1px] h-10 bg-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-dark animate-scroll-line"></div>
        </div>
      </div>

    </section>
  );
}
