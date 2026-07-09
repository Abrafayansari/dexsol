import { MouseEvent } from "react";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <a href="#home" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2 text-brand-dark transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <path
                    d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16"
                    stroke="#4ecdc4"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <rect x="28" y="14" width="12" height="12" rx="3" fill="#5cb85c" />
                </svg>
              </div>
              <div className="flex flex-col text-white">
                <span className="font-display text-lg font-extrabold tracking-tight leading-none">
                  DEXSOL
                </span>
                <span className="text-[9px] font-bold text-white/50 tracking-widest uppercase mt-0.5">
                  DIGITAL AGENCY
                </span>
              </div>
            </a>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
              We are a modern, high-performance creative digital agency focused on building bespoke storefronts, brand structures, and digital experiences that turn ideas into meaningful online growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-green hover:border-brand-green hover:text-brand-dark text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-green hover:border-brand-green hover:text-brand-dark text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-green hover:border-brand-green hover:text-brand-dark text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-green hover:border-brand-green hover:text-brand-dark text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1: Company */}
          <div className="lg:col-span-2.5 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Services */}
          <div className="lg:col-span-2.5 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Brand Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-6">
              Resources
            </h4>
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Blog Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 block duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 DEXSOL Solutions. All rights reserved.
          </p>
          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
