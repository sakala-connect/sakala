import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Training Programs", path: "/training-programs" },
  { name: "Workshops", path: "/workshops" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-2 flex items-center justify-between border border-white/20 shadow-xl bg-white/40 dark:bg-black/40 backdrop-blur-md">
        
        <Link to="/" className="flex items-center group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#4cbbcc] shadow-md bg-white flex items-center justify-center"
          >
            <img 
              src="/logo.jpeg" 
              alt="Sakala Logo" 
              className="w-full h-full object-contain p-1"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu - Refined Font Sizes */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[13px] font-semibold tracking-wider text-foreground/70 hover:text-[#4cbbcc] transition-colors relative group uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4cbbcc] transition-all group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle />
          <button className="bg-[#4cbbcc] text-white px-6 py-2 rounded-full text-[13px] font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-2">
            <Phone size={14} />
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button className="p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 glass rounded-[2rem] p-6 flex flex-col gap-4 shadow-2xl bg-white/95 dark:bg-black/95 border border-white/20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-foreground/90 border-b border-border/10 pb-2 active:text-[#4cbbcc] uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-[#4cbbcc] text-white px-6 py-3 rounded-xl font-bold mt-2 shadow-lg flex items-center justify-center gap-2">
              <Phone size={18} />
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};