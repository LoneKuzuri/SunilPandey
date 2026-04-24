import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>
          Interested in working together<span className="purple">?</span>
        </h2>
        <div className="footer-buttons">
          <Link to="/contact" className="primary-button">Get In Touch</Link>
          
          <Link to="/projects" className="btn btn-outline"
          onClick={() => console.log("Browse Projects clicked")}
          >Browse Projects</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.instagram.com/its_me_jhalle?igsh=aDIxbXptN3AwbmNn"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/sunil-pandey-242a782a0/"><FaLinkedinIn /></a>
          <a href="https://github.com/LoneKuzuri"><FaGithub /></a>
           <a href="https://x.com/kchhakhabar69"><FaTwitter /></a>
        </div>
        <p>
          ©2026 All Rights Reserved. <br />
          Made with <span className="purple">💜</span> by <strong>Sunil Pandey</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
