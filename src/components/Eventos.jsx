import { Map, Flag, Trophy, Mountain } from 'lucide-react';

const Eventos = () => {
  const distances = [
    { label: "5K", color: "from-blue-500 to-cyan-400" },
    { label: "7K", color: "from-cyan-400 to-teal-400" },
    { label: "10K", color: "from-teal-400 to-green-400" },
    { label: "15K", color: "from-green-400 to-yellow-400" },
    { label: "21K", color: "from-yellow-400 to-orange-500" },
    { label: "42K", color: "from-orange-500 to-red-500" },
    { label: "ULTRA", color: "from-red-500 to-purple-600" },
  ];

  return (
    <section id="eventos" className="py-20 bg-[#020617] relative overflow-hidden border-t border-white/5">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        
        {/* --- TÍTULO COM EFEITO GLITCH (Igual imagem) --- */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter text-glitch uppercase">
          Calendário de Eventos
        </h2>
        
        <div className="w-24 h-1.5 bg-white mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

        <p className="text-gray-300 text-lg md:text-2xl font-bold max-w-4xl mx-auto uppercase tracking-wide leading-relaxed mb-12">
          Calendário com os principais <span className="text-[#3B82F6]">eventos regionais</span> nas modalidades de <span className="text-white bg-blue-600/20 px-2 py-0.5 rounded">Rua</span> e <span className="text-white bg-green-600/20 px-2 py-0.5 rounded">Trail</span>
        </p>

        {/* --- GRID DE DISTÂNCIAS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {distances.map((dist) => (
            <div key={dist.label} className={`relative group`}>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${dist.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>
              <div className="relative bg-[#0B1120] px-6 py-4 rounded-xl flex items-center justify-center border border-white/10">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  {dist.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- ÍCONES DE DESTAQUE --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
             <div className="bg-blue-500/10 p-3 rounded-full"><Map className="text-blue-500" size={32} /></div>
             <p className="text-gray-400 text-sm font-bold uppercase">Corridas em todo RJ</p>
          </div>
          <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
             <div className="bg-purple-500/10 p-3 rounded-full"><Trophy className="text-purple-500" size={32} /></div>
             <p className="text-gray-400 text-sm font-bold uppercase">Campeonatos Estaduais</p>
          </div>
          <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
             <div className="bg-green-500/10 p-3 rounded-full"><Mountain className="text-green-500" size={32} /></div>
             <p className="text-gray-400 text-sm font-bold uppercase">Desafios de Trail Run</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Eventos;