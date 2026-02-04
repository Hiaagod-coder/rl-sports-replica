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
  return (
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