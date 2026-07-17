import { Search, Sparkles, Layers3, ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    title: "Discover",
    description: "We learn the business, the audience, the goals, and the pressure points before recommending anything.",
    icon: Search,
  },
  {
    title: "Strategize",
    description: "We shape a tailored digital growth plan around what will actually move the business forward.",
    icon: Sparkles,
  },
  {
    title: "Build",
    description: "We execute with the right mix of branding, development, software, content, design, and marketing.",
    icon: Layers3,
  },
  {
    title: "Grow",
    description: "We optimize, support, and scale the system over time so the results keep compounding.",
    icon: ArrowUpRight,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-bg to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-widest mb-4">
            <span>PROCESS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-[1.1] mb-4">
            A simple process built around business growth.
          </h2>
          <p className="text-brand-text-light text-base md:text-lg leading-relaxed max-w-xl">
            We keep the work focused. Understand the business. Define the plan. Build the right system. Keep improving it until the results are where they need to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group relative rounded-[28px] border border-black/5 bg-brand-bg/60 p-6 sm:p-7 shadow-[0_18px_55px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-brand-green/20 hover:bg-white hover:shadow-[0_24px_65px_rgba(17,24,39,0.10)]"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-brand-dark transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-brand-dark">
                    <Icon size={22} className="stroke-[2.2]" />
                  </div>
                  <span className="font-display text-5xl font-bold text-brand-dark/10 leading-none transition-colors duration-300 group-hover:text-brand-green/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-brand-dark mb-3 transition-colors duration-300 group-hover:text-brand-green">
                  {step.title}
                </h3>
                <p className="text-brand-text-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}