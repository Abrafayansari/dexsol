import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-brand-bg/90 backdrop-blur-md shadow-md border-b border-brand-bg-alt/40 py-4"
            : "bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-brand-dark flex items-center justify-center p-2 text-brand-cyan transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              <circle cx="24" cy="24" r="20" fill="#0a0a0a" />
              <path
                d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16"
                stroke="#4ecdc4"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <rect x="28" y="14" width="12" height="12" rx="3" fill="#5cb85c" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-xl font-extrabold text-brand-dark tracking-tight leading-none">
              DEXSOL
            </span>
            <span className="text-[9px] md:text-[10px] font-bold text-brand-text-muted tracking-widest uppercase mt-0.5">
              DIGITAL AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1.5 list-none">
          <li>
            <a
              href="#home"
              className="text-brand-dark hover:text-brand-green font-semibold text-sm px-4 py-2 rounded-lg hover:bg-brand-bg-alt/50 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-brand-dark hover:text-brand-green font-semibold text-sm px-4 py-2 rounded-lg hover:bg-brand-bg-alt/50 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-brand-dark hover:text-brand-green font-semibold text-sm px-4 py-2 rounded-lg hover:bg-brand-bg-alt/50 transition-all duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-brand-dark hover:text-brand-green font-semibold text-sm px-4 py-2 rounded-lg hover:bg-brand-bg-alt/50 transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-brand-green hover:text-brand-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer"
          >
            <MessageSquare size={16} />
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-dark/10 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-45 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-20 right-6 left-6 bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              <li>
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-brand-dark font-bold py-3 px-4 rounded-xl hover:bg-brand-bg-alt/50 transition-colors"
                >
                  <span>Home</span>
                  <ArrowUpRight size={16} className="text-gray-300" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-brand-dark font-bold py-3 px-4 rounded-xl hover:bg-brand-bg-alt/50 transition-colors"
                >
                  <span>About</span>
                  <ArrowUpRight size={16} className="text-gray-300" />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-brand-dark font-bold py-3 px-4 rounded-xl hover:bg-brand-bg-alt/50 transition-colors"
                >
                  <span>Services</span>
                  <ArrowUpRight size={16} className="text-gray-300" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-brand-dark font-bold py-3 px-4 rounded-xl hover:bg-brand-bg-alt/50 transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight size={16} className="text-gray-300" />
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-brand-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-brand-dark transition-colors shadow-sm"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
