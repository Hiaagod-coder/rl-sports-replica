import { ShoppingBag, Tag, ChevronsRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Loja = () => {
  const whatsappNumber = "5524999074844";

  const products = [
    {
      id: 1,
      name: "Camisa Atleta",
      type: "Manga Curta",
      price: "69,99",
      image: "/camisa-tech.webp",
      message: "Olá! Gostaria de adquirir a camiseta da equipe!!"
    },
    {
      id: 2,
      name: "Regata Atleta",
      type: "Regata",
      price: "69,99",
      image: "/regata-tech.webp",
      message: "Olá! Gostaria de adquirir a regata da equipe!!"
    }
  ];

  return (
    <section id="loja" className="py-24 bg-[#020617] px-4 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/10 blur-[120px] -z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
              <Tag size={16} className="text-blue-500" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Loja Oficial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vista o Manto da Nossa <br />
            <span className="neon-blue-strong text-5xl md:text-6xl">Equipe</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            Tecnologia e conforto para seus treinos. Mostre que você faz parte do time RL Sports.
          </p>
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mb-6 text-blue-500/80 animate-pulse">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Deslize para ver mais</span>
            <ChevronsRight size={16} className="animate-bounce-x" />
        </div>

        <div className="px-4 md:px-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={false} 
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
            className="pb-16 !overflow-visible max-w-4xl mx-auto" 
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-[#0B1120] border border-[#3B82F6]/20 rounded-3xl p-6 group hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                  
                  <div className="relative h-72 mb-6 flex items-center justify-center p-4 bg-blue-900/5 rounded-2xl overflow-hidden group-hover:bg-blue-900/10 transition-colors">
                    <div className="absolute inset-0 bg-[#3B82F6]/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full scale-75"></div>
                    
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      decoding="async"
                      className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_10px_25px_rgba(59,130,246,0.4)] transition-all duration-500 z-10 relative"
                      onError={(e) => { e.target.src = 'https://placehold.co/400x500/0B1120/3B82F6?text=Manto+RL'; }}
                    />
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{product.type}</p>
                      <h3 className="text-white text-xl font-bold mb-4">{product.name}</h3>
                    </div>
                    
                    <div className="flex items-end justify-between mt-4">
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase font-bold">Valor Un.</p>
                        <div className="flex items-end gap-1">
                           <span className="text-[#3B82F6] font-bold">R$</span>
                           <span className="text-white text-3xl font-black tracking-tighter">{product.price}</span>
                        </div>
                      </div>
                      
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon-pulse bg-[#3B82F6] p-3 rounded-xl text-[#020617] shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-blue-400 transition-colors flex items-center justify-center"
                      >
                        <ShoppingBag size={24} />
                      </a>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Loja;