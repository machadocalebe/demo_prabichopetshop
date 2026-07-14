"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint } from "lucide-react";

const reasons = [
  "A ração perfeita para seu amigo.",
  "A farmácia veterinária mais completa do RJ.",
  "Entrega ultra-rápida (piscou, chegou!).",
  "A areia ideal para o seu gatinho.",
  "Maior variedade de brinquedos e petiscos.",
  "As melhores casinhas e caminhas.",
  "Empatia e excelência no atendimento.",
  "Ué, não eram 7? Temos mais de 1000 motivos para comprar com a gente!"
];

const carouselImages = [
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400&auto=format&fit=crop" // duplicated for smooth loop
];

export function Reasons() {
  const [activeReason, setActiveReason] = useState(0);

  return (
    <section id="motivos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-prabicho-blue mb-4">
            7 Motivos para ser PraBicho
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Por que somos a escolha número 1 dos tutores na hora de cuidar dos seus melhores amigos.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Interactive List (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col gap-3"
          >
            {reasons.map((reason, index) => {
              const isActive = activeReason === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveReason(index)}
                  className={`text-left p-4 md:p-5 rounded-2xl transition-all duration-500 flex items-center gap-4 border-2 ${
                    isActive 
                      ? 'bg-prabicho-yellow/10 border-prabicho-yellow shadow-md transform translate-x-2 md:translate-x-4' 
                      : 'bg-transparent border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 transition-colors duration-500 ${
                    isActive ? 'bg-prabicho-yellow text-prabicho-blue shadow-lg' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index === 7 ? <PawPrint size={20} /> : index + 1}
                  </div>
                  <span className={`text-base md:text-xl font-bold transition-colors duration-500 ${
                    isActive ? 'text-prabicho-blue' : 'text-gray-500'
                  }`}>
                    {reason}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Marquee Carousel (Right Side on Desktop, Bottom on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative overflow-hidden rounded-[2.5rem] bg-offwhite shadow-2xl flex flex-col justify-center min-h-[400px]"
          >
             <div className="absolute inset-0 bg-prabicho-turquoise/5 z-0"></div>
             
             {/* Center display based on active reason (Optional interactive element) */}
             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReason}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white max-w-sm text-center"
                  >
                     <PawPrint className="text-prabicho-turquoise mx-auto mb-3" size={32} />
                     <h3 className="text-2xl font-black text-prabicho-blue">Motivo {activeReason === 7 ? 'Extra' : activeReason + 1}</h3>
                     <p className="text-gray-700 font-medium mt-2">{reasons[activeReason]}</p>
                  </motion.div>
                </AnimatePresence>
             </div>

             {/* Auto-play Marquee */}
             <div className="flex gap-6 py-6 w-[200%] z-10">
               <motion.div
                 animate={{ x: ["0%", "-50%"] }}
                 transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                 className="flex gap-6"
               >
                 {carouselImages.map((src, idx) => (
                   <div key={idx} className="w-64 h-80 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="Pet" className="w-full h-full object-cover" />
                   </div>
                 ))}
                 {/* Duplicate for infinite effect */}
                 {carouselImages.map((src, idx) => (
                   <div key={`dup-${idx}`} className="w-64 h-80 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="Pet" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </motion.div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
