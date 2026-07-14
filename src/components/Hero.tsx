"use client";

import { motion } from "framer-motion";
import { Heart, Bone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Organic Blob */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 text-prabicho-yellow opacity-20">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute -top-40 -right-20 w-[800px] h-[800px]">
          <path fill="currentColor" d="M783.5,630.5C722,761,544,817,392,752C240,687,114,499,141.5,353.5C169,208,350,105,516,104C682,103,845,500,783.5,630.5Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-prabicho-blue leading-tight mb-6">
            Tudo para o nosso <span className="text-prabicho-yellow">melhor amigo</span>
            <Heart className="inline-block ml-3 text-prabicho-turquoise animate-pulse" size={48} fill="currentColor" />
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-medium">
            Encontre a maior variedade em alimentos, produtos de cuidado e farmácia veterinária com preços que você vai adorar. Entrega rápida para o seu pet!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos" className="bg-prabicho-yellow text-prabicho-blue px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center">
              Ver Ofertas
            </a>
            <a href="#lojas" className="bg-white text-prabicho-blue border-2 border-prabicho-blue px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all text-center">
              Visite Nossas Lojas
            </a>
          </div>
        </motion.div>

        {/* Image / Graphic Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Blob Image Mask */}
            <div className="absolute inset-0 bg-prabicho-green rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop"
                alt="Cachorro feliz"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-xl text-prabicho-orange border-4 border-offwhite"
            >
              <Bone size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
