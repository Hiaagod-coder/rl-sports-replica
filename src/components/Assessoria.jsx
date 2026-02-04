import { Check, MessageCircle } from 'lucide-react';

const Assessoria = () => {
  const features = [
    "Treino Específico e Individualizado",
    "Feedback Diário com o Treinador",
    "Avaliação da Técnica de Corrida",
    "Controle de Evolução de Treino",
    "Preparação para TAF (Teste de Aptidão Física)",
    "Acesso livre às turmas e treinos da equipe",
    "Todas as idades e categorias"
  ];

  return (
    <section id="assessoria" className="py-24 bg-[#020617] px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-900/10 blur-[100px] -z-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <div>
            <div className="w-16 h-1 bg-[#3B82F6] mx-auto mb-6 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Assessoria Esportiva <span className="neon-blue-strong">Completa</span>
            </h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            O acompanhamento ideal para quem busca performance e feedback constante.
            </p>
        </div>

        <div className="relative bg-[#0B1120] border border-[#3B82F6]/30 rounded-3xl p-8 md:p-12 overflow-visible group shadow-2xl mt-8">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-[#020617] text-[10px] md:text-xs font-black px-4 md:px-8 py-2 rounded-full tracking-widest uppercase flex items-center gap-1 shadow-[0_0_20px_rgba(59,130,246,0.6)] whitespace-nowrap w-max z-20">
            <span>⭐ PLANO RECOMENDADO ⭐</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-4">
            
            <div className="text-left space-y-5">
              <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-8 h-[3px] bg-[#3B82F6] rounded-full shadow-[0_0_10px_#3b82f6]"></div> 
                O que está incluso
              </h3>
              
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                  <div className="bg-[#3B82F6]/10 p-1.5 rounded-full min-w-fit">
                    <Check size={16} className="text-[#3B82F6] stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0F172A] border border-[#3B82F6]/20 rounded-2xl p-8 shadow-xl relative overflow-hidden hover:border-[#3B82F6]/50 transition-colors duration-300">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3B82F6]/10 blur-3xl rounded-full"></div>

              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-2">Investimento Mensal</p>
              
              <div className="flex items-start justify-center gap-1 mb-1">
                <span className="text-[#3B82F6] font-bold mt-2 text-xl">R$</span>
                <span className="text-white text-7xl font-black tracking-tighter drop-shadow-lg">199,99</span>
              </div>
              
              <p className="text-[#3B82F6]/80 text-xs font-bold uppercase tracking-wider mb-8">Cancele quando quiser</p>
              
              <a 
                href="https://wa.me/5524999074844?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20assessoria%20esportiva%20completa!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-neon-pulse bg-[#3B82F6] text-[#020617] py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} color="#020617" fill="#020617" /> QUERO MINHA ASSESSORIA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessoria;