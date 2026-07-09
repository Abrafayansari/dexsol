import { ReactNode } from "react";
import { Award, ThumbsUp, Users } from "lucide-react";
import AnimatedTestimonialsDemo from "./animated-testimonials-demo";

interface StatItem {
  number: string;
  label: string;
  icon: ReactNode;
}

export default function Reviews() {
  const stats: StatItem[] = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Award size={24} className="text-brand-green" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <ThumbsUp size={24} className="text-brand-cyan" />,
    },
    {
      number: "50+",
      label: "Dedicated Team Members",
      icon: <Users size={24} className="text-brand-yellow" />,
    },
  ];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-dark text-white relative overflow-hidden">
      
      {/* Decorative vector background overlays */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-brand-green/10 to-transparent -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-radial from-brand-cyan/8 to-transparent translate-x-1/3 translate-y-1/3 pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-4">
            <span>Our Reviews</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Don't just take our word for it. We build strong, collaborative relationships with ambitious businesses around the world to deliver real, measurable digital solutions.
          </p>
        </div>

        {/* Animated Testimonials (shadcn/ui integration) */}
        <div className="w-full relative z-10">
          <AnimatedTestimonialsDemo />
        </div>

        {/* Global Stats Footer Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10">
          {stats.map((stat, sIdx) => (
            <div
              key={sIdx}
              className="text-center flex flex-col items-center group cursor-default"
              id={`stat-item-${sIdx + 1}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="font-display text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-semibold tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
