"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Alimentos",
    description: "Rações super premium, úmidas e petiscos para todas as raças e idades.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=400&auto=format&fit=crop", // placeholder for 3D food
    color: "bg-prabicho-yellow",
    textColor: "text-prabicho-yellow",
    shadow: "shadow-prabicho-yellow/20"
  },
  {
    title: "Cuidado & Lazer",
    description: "Brinquedos interativos, caminhas confortáveis e produtos de higiene.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=400&auto=format&fit=crop", // placeholder for 3D toy
    color: "bg-prabicho-turquoise",
    textColor: "text-prabicho-turquoise",
    shadow: "shadow-prabicho-turquoise/20"
  },
  {
    title: "Farmácia",
    description: "Medicamentos, vitaminas e antipulgas com o melhor preço da região.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=400&auto=format&fit=crop", // placeholder for 3D medicine
    color: "bg-prabicho-green",
    textColor: "text-prabicho-green",
    shadow: "shadow-prabicho-green/20"
  },
];

export function Categories() {
  return (
    <section id="produtos" className="py-24 bg-gradient-to-b from-offwhite to-white relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-0 w-80 h-80 translate-x-1/4 text-prabicho-turquoise opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-64.3C61.4,-56.3,71.8,-41.8,77.5,-26C83.2,-10.2,84.1,7,78.8,22.1C73.5,37.2,61.9,50.1,48.1,60.5C34.3,71,17.1,79,1.1,77.5C-15,76,-30,65,-43.6,54.2C-57.2,43.3,-69.5,32.7,-76.3,18.8C-83.1,4.8,-84.4,-12.4,-77.6,-26.8C-70.9,-41.1,-56.1,-52.6,-41.7,-60.2C-27.3,-67.7,-13.6,-71.4,1.4,-73.4C16.4,-75.4,32.8,-75.7,47.7,-64.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-prabicho-blue mb-4">
            Tudo o que seu pet precisa
          </h2>
          <p className="text-gray-600 text-lg">
            Navegue por nossas categorias principais e descubra produtos de altíssima qualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl ${category.shadow} border border-white/50 hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className={`w-32 h-32 mx-auto rounded-full bg-white shadow-inner flex items-center justify-center mb-8 relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                <div className={`absolute inset-0 ${category.color} opacity-20`}></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={category.image} alt={category.title} className="w-24 h-24 object-cover rounded-full drop-shadow-xl" />
              </div>
              <h3 className={`text-3xl font-extrabold ${category.textColor} mb-4 text-center`}>
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center font-medium">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
