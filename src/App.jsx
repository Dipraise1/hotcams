import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import StreamPopup from './components/StreamPopup';
import HowStreamingWorks from './components/howstreamingworks'; // Add this import
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-900 to-red-900 min-h-screen">
      <Navbar /> 
      <Hero />
      <About />
      <HowStreamingWorks /> {/* Add this component */}
      <Tokenomics />
      <Footer />
      <StreamPopup />
    </div>
  );
}

export default App;