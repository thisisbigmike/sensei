import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;