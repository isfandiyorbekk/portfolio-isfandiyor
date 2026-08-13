import { Routes, Route } from "react-router-dom";
import Navbar from "./companets/Navbar"; // Fayllar papkasi 'companets' ekan
import Home from "./layouts/Home";
import About from "./layouts/About";
import ProjectsPage from "./layouts/Projects";
import ContactPage from "./layouts/Contact";
import Footer from "./companets/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
