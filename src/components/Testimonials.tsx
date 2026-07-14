"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Soraia Barbedo",
    text: "Super recomendo, sou cliente, e os profissionais muito simpáticos e atenciosos.",
    initial: "S",
    color: "bg-blue-500",
    time: "7 meses atrás"
  },
  {
    name: "Alexandra Scott",
    text: "Atendimento bom e rápido, a ração estava bem fresquinha.",
    initial: "A",
    color: "bg-green-500",
    time: "4 meses atrás"
  },
  {
    name: "Jaqueline Fabiana",
    text: "A melhor atendente do caixa Pra Bicho Pet Shop Vista Alegre. Alana Celestino atende super bem. E no atendimento no WhatsApp Julinha Atende muito bem Recomendo estão todas de parabéns ☺️",
    initial: "J",
    color: "bg-purple-500",
    time: "8 meses atrás"
  },
  {
    name: "Alana Celestino",
    text: "O melhor atendimento e produtos de qualidade 😍",
    initial: "A",
    color: "bg-pink-500",
    time: "4 meses atrás"
  },
  {
    name: "AMANDA LINS",
    text: "Nunca fui a loja, sempre efetuo as compras pelo WhatsApp. Atendimento excelente! Toda vez que preciso de alguma explicação sou muito bem atendida.",
    initial: "A",
    color: "bg-indigo-500",
    time: "um ano atrás"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-1 text-prabicho-yellow">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <span className="font-bold text-gray-700 ml-2 text-lg">4.9</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-prabicho-blue">
              503 tutores satisfeitos
            </h2>
          </div>
        </motion.div>

        {/* CSS Columns layout for masonry-like effect or just grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-offwhite p-8 rounded-[2rem] shadow-lg shadow-prabicho-blue/5 border border-white/50 flex flex-col break-inside-avoid relative hover:-translate-y-1 transition-transform"
            >
              <div className="flex gap-1 text-prabicho-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-black text-xl shadow-inner`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-prabicho-blue">{review.name}</h4>
                  <span className="text-sm text-gray-500 font-medium">{review.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
