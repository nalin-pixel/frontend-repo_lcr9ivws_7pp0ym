import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
