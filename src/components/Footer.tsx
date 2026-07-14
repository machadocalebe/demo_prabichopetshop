import { PawPrint, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-prabicho-blue text-white pt-16 pb-8 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-prabicho-yellow rounded-full flex items-center justify-center text-white">
                <PawPrint size={24} />
              </div>
              <span className="font-extrabold text-3xl tracking-tight">PraBicho</span>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              Amor e cuidado em cada produto para o seu melhor amigo.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/prabichopetshop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-prabicho-yellow transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">@prabichopetshop</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-prabicho-yellow transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-prabicho-yellow">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#produtos" className="text-blue-100 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#lojas" className="text-blue-100 hover:text-white transition-colors">Nossas Lojas</a></li>
              <li><a href="https://wa.me/" className="text-blue-100 hover:text-white transition-colors">Pedir Delivery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-prabicho-yellow">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-blue-100">
                <Phone size={20} className="text-prabicho-turquoise" />
                <span>(21) 2584-1999</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Phone size={20} className="text-prabicho-turquoise" />
                <span>WhatsApp: (21) 98223-0009</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <MapPin size={24} className="text-prabicho-turquoise flex-shrink-0" />
                <span>Lojas em Vista Alegre, Flamengo, Andaraí, Ramos, Rocha Miranda e Ilha do Governador.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} PraBicho Petshop. Todos os direitos reservados.
          </p>
          <p className="text-prabicho-yellow font-bold text-xl tracking-wide flex items-center gap-2">
            Seja um Amigo PraBicho <PawPrint size={20} />
          </p>
        </div>
      </div>
    </footer>
  );
}
