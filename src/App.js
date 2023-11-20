import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
