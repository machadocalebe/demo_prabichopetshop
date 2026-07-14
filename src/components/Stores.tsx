"use client";

import { motion } from "framer-motion";
import { MapPin, Car, PawPrint } from "lucide-react";

const stores = [
  {
    name: "Vista Alegre",
    address: "Estr. da Água Grande, 640",
    mapQuery: "Estr.+da+Agua+Grande,+640+-+Vista+Alegre,+Rio+de+Janeiro",
  },
  {
    name: "Flamengo",
    address: "R. Marquês de Abrantes, 38",
    mapQuery: "R.+Marques+de+Abrantes,+38+-+Flamengo,+Rio+de+Janeiro",
  },
  {
    name: "Andaraí",
    address: "R. Ferreira Pontes, 586",
    mapQuery: "R.+Ferreira+Pontes,+586+-+Andarai,+Rio+de+Janeiro",
  },
  {
    name: "Ramos",
    address: "R. Euclídes Faria, 21",
    mapQuery: "R.+Euclides+Faria,+21+-+Ramos,+Rio+de+Janeiro",
  },
  {
    name: "Rocha Miranda",
    address: "R. dos Topázios, 55",
    mapQuery: "R.+dos+Topazios,+55+-+Rocha+Miranda,+Rio+de+Janeiro",
  },
  {
    name: "Ilha do Governador",
    address: "R. Moravia, 95",
    mapQuery: "R.+Moravia,+95+-+Ilha+do+Governador,+Rio+de+Janeiro",
  }
];

export function Stores() {
  return (
    <section id="lojas" className="py-24 bg-offwhite relative overflow-hidden">
      {/* Decorative SVG Blob */}
      <div className="absolute -bottom-40 right-0 w-96 h-96 text-prabicho-yellow opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M49.6,-62.4C63.2,-48.5,72.4,-30.3,75.4,-11.4C78.4,7.5,75.3,27,65,42.4C54.7,57.7,37.3,68.8,18.8,73C0.3,77.3,-19.2,74.7,-37.2,65.8C-55.2,56.8,-71.7,41.4,-79.1,22.1C-86.4,2.8,-84.6,-20.3,-74.2,-37.4C-63.9,-54.6,-45,-65.8,-27.1,-70C-9.3,-74.3,7.6,-71.5,24.1,-66.3Z" transform="translate(100 100)" />
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
            Visite Nossas Lojas
          </h2>
          <p className="text-gray-600 text-lg">
            Venha nos conhecer! Ambientes preparados para receber você e seu melhor amigo com todo o conforto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-white flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <iframe 
                  src={`https://www.google.com/maps?q=${store.mapQuery}&output=embed`} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-prabicho-blue flex items-center gap-2 mb-3">
                  {store.name}
                </h3>
                <p className="text-gray-600 font-medium mb-6 flex items-start gap-2">
                  <MapPin className="text-prabicho-yellow mt-1 flex-shrink-0" size={20} />
                  {store.address}
                </p>
                
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <div className="bg-prabicho-yellow/10 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                    <Car className="text-prabicho-orange" size={20} />
                    <span className="text-[11px] font-bold text-prabicho-orange">ESTACIONAMENTO</span>
                  </div>
                  <div className="bg-prabicho-turquoise/10 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                    <PawPrint className="text-prabicho-turquoise" size={20} />
                    <span className="text-[11px] font-bold text-prabicho-turquoise">PET FRIENDLY</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
