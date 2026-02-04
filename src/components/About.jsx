import { Award, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#020617] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Imagem com Overlay */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
            <img 
              src="/rafael-lima.webp" 
              alt="Prof. Rafael Lima" 
              decoding="async"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
               <div className="bg-blue-900/40 backdrop-blur-md border border-blue-500/30 p-4 rounded-xl">
                <p className="text-blue-400 font-bold text-sm">PROF. RAFAEL LIMA</p>
                <p className="text-gray-400 text-[10px] uppercase font-semibold">Educador Físico Registrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Informações Técnicas */}
        <div className="text-left">
          <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Orientação Técnica <br />
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Certificada</span>
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            Treine com segurança e técnica. A RL Sports é liderada pelo <span className="text-white font-semibold">Prof. Rafael Lima</span>, profissional registrado no Conselho Regional de Educação Física.
          </p>

          <div className="space-y-4">
            {[
              { icon: <Award className="text-blue-500" />, title: 'CREF: 051763-G/RJ', sub: 'Profissional Registrado' },
              { icon: <Shield className="text-blue-500" />, title: 'Especialista em Corrida de Rua e Trail', sub: 'Certificação Profissional' },
              { icon: <Users className="text-blue-500" />, title: 'Metodologia para todas as idades', sub: 'Treinamento Personalizado' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-5 bg-[#0B1120] border border-white/5 rounded-2xl hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group cursor-default">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest group-hover:text-blue-400 transition-colors">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;