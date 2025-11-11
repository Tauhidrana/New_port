import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
