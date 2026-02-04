import { MapPin, Calendar, Clock, Check, CalendarCheck, MessageCircle, ExternalLink } from 'lucide-react';

const Treinos = () => {
  return (
    <section id="treinos" className="py-24 bg-[#020617] px-4 relative overflow-hidden">
      
      {/* Luz de fundo suave */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-900/20 blur-[100px] -z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- CABEÇALHO --- */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-[#3B82F6] mx-auto mb-6 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Treinos em Grupo <span className="neon-blue-strong">Presenciais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Aulas dinâmicas com iniciação, aprimoramento e testes de condicionamento. <br/>
            <span className="text-blue-400">(2x na semana presencial + Treinos Externos)</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- COLUNA ESQUERDA: FOTO --- */}
          <div className="relative group order-2 lg:order-1">
            
            {/* Foto da Turma */}
            <div className="relative rounded-3xl overflow-hidden border border-[#3B82F6]/30 shadow-2xl aspect-video box-glow mb-8">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-[#020617] px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg z-20 flex items-center gap-2 whitespace-nowrap">
                <span>⚡ +50 ALUNOS ATIVOS</span>
              </div>

              <img 
                src="/foto-turma.webp" 
                alt="Turma RL Sports" 
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1552674605-4694c0427eef?q=80&w=2070&auto=format&fit=crop'; }} 
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Botão Grupo WhatsApp */}
            <div className="text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Quer conhecer a galera antes?</p>
              <a 
                href="https://chat.whatsapp.com/HPRznbNW80t5lVuID0us3I" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-[#020617] px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] hover:scale-[1.02]"
              >
                <MessageCircle size={22} fill="#020617" className="animate-bounce" />
                Entrar no Grupo Grátis
              </a>
              <p className="text-[#25D366]/70 text-[10px] font-bold mt-2 uppercase tracking-wide">Comunidade Aberta no WhatsApp</p>
            </div>

          </div>

          {/* --- COLUNA DIREITA: INFORMAÇÕES --- */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            
            {/* 1. CARD DE PREÇO */}
            <div className="bg-[#0F172A] border border-[#3B82F6]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden ring-1 ring-blue-500/20">
               <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#3B82F6]/10 blur-3xl rounded-full"></div>
               
               <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Plano Mensal</p>
                  <div className="flex items-end justify-center sm:justify-start gap-1">
                    <span className="text-[#3B82F6] text-lg font-bold mb-1.5">R$</span>
                    <span className="text-white text-5xl font-black tracking-tighter">89,90</span>
                    <span className="text-gray-500 text-xs font-bold mb-2">/mês</span>
                  </div>
               </div>

               <a 
                href="https://wa.me/5524999074844?text=Olá, gostaria de saber mais sobre o plano de R$89,90!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-neon-pulse bg-[#3B82F6] text-[#020617] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:scale-[1.02] flex items-center justify-center gap-2 z-10 whitespace-nowrap"
               >
                <CalendarCheck size={18} color="#020617" /> AGENDAR AULA
              </a>
            </div>

            {/* 2. LISTA DE DIFERENCIAIS */}
            <div className="bg-[#0B1120]/50 border border-white/5 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#3B82F6] rounded-full"></div> Inclusos no Plano:
              </h4>
              <div className="space-y-3">
                {[
                  "Aulas em Grupo Dinâmicas", 
                  "Iniciação e Aprimoramento Técnico", 
                  "Testes de Condicionamento Periódicos", 
                  "Participação em Treinos Externos",
                  "Turmas para todas as idades"
                ].map((tag) => (
                  <div key={tag} className="flex items-center gap-3">
                    <div className="bg-[#3B82F6]/20 p-1 rounded-full">
                      <Check size={12} className="text-[#3B82F6]" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. LOCAIS */}
            <div className="space-y-4">
              
              {/* LOCAL 1 */}
              <a 
                href="https://maps.google.com/?q=R.+Trinta+e+Nove,+2-156+-+Sessenta,+Volta+Redonda+-+RJ,+27261-120"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0B1120] border border-[#3B82F6]/20 p-5 rounded-2xl hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all group cursor-pointer relative"
              >
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-[#3B82F6]" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#3B82F6]/10 p-3 rounded-xl shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors text-[#3B82F6]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#3B82F6] transition-colors">VILA (Praça da ETPC)</h3>
                    <p className="text-gray-500 text-xs mb-3 font-medium">R. Trinta e Nove, 2-156 - Sessenta, Volta Redonda</p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm font-medium">
                      <div className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500"/> Segunda e Quarta</div>
                      <div className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500"/> 19h15</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* LOCAL 2 */}
              <a 
                href="https://maps.google.com/?q=R.+K,+93+-+Jardim+Primavera,+Volta+Redonda"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0B1120] border border-[#3B82F6]/20 p-5 rounded-2xl hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all group cursor-pointer relative"
              >
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-[#3B82F6]" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#3B82F6]/10 p-3 rounded-xl shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors text-[#3B82F6]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#3B82F6] transition-colors">JARDIM PONTE ALTA (Morrão)</h3>
                    <p className="text-gray-500 text-xs mb-3 font-medium">R. K, 93 - Jardim Primavera, Volta Redonda</p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm font-medium">
                      <div className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500"/> Terça e Quinta</div>
                      <div className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500"/> 19h00</div>
                    </div>
                  </div>
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Treinos;