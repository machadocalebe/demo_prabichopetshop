"use client";

import { useState } from "react";
import Link from "next/link";
import { PawPrint, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#produtos", label: "Produtos" },
    { href: "#motivos", label: "Por que PraBicho?" },
    { href: "#lojas", label: "Lojas" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-offwhite/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-prabicho-yellow rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-md">
            <PawPrint size={24} className="md:w-[28px] md:h-[28px]" />
          </div>
          <div>
            <span className="font-extrabold text-xl md:text-2xl text-prabicho-blue block leading-none">
              PraBicho
            </span>
            <span className="text-[9px] md:text-[10px] font-bold text-gray-500 tracking-[0.2em] block mt-1">
              PETSHOP
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-8 font-bold text-gray-500 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-prabicho-turquoise transition-colors py-2">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5521982230009" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-prabicho-turquoise text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold shadow-lg shadow-prabicho-turquoise/30 hover:bg-prabicho-blue hover:shadow-prabicho-blue/30 transition-all transform hover:-translate-y-1 flex items-center gap-2 text-sm md:text-base"
          >
            <MessageCircle size={18} className="md:w-[20px] md:h-[20px]" />
            <span className="hidden sm:inline">Pedir pelo WhatsApp</span>
            <span className="sm:hidden">Pedir</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-prabicho-blue hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4 font-bold text-gray-600 text-lg">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-prabicho-turquoise transition-colors p-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
