const Sidebar = ({ activeSection, isOpen, closeMenu }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user-astronaut' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-layer-group' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  const socials = [
    { url: 'https://x.com', icon: 'fab fa-twitter' },
    { url: 'https://www.instagram.com/al__haris_?igsh=Z3NqYTdpamxwOHd3', icon: 'fab fa-instagram' },
    { url: 'https://github.com/haris123-cyber', icon: 'fab fa-github' },
    { url: 'https://www.linkedin.com/in/haris-m-kdr/', icon: 'fab fa-linkedin-in' },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (closeMenu) closeMenu();
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo-container">
        <img
          src={`${import.meta.env.BASE_URL}images/my logo.png`}
          alt="Logo"
          className="sidebar-logo"
        />
      </div>

      {/* Nav Menu */}
      <div className="nav-menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            <i className={item.icon}></i> <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Socials Bottom */}
      <div className="sidebar-socials">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
