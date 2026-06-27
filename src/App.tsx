/** @format */
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-[100vh] dark:bg-dark dark:text-white">
      <Header
        headerRef={headerRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route
          path="/"
          element={<Home aboutRef={aboutRef} projectRef={projectRef} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;
