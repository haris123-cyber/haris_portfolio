import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = ['Full-Stack Developer', 'Web Developer', 'Freelancer'];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypeSpeed(50);
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypeSpeed(100);
      }, typeSpeed);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypeSpeed(50);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTypeSpeed(500);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, typeSpeed]);

  const handleContactScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <h1 className="hero-name1">Hi there!</h1>
          <h1 className="hero-name2">
            My Name is <br /> <span className="hero-name">Haris</span>
          </h1>
          <div className="name-underline"></div>

          <h2 className="hero-subtitle">
            I'm a &nbsp;<span>{text}</span>
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-description">
            Passionate about creating exceptional digital experiences that blend innovative design with
            functional development. Let's create something impactful.
          </p>

          <div className="hero-buttons">
            <a href={`${import.meta.env.BASE_URL}images/Haris_M_resume.pdf`} download className="btn btn-primary">
              Download Resume <i className="fas fa-download" style={{ marginLeft: '8px' }}></i>
            </a>
            <a href="#contact" onClick={handleContactScroll} className="btn btn-outline">
              Get In Touch <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hero-image-wrapper">
          <div className="bg-blob"></div>
          <div className="profile-card">
            <img src={`${import.meta.env.BASE_URL}images/my.jpg`} alt="Haris Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
