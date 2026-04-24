import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaCopy, FaCheck, FaGithub, FaLinkedin, FaTwitter, FaDownload, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const base = import.meta.env.BASE_URL; 

const socialLinks = [
  { icon: <FaGithub />,   label: 'GitHub',   href: 'https://github.com/LoneKuzuri',     color: '#1a1a1a' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sunil-pandey-242a782a0/', color: '#0a66c2' },
  { icon: <FaTwitter />,  label: 'Twitter',  href: 'https://x.com/kchhakhabar69',    color: '#1d9bf0' },
];

const Contact = () => {
  const [copied, setCopied]         = useState(null);
  const [formData, setFormData]     = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [visible, setVisible]       = useState({});
  const refs = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.dataset.id]: true }));
      }),
      { threshold: 0.1 }
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const r = (id, delay = 0, extra = '') => ({
    ref: (el) => { refs.current[id] = el; },
    'data-id': id,
    className: `reveal${visible[id] ? ' reveal-visible' : ''}${extra ? ' ' + extra : ''}`,
    style: { transitionDelay: `${delay}s` },
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // 👉 Replace with EmailJS / Formspree for real sending
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Left */}
        <div className="contact-content">

          <p {...r('eyebrow', 0, 'contact-eyebrow')}>Let's Collaborate</p>

          <h1 {...r('heading', 0.1, 'contact-heading')}>
            Get In Touch<span className="purple-text">.</span>
          </h1>

          <p {...r('desc', 0.2, 'contact-description')}>
            Great ideas start with conversation. Let's turn your vision into
            reality — reach out today!
          </p>

          <div {...r('links', 0.3, 'contact-links')}>
            <a href="mailto:pandeysuneel208@gmail.com" className="contact-link">
              <span className="contact-icon-wrap">
                <FaEnvelope className="contact-icon" />
              </span>
              <div className="contact-link-text">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">pandeysuneel208@gmail.com</span>
              </div>
              <button
                className="contact-copy-btn"
                onClick={(e) => { e.preventDefault(); handleCopy('pandeysuneel208@gmail.com', 'email'); }}
                aria-label="Copy email"
              >
                {copied === 'email' ? <FaCheck /> : <FaCopy />}
              </button>
            </a>

            <a href="tel:+9779869457208" className="contact-link">
              <span className="contact-icon-wrap">
                <FaPhone className="contact-icon" />
              </span>
              <div className="contact-link-text">
                <span className="contact-link-label">Phone</span>
                <span className="contact-link-value">+977 9869457208</span>
              </div>
              <button
                className="contact-copy-btn"
                onClick={(e) => { e.preventDefault(); handleCopy('+9779869457208', 'phone'); }}
                aria-label="Copy phone"
              >
                {copied === 'phone' ? <FaCheck /> : <FaCopy />}
              </button>
            </a>
          </div>

          <p {...r('avail', 0.4, 'contact-availability')}>
            <span className="contact-availability-dot" />
            Available for freelance &amp; full-time opportunities
          </p>

          <div {...r('social', 0.5, 'contact-socials')}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label={s.label}
                title={s.label}
                style={{ '--social-color': s.color }}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>


         {/* uploading resume  */}
          <div {...r('resume', 0.6)}>
            <a
              href={`${base}resume/Sunil_Pandey_Resume.pdf`} 
              download
              className="contact-resume-btn"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

        </div>

        {/* Right: image ✅ fixed */}
        <div {...r('image', 0.35, 'right-content')}>
          <div className="image-container">
            <div className="outer-circle" />
            <div className="inner-circle" />
            <div className="profile-image">
              <img
                src={`${base}images/profile.jpg`}
                alt="Sunil Pandey — Frontend Developer"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Form */}
      <div {...r('form', 0.15, 'contact-form-wrapper')}>
        <div className="contact-form-header">
          <h2 className="contact-form-title">
            Send a Message<span className="purple-text">.</span>
          </h2>
          <p className="contact-form-subtitle">
            Fill out the form and I'll get back to you within 24 hours.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="cf-name">Your Name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="cf-email">Your Email</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`contact-form-submit${formStatus === 'sent' ? ' sent' : ''}`}
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'sending' ? (
              <><span className="contact-form-spinner" /> Sending...</>
            ) : formStatus === 'sent' ? (
              <><FaCheck /> Message Sent!</>
            ) : (
              <><FaPaperPlane /> Send Message</>
            )}
          </button>

          {formStatus === 'sent' && (
            <p className="contact-form-success">
              ✅ Thanks! I'll get back to you within 24 hours.
            </p>
          )}
        </form>
      </div>

    </section>
  );
};

export default Contact;