import { useState } from "react";
import { ExternalLink, Folder, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Websites" | "UI/UX" | "Shopify" | "Branding";
  client: string;
  image: string;
  desc: string;
  tags: string[];
  metrics: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Websites" | "UI/UX" | "Shopify" | "Branding">("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "LuxeWear E-Commerce",
      category: "Shopify",
      client: "LuxeWear Premium Ltd.",
      image: "/src/assets/images/luxewear_portfolio_1783536739767.jpg",
      desc: "Custom Shopify 2.0 storefront with seamless headless architecture, high-performance checkout optimizations, and editorial aesthetic.",
      tags: ["Shopify Development", "UX/UX Design", "Branding Strategy"],
      metrics: "+148% Conversion Rate Boost",
    },
    {
      id: 2,
      title: "NovaPay SaaS Dashboard",
      category: "UI/UX",
      client: "NovaPay Financial Inc.",
      image: "/src/assets/images/novapay_portfolio_1783536755418.jpg",
      desc: "Minimalist financial analytics platform showcasing complex transactional data through clean, highly interactive dark-theme charts and micro-interactions.",
      tags: ["UI/UX Design", "SaaS Interface", "Data Visualizer"],
      metrics: "99.8% User Satisfaction Rating",
    },
    {
      id: 3,
      title: "Aura Skincare Storefront",
      category: "Websites",
      client: "Aura Organics Co.",
      image: "/src/assets/images/aura_skincare_portfolio_1783536774349.jpg",
      desc: "Cinematic custom skincare portal using elegant typography, fluid transitions, and strategic conversion loops to create an immersive digital shopping experience.",
      tags: ["Custom Web Dev", "Creative Branding", "Performance Audit"],
      metrics: "3.2x Mobile Revenue Increase",
    },
    {
      id: 4,
      title: "Velo Mobility Platform",
      category: "Branding",
      client: "Velo Electric Bikes",
      image: "/src/assets/images/velo_mobility_portfolio_1783536788453.jpg",
      desc: "Comprehensive digital brand strategy and highly performant product landing page for next-generation electric urban micro-mobility subscriptions.",
      tags: ["Brand Identity", "Motion Design", "Custom Frontend"],
      metrics: "250K+ Monthly Active Riders",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-brand-bg-alt/40 border-y border-brand-bg-alt/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider mb-4">
              <Folder size={14} className="stroke-[2.5]" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark">
              Our Creative <span className="text-brand-green">Portfolio</span>
            </h2>
            <p className="mt-4 text-brand-text-light max-w-lg text-sm md:text-base leading-relaxed">
              We design and build custom websites, e-commerce storefronts, and digital products that combine strategy, modern technology, and elegant performance.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 self-start md:self-end md:flex-wrap no-scrollbar max-w-full">
            {(["All", "Websites", "UI/UX", "Shopify", "Branding"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  activeFilter === filter
                    ? "bg-brand-dark text-white border-brand-dark shadow-md scale-102"
                    : "bg-white text-brand-text-light border-gray-200 hover:border-brand-green/40 hover:bg-brand-bg-alt"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100/80 shadow-sm transition-all duration-500 hover:shadow-xl md:hover:-translate-y-2"
              id={`portfolio-item-${project.id}`}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-brand-bg-alt">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 transition-all duration-400 flex flex-col justify-end p-6 sm:p-8 md:group-hover:opacity-100">
                  <div className="transform translate-y-4 transition-transform duration-500 md:group-hover:translate-y-0">
                    <span className="text-brand-yellow font-display text-sm font-semibold tracking-wider uppercase mb-1 block">
                      {project.category} Case Study
                    </span>
                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-2">
                      {project.client}
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm line-clamp-2 leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>

                {/* Corner Category Badge */}
                <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Content details under image */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow justify-between border-t border-gray-50">
                <div>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-brand-dark tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-brand-text-light text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Showcase tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-brand-bg text-brand-text-light font-medium text-xs border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conversion metric highlight */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-brand-green">
                    <CheckCircle2 size={16} className="fill-brand-green/10" />
                    <span className="text-xs md:text-sm font-bold tracking-wide">
                      {project.metrics}
                    </span>
                  </div>
                  <button className="text-xs font-bold text-brand-dark uppercase tracking-wider flex items-center gap-1 hover:text-brand-green transition-colors cursor-pointer self-start sm:self-auto">
                    <span>View Live</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Value Statement Banner */}
        <div className="mt-14 md:mt-16 bg-brand-dark rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              We Don't Just Build Templates — We Build Results
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Every single project we deliver at <strong className="text-brand-green font-semibold">Dexsol</strong> is custom-tailored with strict performance optimization, dynamic search indexing, robust mobile conversions, and fluid custom aesthetics.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 self-start md:self-center px-6 sm:px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-brand-dark font-bold rounded-xl transition-all duration-300 hover:scale-103 shadow-lg flex items-center gap-2 cursor-pointer text-sm"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
