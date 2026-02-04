import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-20 pb-10 px-4 border-t border-white/5 text-center">
      
      {/* Chamada Principal */}
      <h3 className="text-white text-3xl font-bold mb-2 tracking-tight">Prova de amor ou cardio?</h3>
      <h4 className="text-[#3B82F6] text-3xl font-bold mb-12 tracking-tight">Venha descobrir na RL SPORTS.</h4>
      
      {/* --- ÁREA DOS INSTAGRAMS --- */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
        
        {/* Perfil 1: RL Sports */}
        <a 
          href="https://www.instagram.com/rlsportsrunning" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#0B1120] px-6 py-4 rounded-2xl border border-white/10 group hover:border-[#3B82F6] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto min-w-[250px]"
        >
          <div className="bg-[#3B82F6]/10 p-3 rounded-full text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
            <Instagram size={24} />
          </div>
          <div className="text-left">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Loja e Equipe</p>
            <p className="text-white font-bold text-lg tracking-wide group-hover:text-[#3B82F6] transition-colors">@rlsportsrunning</p>
          </div>
        </a>

        {/* Perfil 2: Rafael Lima (LINK CORRIGIDO AQUI) */}
        <a 
          href="https://www.instagram.com/rafaellimaprofessor" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#0B1120] px-6 py-4 rounded-2xl border border-white/10 group hover:border-[#3B82F6] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto min-w-[250px]"
        >
          <div className="bg-[#3B82F6]/10 p-3 rounded-full text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
            <Instagram size={24} />
          </div>
          <div className="text-left">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Treinador</p>
            <p className="text-white font-bold text-lg tracking-wide group-hover:text-[#3B82F6] transition-colors">@rafaellimaprofessor</p>
          </div>
        </a>

      </div>

      {/* Créditos */}
      <div className="space-y-3 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <p className="text-white font-bold tracking-[0.2em] text-lg">RL SPORTS</p>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">Treinamento de Corrida</p>
        
        <div className="w-10 h-[1px] bg-gray-700 mx-auto my-6"></div>

        <p className="text-gray-500 text-[10px] leading-relaxed">
          Feito com 💙 para corredores<br />
          &copy; {new Date().getFullYear()} RL Sports - Todos os direitos reservados. CREF: 051763-G/RJ<br />
          <span className="text-[#3B82F6] font-bold mt-2 block">DESENVOLVIDO NO VSCODE POR HIAGO DEV.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;