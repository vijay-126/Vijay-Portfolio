import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  let [Text, setText] = useState("Vijay");

  let chngeText = () => {
    setText("Vijay Kaushik");
  };
  let resetText = () => {
    setText("Vijay");
  };

  let [open, setisOpen] = useState(false)
  let toggleMenu = () => {
    setisOpen(!open);
  }
  let closeMenu = () => {
    setisOpen(false);
  }
  return (
    <>
      <section id="nav-bar">
        <nav>
          <div className="nav-logo">
            <img id="logo-img" src="/src/assets/logo.png" alt="img" />

            <h2 onMouseEnter={chngeText} onMouseLeave={resetText}>
              {Text}
            </h2>
          </div>
          <div className={`nav-bar ${open ? "menu-mobile" : "menu-web"}`} onClick={closeMenu} >
            <ul >
              <li className="nav-link">
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/about" onClick={closeMenu}> About Me</Link>
              </li>
              <li className="nav-link">
                <Link to="/service" onClick={closeMenu}> Craft</Link>
              </li>
              <li className="nav-link">
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="menuIcon" onClick={toggleMenu}>{
            open ? (<i class="fa-solid fa-xmark"></i>)
              :
              (<i className="fa-solid fa-list"></i>)

          }


          </div>
          <div>
            <a href="/Resume.pdf" target="_blank" className="about-btn">
              <span>Download CV</span>
            </a>
          </div>
        </nav>
      </section>
    </>
  );
}
