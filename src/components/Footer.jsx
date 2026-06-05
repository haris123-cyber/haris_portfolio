const Footer = () => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const socials = [
    { url: 'https://github.com/haris123-cyber', icon: 'fab fa-github' },
    { url: 'https://www.linkedin.com/in/haris-m-kdr/', icon: 'fab fa-linkedin-in' },
    { url: 'https://www.instagram.com/al__haris_?igsh=Z3NqYTdpamxwOHd3', icon: 'fab fa-instagram' },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img
                src={`${import.meta.env.BASE_URL}images/my logo.png`}
                alt="Haris"
                className="footer-logo"
              />
              <span className="footer-name">Haris M </span>
            </div>
            <p className="footer-desc">
              Full-Stack Developer based in Calicut, Kerala. I build modern, responsive web
              applications with Django, React, and PostgreSQL — focused on clean code, reliable
              APIs, and experiences that feel simple to use.
            </p>
          </div>

          <nav className="footer-nav">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Haris M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
