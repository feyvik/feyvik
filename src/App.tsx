/** @format */
import { useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Design from "./pages/Design";

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    // Skip scroll-to-top when navigating with a section scroll target —
    // the destination page handles its own scroll in that case.
    if ((state as { scrollTo?: string } | null)?.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-[100vh] bg-linear-to-b dark:from-dark-start dark:to-dark-end dark:text-white">
      <ScrollToTop />
      <Header
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              aboutRef={aboutRef}
              projectRef={projectRef}
              contactRef={contactRef}
            />
          }
        />
        <Route path="/profile" element={<About />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
