import { useRef, useEffect } from "react";

/* ── Parallax layer data ────────────────────────────────────────────── */
const PATH_GROUPS = [
  // Layer 0 (deepest — fastest parallax)
  [
    "M-50 32C170 8 254 76 435 40s289 54 469 3 258 76 410 7 193 8 190 8",
    "M-50 39C169 15 253 83 435 47s290 53 470 2 258 77 410 8 193 8 190 8",
  ],
  // Layer 1
  [
    "M-35 70C130 135 214 194 367 126s213-29 357 4 260-15 364-83 224 24 343 8",
    "M-25 83C135 148 218 207 371 139s214-29 358 4 259-15 364-83 224 24 343 8",
  ],
  // Layer 2
  [
    "M-45 160C141 238 241 205 369 157s269 36 388 2 208-93 342-42 243-2 371-75",
    "M-42 174C144 252 244 218 373 170s267 36 388 2 208-93 341-42 243-2 371-75",
  ],
  // Layer 3
  [
    "M-55 254C108 218 206 296 362 253s285 31 419-4 226 35 365 17 213-72 356-16",
    "M-52 268C111 232 209 309 365 266s285 31 419-4 226 35 365 17 213-72 356-16",
  ],
  // Layer 4
  [
    "M-60 356C102 311 238 376 401 332s291 47 410 5 207-33 341 12 251-36 354-6",
    "M-58 370C105 325 240 390 404 346s291 47 410 5 207-33 341 12 251-36 354-6",
  ],
  // Layer 5 (closest — slowest parallax)
  [
    "M-60 504C91 470 224 524 384 484s259 54 418 0 216-23 345 14 250-32 369-2",
    "M-58 518C94 484 227 538 387 498s259 54 418 0 216-23 345 14 250-32 369-2",
    "M-50 684C122 646 247 715 397 664s263 31 404-8 223 39 347-2 228-59 361-6",
    "M-48 698C124 660 250 729 400 678s263 31 404-8 223 39 347-2 228-59 361-6",
  ],
];

/* Speed multiplier per layer (higher = faster) */
const SPEEDS = [0.55, 0.40, 0.30, 0.20, 0.10, 0.035];

const capsuleClass =
  "shrink-0 overflow-hidden rounded-[999px] border border-white/70 shadow-[0_10px_25px_rgba(20,31,29,0.12)]";

export default function Hero() {
  const layerRefs = useRef<(SVGGElement | null)[]>([]);

  /* ── Scroll-driven parallax ────────────────────────────────────────── */
  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        layerRefs.current.forEach((g, i) => {
          if (g) g.style.transform = `translateY(${(y * SPEEDS[i]).toFixed(1)}px)`;
        });
        rafId = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  /* ── Shared setter for ref array ───────────────────────────────────── */
  const setLayerRef = (i: number) => (el: SVGGElement | null) => {
    layerRefs.current[i] = el;
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white px-5 pb-14 pt-20 sm:px-8 sm:pt-24 md:px-12 md:pt-36 lg:px-[clamp(3rem,5vw,5rem)]"
    >
      {/* ── Parallax contour-map layers ─────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          {PATH_GROUPS.map((paths, i) => (
            <g
              key={i}
              ref={setLayerRef(i)}
              className="parallax-layer"
              stroke="#d9dfdc"
              strokeWidth="1.15"
              style={{ willChange: "transform" }}
            >
              {paths.map((d, j) => (
                <path key={j} d={d} />
              ))}
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1340px] flex-col justify-center">
        <div className="md:hidden max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green backdrop-blur">
            Digital Growth Agency
          </div>
          <h1 className="mt-5 text-[clamp(2.7rem,12vw,4.4rem)] font-display font-bold leading-[0.92] tracking-[-0.06em] text-brand-dark">
            Helping businesses grow digitally.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-text-light">
            Strategy, branding, websites, ecommerce, content, and marketing built around one goal: stronger business growth.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-green hover:text-brand-dark"
            >
              Start Your Growth Journey
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:border-brand-green/30 hover:text-brand-green"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        <h1 className="hidden font-display font-bold leading-[0.86] tracking-[-0.07em] text-brand-dark md:block">
          <span className="flex flex-wrap items-center gap-x-[clamp(0.8rem,1.8vw,1.75rem)] gap-y-3 text-[clamp(3.55rem,7.15vw,7.1rem)]">
            <span className={`${capsuleClass} h-[0.7em] w-[1.12em]`}>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=520&q=90"
                alt="Sea turtle swimming underwater"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-brand-green">Digital Growth</span>
          </span>

          <span className="mt-[clamp(1rem,2.6vw,2.4rem)] flex flex-wrap items-center gap-x-[clamp(0.8rem,1.8vw,1.75rem)] gap-y-3 text-[clamp(3.55rem,7.15vw,7.1rem)]">
            <span className="font-medium">built for</span>
            <span className={`${capsuleClass} h-[0.7em] w-[5.1em]`}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=90"
                alt="Digital business growth"
                className="h-full w-full object-cover object-center"
              />
            </span>
          </span>

          <span className="relative mt-[clamp(1rem,2.6vw,2.4rem)] flex flex-wrap items-center gap-x-[clamp(0.8rem,1.8vw,1.75rem)] gap-y-3 text-[clamp(3.55rem,7.15vw,7.1rem)]">
            <span className={`${capsuleClass} h-[0.7em] w-[4.1em]`}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90"
                alt="Data and analytics"
                className="h-full w-full object-cover"
              />
            </span>
            <span>Businesses</span>

            <span className="absolute left-[clamp(4.5rem,8vw,8rem)] top-[0.45em] flex h-[0.78em] w-[0.78em] items-center justify-center rounded-full border-[3px] border-white bg-brand-cyan font-sans text-[0.11em] font-semibold uppercase tracking-[0.08em] text-white shadow-lg shadow-brand-cyan/30 hover:bg-brand-green hover:text-brand-dark transition-colors duration-300">
              <span className="rotate-[-18deg]">See Our Work ↗</span>
            </span>

            {/* Added soft glowing abstract elements requested by the prompt */}
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[150%] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[120%] rounded-full bg-brand-green/10 blur-[100px] pointer-events-none -z-10" />
          </span>
        </h1>

        <p className="hidden max-w-sm text-sm leading-relaxed text-brand-text-light md:mt-12 md:block md:text-base">
          We combine strategy, design, development, and marketing to build digital systems that drive real business growth.
        </p>
      </div>
    </section>
  );
}
