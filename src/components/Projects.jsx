import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const projectsData = [
    {


      id: 1,
      title: 'Ride Booking Platform',
      image: '/images/p5.png',
      desc: 'Modern web application featuring secure authentication, pickup and destination selection, real-time fare calculation, online payment processing, ride management, trip history, notifications, and role-based access control for users, drivers, and administrators.',
      tags: ['React', 'DRF', 'JsPostgreSQL', 'Razorpay',],
      github: '#',
      live: '#',
    },
    {

      id: 2,
      title: 'Property management and rent collection portel',
      image: '/images/p4.png',
      desc: 'Smart property leasing and management system featuring property listings, tenant management, rent collection, maintenance tracking, and role-based access control.',
      tags: ['React', 'DRF', 'PostgreSQL'],
      github: '#',
      live: '#',

    },
    {
      id: 3,
      title: 'Job Recruitment Platform', // matching original spelling from HTML
      image: '/images/job project.png',
      desc: 'Full-stack job portal with separate user and admin dashboards. Users can browse and apply for jobs, while administrators can manage job listings and applications.',
      tags: ['Django', 'Html', 'PostgreSQL', 'Bootstrap'],
      github: '#',
      live: '#',

    },
    {
      id: 4,
      title: 'Nike Landing Page Clone',
      image: '/images/pro1.png',
      desc: 'Responsive landing page inspired by Nike, featuring modern UI design, product showcases, and mobile-friendly layouts.',
      tags: ['HTML', 'CSS', 'JavaScript',],
      github: '#',
      live: '#',

    },
    {
      id: 5,
      title: 'Personal Portfolio',
      image: '/images/portfolio.png',
      desc: 'Personal portfolio website showcasing projects, skills, and experience with responsive design and smooth animations.',
      tags: ['Html', 'Css', 'Js'],
      github: '#',
      live: '#',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(2); // fallback
  const trackRef = useRef(null);

  const getSlideOffset = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.querySelector('.project-card-modern');
    if (!card) return 0;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 32;
    return cardWidth + gap;
  };

  const updateSlidePosition = (index) => {
    if (trackRef.current) {
      const offset = getSlideOffset();
      trackRef.current.style.transform = `translateX(-${index * offset}px)`;
    }
  };

  const isMobileSlider = () => window.matchMedia('(max-width: 600px)').matches;

  useEffect(() => {
    const handleResize = () => {
      if (isMobileSlider()) {
        if (trackRef.current) trackRef.current.style.transform = 'none';
        setMaxIndex(projectsData.length - 1);
        return;
      }

      updateSlidePosition(currentIndex);

      if (trackRef.current) {
        const containerWidth = trackRef.current.parentElement.getBoundingClientRect().width;
        const offset = getSlideOffset();
        if (offset > 0) {
          const visible = Math.round(containerWidth / offset) || 1;
          const calculatedMaxIndex = Math.max(0, projectsData.length - visible);
          setMaxIndex(calculatedMaxIndex);
        }
      }
    };

    // Delay calculation slightly to allow layout to settle
    const timeoutId = setTimeout(handleResize, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  const slidePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      updateSlidePosition(newIndex);
    }
  };

  const slideNext = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      updateSlidePosition(newIndex);
    }
  };

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex);
    updateSlidePosition(dotIndex);
  };

  // Generate dot buttons dynamically
  const dotCount = maxIndex + 1;

  return (
    <section id="projects">
      <div className="section-inner">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-slider-container">
        {/* Left Arrow */}
        <button
          onClick={slidePrev}
          className="slider-btn prev-btn"
          disabled={currentIndex === 0}
          aria-label="Previous Project"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Slider Wrapper */}
        <div className="slider-wrapper">
          <div className="projects-track" ref={trackRef}>
            {projectsData.map((project, idx) => (
              <div key={idx} className="project-card-modern">
                <div className="project-thumb">
                  <img src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.substring(1) : project.image}`} alt={project.title} />
                </div>
                <div className="project-body">
                  <div className="project-header-row">
                    <span className="p-title">{project.title}</span>
                    <div className="p-links">
                      <a href={project.github} aria-label="GitHub Repository">
                        <i className="fas fa-code-branch"></i>
                      </a>
                      <a href={project.live} aria-label="Live Demo">
                        <i className="fas fa-globe"></i>
                      </a>
                    </div>
                  </div>
                  <p className="p-desc">{project.desc}</p>
                  <div className="p-tags">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="p-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={slideNext}
          className="slider-btn next-btn"
          disabled={currentIndex >= maxIndex}
          aria-label="Next Project"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

        {/* Pagination Dots */}
        <div className="slider-dots">
          {Array.from({ length: dotCount }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
