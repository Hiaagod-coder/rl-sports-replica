import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso já ser corredor para entrar na equipe?",
      answer: "De jeito nenhum! A RL Sports atende desde quem nunca correu e quer sair do sedentarismo até atletas de ultra distância. O treino é 100% adaptado ao seu nível atual."
    },
    {
      question: "Como funciona a Assessoria Online?",
      answer: "Você recebe seus treinos através de um aplicativo exclusivo. Lá você tem acesso à planilha semanal, vídeos educativos de exercícios de fortalecimento e feedback direto do treinador após cada sessão."
    },
    {
      question: "O que acontece se chover no dia do treino presencial?",
      answer: "A corrida não para! Treinamos normalmente com chuva, exceto em casos de tempestades com raios ou riscos severos. Nesses casos, avisamos no grupo oficial com antecedência."
    },
    {
      question: "Posso comprar a camisa sem ser aluno?",
      answer: "Com certeza! A nossa loja é aberta para todos que admiram a equipe e querem treinar com produtos de alta qualidade e tecnologia. Basta acessar a seção 'Loja' acima."
    },
    {
      question: "Tem fidelidade ou multa de cancelamento?",
      answer: "Não. Trabalhamos com a liberdade do aluno. O pagamento é mensal e você pode cancelar quando quiser, basta avisar com antecedência para não gerarmos a próxima cobrança."
    }
  ];

  return (
    // ADICIONEI id="faq" AQUI PARA O BOTÃO FUNCIONAR
    <section id="faq" className="py-24 bg-[#020617] px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle size={20} className="text-[#3B82F6]" />
            <span className="text-[#3B82F6] font-bold uppercase tracking-widest text-xs">Tire suas dúvidas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="neon-blue-strong">Frequentes</span>
          </h2>
        </div>

        {/* Lista de Perguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-[#0B1120] border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                  : 'border-[#3B82F6]/20 hover:border-[#3B82F6]/50'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#3B82F6] text-[#020617]' : 'bg-[#3B82F6]/10 text-[#3B82F6]'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed font-medium border-t border-[#3B82F6]/10 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;