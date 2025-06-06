/** @format */
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import TimeLine from "./pages/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-[100vh] bg-[#ffff] text-textlight dark:bg-dark dark:text-dark-text font-body">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeLine" element={<TimeLine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
