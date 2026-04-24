import React, { useState } from 'react';
import './AboutPage.css';

const experienceData = [
 {
      company: 'FourBit Technologies',
      role: 'Frontend Developer Intern @ FourBit Technologies',
      date: 'March - June 2025',
      points: [
        'Worked with a team to build a marketing website and e-commerce platform for blistabloc, an ambitious startup.',
        'Helped solidify a brand direction for blistabloc that spans both packaging and web.',
        'Interfaced with clients on a weekly basis, providing technological expertise.'
      ]
    },
    {
      company: 'Corpola Tech',
      role: 'Frontend Developer Intern @ Corpola Tech',
      date: 'Dec - Present 2026',
      points: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React.js',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
        'Clients included Reliance College'
      ]
    },
];

const skillsData = [
  {
    title: 'Web Design',
    list: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
  },
  {
    title: 'Frontend',
    list: ['JavaScript', 'ReactJS', 'CSS3'],
  },
  {
    title: 'Soft Skills',
    list: ['Communication', 'Collaboration', 'Commitment', 'Leadership'],
  },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="about-page">
      {/* About Me */}
      <section className="about-section">
        <h1 className="about-title">About <span className="highlight">Me</span></h1>
        <p className="about-text">
          Hello! I'm <strong>Sunil Pandey</strong>, a passionate Frontend Developer from Nepal 🇳🇵.
          I enjoy crafting user-friendly interfaces using React, JavaScript, and modern CSS tools. <br /><br />
          I'm constantly learning and building cool web experiences that blend design and code.
        </p>
      </section>

      {/* Experience */}
      <section className="experience-section">
        <h2 className="section-title">Experience<span className="highlight">.</span></h2>
        <div className="experience-container">
          <div className="company-buttons">
            {experienceData.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`company-btn ${index === activeIndex ? 'active' : ''}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="experience-details">
            <h3 className="role">{experienceData[activeIndex].role}</h3>
            <p className="date">{experienceData[activeIndex].date}</p>
            <ul className="points">
              {experienceData[activeIndex].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2 className="section-title">Skills<span className="highlight">.</span></h2>
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-title">{group.title}</h3>
              <ul className="skill-list">
                {group.list.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
