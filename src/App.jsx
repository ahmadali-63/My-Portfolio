import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import { Suspense, lazy, useState } from "react";

const AmbientBackground = lazy(() => import("./components/Background/AmbientBackground.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Education = lazy(() => import("./components/Education/Education.jsx"));
const Experience = lazy(() => import("./components/Experience/Experience.jsx"));
const Skills = lazy(() => import("./components/Skills/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));

function App() {
  const [mounted] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (id) => {
    setActiveSection(id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="app-shell">
      {mounted && (
        <Suspense fallback={null}>
          <AmbientBackground />
        </Suspense>
      )}

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <Pagination activeSection={activeSection} onNavigate={handleNavigate} />

      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        {activeSection === "home" && <Home onNavigate={handleNavigate} />}
        {activeSection === "about" && <About />}
        {activeSection === "education" && <Education />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
