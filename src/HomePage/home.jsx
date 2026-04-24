import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const base = import.meta.env.BASE_URL;

const Home = () => {
  useEffect(() => {

    document.documentElement.style.setProperty('--navbar-height', '60px');
    return () => {
      document.documentElement.style.removeProperty('--navbar-height');
    };
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="left-content">
          <div className="greeting">
            Hey, I'm Sunil
            <span className="wave">👋</span>
          </div>

          <h1 className="title">
            <span className="purple-text">Front</span>end Developer
          </h1>
          <h1 className="title">
            UI/UX <span className="purple-text">Designer</span> 
          </h1>

          <p className="description">
            I'm a frontend developer based in Nepal. I'll help you build beautiful websites your users will love.
          </p>

          <div className="button-container">
            <Link to="/contact" className="primary-button">Get In Touch</Link>
            <Link to="/projects" className="secondary-button" onClick={() => console.log("Browse Projects clicked")}>Browse Projects</Link>
          </div>
        </div>

        <div className="right-content">
          <div className="image-container">
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
            <div className="profile-image">
              <img src={`${base}images/profile.jpg`} alt="Sunil-Frontend Developer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;