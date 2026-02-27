import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloqueia o scroll quando o menu abre
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = ['Início', 'Sobre', 'Assessoria', 'Treinos', 'Loja', 'Eventos', 'FAQ'];

  // Função para lidar com o clique nos links
  const handleLinkClick = (e, item) => {
    setIsOpen(false); // Fecha o menu mobile

    if (item === 'Início') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo
    }
  };

  return (
    <>
      {/* --- NAVBAR PRINCIPAL (Desktop e Mobile Fechado) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            
            {/* --- LOGO (Imagem) --- */}
            <div className="flex items-center">
              <a href="#" onClick={(e) => handleLinkClick(e, 'Início')} className="cursor-pointer">
                <img 
                  src="/rl-sports-logo.webp" 
                  alt="Logo RL Sports" 
                  className="h-20 w-auto drop-shadow-lg hover:scale-105 transition-transform" 
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={item === 'Início' ? '#' : `#${item.toLowerCase()}`} 
                  onClick={(e) => handleLinkClick(e, item)}
                  className="text-gray-300 hover:text-[#3B82F6] text-xs font-bold tracking-widest transition-colors drop-shadow-md uppercase"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* --- BOTÃO INSTAGRAM (DESKTOP) --- */}
            <div className="hidden md:block">
              <a 
                href="https://www.instagram.com/rlsportsrunning"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#3B82F6] text-[#020617] px-6 py-2.5 rounded-lg text-xs font-black tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform hover:bg-blue-400"
              >
                <Instagram size={18} /> SIGA-NOS NO INSTAGRAM
              </a>
            </div>

            {/* Botão Hambúrguer (Mobile) */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(true)} className="text-white hover:text-blue-500 transition-colors">
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILE TELA CHEIA (OVERLAY) --- */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#020617] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Fundo decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        {/* --- CABEÇALHO DO MENU (Logo em Imagem aqui também) --- */}
        <div className="absolute top-0 left-0 w-full px-4 h-24 flex items-center justify-between z-20">
          <img 
            src="/rl-sports-logo.webp" 
            alt="Logo RL Sports" 
            className="h-12 w-auto drop-shadow-lg" 
          />
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#3B82F6] transition-colors">
            <X size={32} />
          </button>
        </div>

        {/* Lista de Links */}
        <div className="flex flex-col items-center gap-8 relative z-10">
          {menuItems.map((item, index) => (
            <a 
              key={item} 
              href={item === 'Início' ? '#' : `#${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, item)}
              className={`text-3xl font-medium text-white hover:text-[#3B82F6] transition-all duration-700 transform ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* --- BOTÃO INSTAGRAM (MOBILE) --- */}
        <div 
          className={`mt-12 transition-all duration-700 delay-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a 
            href="https://www.instagram.com/rlsportsrunning" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#3B82F6] text-[#020617] px-10 py-4 rounded-xl text-sm font-black tracking-widest shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-all w-full justify-center"
          >
            <Instagram size={24} /> SIGA-NOS NO INSTAGRAM
          </a>
        </div>

      </div>
    </>
  );
};

export default Navbar;