import './css/App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import CardSection from './components/CardSection';
import ProductiveSection from './components/ProductiveSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="main_section">
        <HeroSection />
        <TextSection />
      </section>
      <CardSection />
      <ProductiveSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
