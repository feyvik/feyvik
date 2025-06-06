/** @format */
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-[100vh] bg-[#ffff] text-textlight dark:bg-dark dark:text-dark-text font-body">
      <Header
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route
          path="/"
          element={<Home aboutRef={aboutRef} projectRef={projectRef} />}
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;
