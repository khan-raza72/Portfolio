import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#09090b] via-[#111827] to-[#1e3a8a] text-white">
      <BlurBlob
        position={{ top: "35%", left: "25%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.18)_1px,transparent_1px)] bg-size-[24px_24px] mask-linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
