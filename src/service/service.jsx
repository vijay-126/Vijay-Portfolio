import React, { useEffect, useRef } from "react";
import "./service.css";
import {Link} from "react-router-dom";

export default function HireMePage() {
  const containerRef = useRef(null);

 useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        entry.target.classList.remove("reverse");
      } else {
        // When scrolling back up (element leaving viewport), fade out
        entry.target.classList.remove("animate");
        entry.target.classList.add("reverse");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const root = containerRef.current;
  if (root) {
    const targets = root.querySelectorAll(".scroll-animate");
    targets.forEach((t) => observer.observe(t));
  }

  return () => observer.disconnect();
}, []);


  return (
    <section id="services">
      <div className="animated-bg" />

      <div className="services-container" ref={containerRef}>
        {/* 💼 Services Section */}
        <h1 className="scroll-animate slide-down">My Services</h1>
        <p className="scroll-animate fade-up">
          I’m a passionate Web Developer offering modern, responsive, and
          user-focused web solutions. I specialize in creating efficient and
          elegant websites for startups, individuals, and small businesses.
        </p>

        <div className="service-cards">
          <div className="service-card scroll-animate">
            <h2>Frontend Development</h2>
            <p>Building clean, dynamic interfaces using React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="service-card scroll-animate">
            <h2>Responsive Design</h2>
            <p>Ensuring websites look perfect on all devices — from mobiles to desktops.</p>
          </div>
          <div className="service-card scroll-animate">
            <h2>Portfolio & Personal Sites</h2>
            <p>Helping individuals and freelancers showcase their work online with style.</p>
          </div>
        </div>

        {/* 🧠 Skills Section */}
        <div className="skills-section">
          <h1 className="scroll-animate slide-down">My Skills</h1>
          <p className="scroll-animate fade-up">I constantly improve my skills to stay updated with modern web trends.</p>
          <div className="skills-grid">
            {["HTML","CSS","JavaScript","React.js","Node.js","MongoDB","Git & GitHub","UI/UX Design"].map((skill, i) => (
              <div key={i} className="skill-card scroll-animate">{skill}</div>
            ))}
          </div>
        </div>

        {/* 💻 Projects Section */}
        <div className="projects-section">
          <h1 className="scroll-animate slide-down">My Projects</h1>
          <p className="scroll-animate fade-up">Here are some of the projects that showcase my skills and creativity.</p>
          <div className="project-grid">
            <div className="project-card scroll-animate">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio site built with React and modern CSS animations.</p>
            </div>
            <div className="project-card scroll-animate">
              <h3>Weather App</h3>
              <p>Fetches live weather data using the OpenWeather API with a clean, responsive UI.</p>
            </div>
            <div className="project-card scroll-animate">
              <h3>Task Manager</h3>
              <p>A simple CRUD-based React app to manage and track daily tasks efficiently.</p>
            </div>
          </div>
        </div>

        {/* ✉️ Hire Me Button */}
        <Link to="/contact" className="btnn bounce scroll-animate fade-up">Hire Me</Link>
      </div>
    </section>
  );
}
