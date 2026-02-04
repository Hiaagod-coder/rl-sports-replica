const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center overflow-hidden bg-[#020617]">

      {/* --- CAMADAS DE FUNDO --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Fundo Corredor" 
          className="w-full h-full object-cover opacity-50"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-0 bg-black/60"></div>
      <div className="absolute inset-0 w-full h-full z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-80 mix-blend-overlay"></div>

      {/* --- CONTEÚDO --- */}
      <div className="relative z-10 max-w-5xl mt-10">
        
        {/* --- BADGE / SELO --- */}
        <div className="inline-flex items-center gap-3 bg-[#0F172A]/80 backdrop-blur-sm border border-blue-500/30 px-4 py-1.5 md:px-8 md:py-3 rounded-full mb-8 shadow-lg hover:border-blue-500/60 transition-colors cursor-default">
          <span className="text-[#3B82F6] text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">RL SPORTS</span>
          <div className="w-[1px] h-3 md:h-5 bg-blue-500/30"></div>
          <span className="text-gray-300 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">Treinamento de Corrida</span>
        </div>

        {/* Títulos GIGANTES */}
        <h1 className="text-7xl md:text-[130px] font-bold text-white tracking-tight leading-none mb-2 drop-shadow-xl">
          EVOLUA SUA
        </h1>
        <h2 className="text-7xl md:text-[160px] font-bold tracking-tight mb-8 neon-blue-strong leading-none pb-4">
          CORRIDA
        </h2>

        <p className="text-gray-200 text-sm md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-md">
          De iniciantes ao alto rendimento. Treinos específicos sob a orientação do <span className="text-blue-400 font-bold">Prof. Rafael Lima</span>.
        </p>

        {/* --- BOTÃO DE AÇÃO (Link para Assessoria) --- */}
        {/* Agora é um <a> que leva para #assessoria e sem o ícone */}
        <a 
          href="#assessoria"
          className="btn-neon-pulse bg-[#3B82F6] text-[#020617] px-12 py-5 rounded-xl font-black text-base uppercase tracking-widest transition-all inline-flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:bg-blue-500 hover:scale-105 cursor-pointer"
        >
          FAZER PRÉ-MATRÍCULA
        </a>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mt-24 max-w-3xl mx-auto">
          {[
            { label: 'ALUNOS ATIVOS', val: '50+' },
            { label: 'ANOS DE EXPERIÊNCIA', val: '5+' },
            { label: 'FOCO EM RESULTADOS', val: '100%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-black/60 border border-white/10 p-6 rounded-2xl backdrop-blur-md transition-all hover:border-blue-500/50">
              <div className="text-[#3B82F6] text-3xl md:text-4xl font-bold mb-1 text-glow">{stat.val}</div>
              <div className="text-gray-400 text-[9px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;