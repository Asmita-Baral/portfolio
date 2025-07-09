
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-logo">Portfolio</div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-heading">
              Hi, I'm <span className="highlight">Asmita Baral</span>
            </h1>
            <p className="hero-subtext">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
            <div className="buttons">
              <a href="#projects" className="btn btn-yellow">View My Work</a>
              <a href="#contact" className="btn btn-outline-blue">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
             <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="John Doe"
              className="profile-pic"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm a dedicated Full Stack Developer with a knack for building modern, responsive web applications.
          I thrive on solving complex problems and transforming ideas into impactful digital solutions.
        </p>
        <div className="about-cards">
          <div className="card"><strong>Clean Code</strong><p>Focused on writing readable, maintainable code.</p></div>
          <div className="card"><strong>Responsive Design</strong><p>Ensures usability across all screen sizes.</p></div>
          <div className="card"><strong>Performance</strong><p>Optimized apps with smooth user experiences.</p></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skill-columns">
          <div className="column">
            <div>
              <strong>HTML</strong>
              <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
              <span className="percent">95%</span>
            </div>
            <div>
              <strong>CSS</strong>
              <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
              <span className="percent">90%</span>
            </div>
            <div>
              <strong>JavaScript</strong>
              <div className="bar"><div className="fill" style={{ width: '92%' }}></div></div>
              <span className="percent">92%</span>
            </div>
          </div>
          <div className="column">
            <div>
              <strong>React</strong>
              <div className="bar"><div className="fill" style={{ width: '88%' }}></div></div>
              <span className="percent">88%</span>
            </div>
            <div>
              <strong>Node.js</strong>
              <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
              <span className="percent">85%</span>
            </div>
            <div>
              <strong>MongoDB</strong>
              <div className="bar"><div className="fill" style={{ width: '80%' }}></div></div>
              <span className="percent">80%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-list">
          <div className="project">
            <h4>E-commerce Platform</h4>
            <p>Full-stack web application for online shopping experience</p>
            <div className="tech-tags">
              <span>React</span>
              <span>Redux</span>
              <span>Firebase</span>
            </div>
            <div className="project-btns">
              <a className="btn btn-code" href="#">Code</a>
              <a className="btn btn-demo" href="#">Demo</a>
            </div>
          </div>
          <div className="project">
            <h4>Task Management App</h4>
            <p>Organize, prioritize and manage your daily tasks with ease</p>
            <div className="tech-tags">
              <span>MongoDB</span>
              <span>Express</span>
              <span>React</span>
              <span>Node.js</span>
              <span>JWT</span>
              <span>Drag & Drop</span>
            </div>
            <div className="project-btns">
              <a className="btn btn-code" href="#">Code</a>
              <a className="btn btn-demo" href="#">Demo</a>
            </div>
          </div>
          <div className="project">
            <h4>Data Visualization</h4>
            <p>Display and analyze data through interactive charts and graphs</p>
            <div className="tech-tags">
              <span>React</span>
              <span>Chart.js</span>
              <span>REST API</span>
            </div>
            <div className="project-btns">
              <a className="btn btn-code" href="#">Code</a>
              <a className="btn btn-demo" href="#">Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p>Have a project in mind? Let's work together to bring your ideas to life!</p>
        <div className="contact-info">
          <div><strong>Email</strong><p>john.doe@email.com</p></div>
          <div><strong>Phone</strong><p>+1 (555) 123-4567</p></div>
          <div><strong>Location</strong><p>New York, NY</p></div>
        </div>
        <div className="socials">
          <a className="btn" href="#">LinkedIn</a>
          <a className="btn" href="#">GitHub</a>
          <a className="btn" href="#">Twitter</a>
        </div>
        <div className="copyright">
          © 2025 John Doe. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default App;