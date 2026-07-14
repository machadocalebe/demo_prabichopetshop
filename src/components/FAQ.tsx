"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como peço pelo WhatsApp?",
    answer: "É muito simples! Basta clicar no botão 'Pedir pelo WhatsApp' no topo do site ou no rodapé. Você será redirecionado para a nossa central de atendimento onde nossos especialistas farão seu pedido rapidamente."
  },
  {
    question: "As lojas físicas cobrem o preço do site?",
    answer: "Sim! Trabalhamos com uma política de preço único. As ofertas que você encontra em nossa loja virtual ou divulgadas no Instagram são válidas em todas as nossas 6 filiais."
  },
  {
    question: "Qual o horário de funcionamento das filiais?",
    answer: "Nossas lojas abrem de Segunda a Sábado das 08:30 às 19:30, e aos Domingos e Feriados das 09:00 às 14:00. O serviço de delivery acompanha o horário da loja!"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-prabicho-turquoise/10 text-prabicho-turquoise rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-prabicho-blue mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-500 text-lg">
            Tudo o que você precisa saber para comprar com tranquilidade.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-prabicho-yellow shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-prabicho-blue' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-prabicho-yellow' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
