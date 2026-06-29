/** @format */
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Design from "./pages/Design";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-[100vh] bg-linear-to-b dark:from-dark-start dark:to-dark-end dark:text-white">
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
        <Route path="/profile" element={<About />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;
