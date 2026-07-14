const capsuleClass = "shrink-0 overflow-hidden rounded-[999px] border border-white/70 shadow-[0_10px_25px_rgba(20,31,29,0.12)]";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white px-5 pb-12 pt-28 sm:px-8 md:px-12 md:pt-36 lg:px-[clamp(3rem,5vw,5rem)]"
    >
      {/* The subtle contour map follows the reference and gives the flight path a calm surface to travel over. */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#d9dfdc" strokeWidth="1.15">
          <path d="M-50 32C170 8 254 76 435 40s289 54 469 3 258 76 410 7 193 8 190 8" />
          <path d="M-50 39C169 15 253 83 435 47s290 53 470 2 258 77 410 8 193 8 190 8" />
          <path d="M-35 70C130 135 214 194 367 126s213-29 357 4 260-15 364-83 224 24 343 8" />
          <path d="M-25 83C135 148 218 207 371 139s214-29 358 4 259-15 364-83 224 24 343 8" />
          <path d="M-45 160C141 238 241 205 369 157s269 36 388 2 208-93 342-42 243-2 371-75" />
          <path d="M-42 174C144 252 244 218 373 170s267 36 388 2 208-93 341-42 243-2 371-75" />
          <path d="M-55 254C108 218 206 296 362 253s285 31 419-4 226 35 365 17 213-72 356-16" />
          <path d="M-52 268C111 232 209 309 365 266s285 31 419-4 226 35 365 17 213-72 356-16" />
          <path d="M-60 356C102 311 238 376 401 332s291 47 410 5 207-33 341 12 251-36 354-6" />
          <path d="M-58 370C105 325 240 390 404 346s291 47 410 5 207-33 341 12 251-36 354-6" />
          <path d="M-60 504C91 470 224 524 384 484s259 54 418 0 216-23 345 14 250-32 369-2" />
          <path d="M-58 518C94 484 227 538 387 498s259 54 418 0 216-23 345 14 250-32 369-2" />
          <path d="M-50 684C122 646 247 715 397 664s263 31 404-8 223 39 347-2 228-59 361-6" />
          <path d="M-48 698C124 660 250 729 400 678s263 31 404-8 223 39 347-2 228-59 361-6" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1340px] flex-col justify-center">
        <h1 className="font-display font-bold leading-[0.86] tracking-[-0.07em] text-[#111]">
          <span className="flex flex-wrap items-center gap-x-[clamp(0.8rem,1.8vw,1.75rem)] gap-y-3 text-[clamp(3.55rem,7.15vw,7.1rem)]">
            <span className={`${capsuleClass} h-[0.7em] w-[1.12em]`}>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=520&q=90"
                alt="Sea turtle swimming underwater"
                className="h-full w-full object-cover"
              />
            </span>
            <span>Creative Agency</span>
          </span>

          <span className="mt-[clamp(1rem,2.6vw,2.4rem)] flex flex-wrap items-center gap-x-[clamp(0.8rem,1.8vw,1.75rem)] gap-y-3 text-[clamp(3.55rem,7.15vw,7.1rem)]">
            <span className="font-medium">for the</span>
            <span className={`${capsuleClass} h-[0.7em] w-[5.1em]`}>
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1100&q=90"
                alt="Diver moving through blue water"
                className="h-full w-full object-cover object-center"
              />
            </span>
          </span>

          <span className="relative mt-[clamp(1rem,2.6vw,2.4rem)] flex flex-wrap items-center gap-x-[clamp(0.8rem,1.8vw,1.75rem)] gap-y-3 text-[clamp(3.55rem,7.15vw,7.1rem)]">
            <span className={`${capsuleClass} h-[0.7em] w-[4.1em]`}>
              <img
                src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1100&q=90"
                alt="Colorful coral reef"
                className="h-full w-full object-cover"
              />
            </span>
            <span>Ocean</span>

            <span className="absolute left-[clamp(4.5rem,8vw,8rem)] top-[0.45em] flex h-[0.78em] w-[0.78em] items-center justify-center rounded-full border-[3px] border-white bg-[#141817] font-sans text-[0.11em] font-semibold uppercase tracking-[0.08em] text-white shadow-lg">
              <span className="rotate-[-18deg]">Our story ↗</span>
            </span>
          </span>
        </h1>

        <p className="mt-9 max-w-sm text-sm leading-relaxed text-brand-text-light md:mt-12 md:text-base">
          We create brands, websites, and campaigns with the clarity to stand out and the craft to carry businesses forward.
        </p>
      </div>
    </section>
  );
}
