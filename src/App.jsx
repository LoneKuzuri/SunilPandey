import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './HomePage/Navbar';
import Home from './HomePage/home';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './skills/Skills';
import About from './About/About';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import AboutPage from './AboutPage/AboutPage';
import './App.css';

const App = () => {
  return (
    <Router basename="/SunilPandey"> {/* ✅ set to /SunilPandey for project page deployment */}
      <div>
        <Navbar />
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
                <Experience />
                <Skills />
                <About />
              </>
            }
          />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/about"    element={<AboutPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;