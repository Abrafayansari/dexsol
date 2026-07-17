import { ArrowUpRight, Zap, Lightbulb, Target, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blur Background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none -ml-40"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none -mr-48"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side (Now Right): Visuals Collage */}
        <div className="lg:col-span-6 relative h-[500px] md:h-[600px] w-full flex items-center justify-center lg:order-last">
          
          {/* Back decorative rotated colored shape */}
          <div className="absolute top-8 left-12 w-64 h-64 bg-brand-cyan/20 rounded-3xl -rotate-12 shadow-sm -z-10 animate-floating-slow"></div>

          {/* Main Team Working Photo */}
          <div className="absolute left-10 top-16 w-80 h-[420px] md:w-96 md:h-[480px] rounded-[36px] overflow-hidden shadow-lg z-10 border-4 border-white bg-brand-bg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop&q=80"
              alt="DEXSOL Team Working Collaboratively"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Overlapping Offset Office Accent Photo */}
          <div className="absolute right-6 bottom-10 w-52 h-[260px] md:w-60 md:h-[300px] rounded-3xl overflow-hidden shadow-xl z-25 border-6 border-white bg-brand-bg hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=450&h=600&fit=crop&q=80"
              alt="DEXSOL Modern Working Space"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating 'Years of Experience' Badge Counter */}
          <div className="absolute left-2 bottom-12 bg-white px-6 py-5 rounded-2xl shadow-xl border border-gray-100 z-30 flex flex-col items-start hover:scale-105 transition-transform">
            <span className="font-display text-4xl md:text-5xl font-black text-brand-cyan leading-none">
              12+
            </span>
            <span className="text-[10px] md:text-xs font-bold text-brand-cyan/70 tracking-wider uppercase mt-1.5">
              Years Agency Exp
            </span>
          </div>

        </div>

        {/* Right Side (Now Left): Rich Brand Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left lg:order-first">
          
          {/* Label Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-extrabold uppercase tracking-widest mb-6">
            <Heart size={12} className="stroke-[2.5]" />
            <span>ABOUT DEXSOL</span>
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-[1.15] mb-6">
            We build digital ecosystems that <span className="text-brand-green">create growth</span>
          </h2>

          {/* Description */}
          <p className="text-brand-text-light text-base leading-relaxed mb-4">
            <strong>Dexsol</strong> is a digital growth agency that helps businesses strengthen their brand, sharpen their online presence, and build the systems they need to grow with confidence.
          </p>

          <p className="text-brand-text-light text-base leading-relaxed mb-8">
            We do not approach work as isolated projects. We start with business goals, customer needs, and growth targets, then combine the right mix of strategy, branding, software, design, content, websites, ecommerce, and marketing to move the business forward.
          </p>

          {/* Grid of Key Strengths / Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
            {/* 1. Fast Delivery */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                <Zap size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-1">Business-First Thinking</h4>
                <p className="text-brand-text-muted text-xs leading-relaxed">
                  Every decision is tied back to growth, not just aesthetics or output.
                </p>
              </div>
            </div>

            {/* 2. Creative Ideas */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                <Lightbulb size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-1">Tailored Growth Strategy</h4>
                <p className="text-brand-text-muted text-xs leading-relaxed">
                  No templates, no generic playbooks. Each plan is built around the business and its market.
                </p>
              </div>
            </div>

            {/* 3. Results Driven */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                <Target size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-1">Long-Term Partnership</h4>
                <p className="text-brand-text-muted text-xs leading-relaxed">
                  We stay involved after launch to improve performance, adapt, and scale with the business.
                </p>
              </div>
            </div>

            {/* 4. 24/7 Support */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-cyan shrink-0">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-1">Transparent Communication</h4>
                <p className="text-brand-text-muted text-xs leading-relaxed">
                  Clear updates, honest feedback, and no surprises from kickoff to scale-up.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-brand-cyan hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-green text-white rounded-2xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(5,91,101,0.25)] hover:shadow-[0_8px_30px_rgba(167,243,208,0.4)] cursor-pointer group"
          >
            <span>Let's Build for Growth</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

    </section>
  );
}
