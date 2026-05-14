import AnimatedBackground from "./components/effects/AnimatedBackground";
import MouseSpotlight from "./components/effects/MouseSpotlight";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <MouseSpotlight />
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
