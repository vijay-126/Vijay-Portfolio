import "../utils.css";
import "./home.css";
import Btn from "../btn/btn"
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <section className="fade-in" id="home" >
        <div className="animated-bg">
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div>
          <div id="home-page">
            <div className="text-home">
              <h3>Hi, I am</h3>
              <h1>Vijay Kaushik</h1>
              <h2>Front-End Web Developer / UI & UX Designer</h2>
              <p>
                I design and develop modern, responsive websites and web applications
                using technologies like React, JavaScript, and Tailwind CSS. My passion
                lies in crafting interactive digital experiences that are both visually
                appealing and highly functional.
              </p>
            </div>

            <div className="img-home">
              <img className="my-image" src="/assets/my.jpg" alt="Vijay Kaushik" />
            </div>

          </div>
          <div className="btn-container">
            <Btn className="btn-next" text="Craft" />
          </div>

          <hr className="about-line" />
            <span>
            <Link to="/contact" className="btn">Get in Touch</Link>
            </span>

        </div>
      </section>
    </>
  );
}
