import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-brand-yellow selection:text-brand-navy">
      <Header />
      <main>
        <Hero />
        <QuoteSection />
        <Services />
        <Stats />
        <Projects />
        <Founder />
      </main>
      <Footer />
    </div>
  );
};

export default App;