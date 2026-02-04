import { useEffect } from 'react'; // Importar o Hook
import AOS from 'aos'; // Importar a biblioteca de animação
import 'aos/dist/aos.css'; // Importar o estilo da animação

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Assessoria from './components/Assessoria';
import Footer from './components/Footer';
import Treinos from './components/Treinos';
import Loja from './components/Loja';
import Eventos from './components/Eventos';
import FAQ from './components/FAQ';

function App() {
  
  // Inicia as animações quando o site carrega
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração de 1 segundo
      once: false,    // Anima toda vez que rolar a tela
      offset: 100,    // Começa a animar um pouco antes do elemento aparecer
    });
  }, []);

  return (
    // Adicionei 'overflow-x-hidden' para evitar barra de rolagem horizontal durante as animações
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Assessoria />
        <Treinos />      
        <Loja />
        <Eventos />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;