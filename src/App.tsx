import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Fayllar papkasi 'companets' ekan
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";

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
