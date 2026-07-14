"use client";

import { motion } from "framer-motion";
import { Timer, Tag } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-prabicho-orange to-prabicho-yellow py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-inner">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute w-32 h-32 rounded-full bg-white blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-40 h-40 rounded-full bg-white blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-6"
      >
        <div className="flex items-center gap-6">
          <div className="hidden md:flex bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-lg">
            <Timer className="text-white drop-shadow-md" size={40} />
          </div>
          <div>
            <div className="inline-block bg-white text-prabicho-orange text-xs font-black uppercase tracking-wider py-1 px-3 rounded-full mb-2 shadow-sm">
              Tempo Limitado
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
              Ofertas Comemorativas da Semana!
            </h2>
            <p className="text-white/90 font-medium text-lg mt-1">
              Descontos de até 30% em rações selecionadas exclusivamente nas lojas físicas.
            </p>
          </div>
        </div>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#lojas" 
          className="bg-prabicho-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-2 flex-shrink-0"
        >
          <Tag size={20} />
          Garantir Desconto
        </motion.a>
      </motion.div>
    </section>
  );
}
