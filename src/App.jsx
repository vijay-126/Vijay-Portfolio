import HomePage from "./home/HomePage";
import Navbar from "./Navbar/Nav";
import "./App.css";
import Services from "./service/service";
import About from "./about/about";
import Contact  from "./contact/contact.jsx";
import Footer from "./footer/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
