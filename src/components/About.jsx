const About = () => {
  const services = [
    {
      id: 1,
      icon: 'fas fa-code',
      title: 'Frontend Development',
      desc: 'Modern and responsive web interfaces.',
    },
    {
      id: 2,
      icon: 'fas fa-server',
      title: 'Backend Development',
      desc: 'Secure and scalable server-side solutions.',
    },
    {
      id: 3,
      icon: 'fas fa-plug',
      title: 'REST API Development',
      desc: 'Connecting applications through powerful APIs.',
    },
    {
      id: 4,
      icon: 'fas fa-database',
      title: 'Database Management',
      desc: 'Efficient data storage and management.',
    },
  ];

  return (
    <section id="about">
      <div className="section-inner about-content-minimal">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-text-block">
          <p>
            I am a Full-Stack Developer specializing in frontend and backend development.
            I enjoy building modern, responsive, and user-friendly web applications with a focus on clean code and simple solutions.
          </p>
          <p>
            I am passionate about learning new technologies, solving real-world problems,
            and creating applications that provide a great user experience. Feel free to explore my projects
            and get in touch if you'd like to collaborate.
          </p>
        </div>

        <div className="about-services-row">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <i className={`${service.icon} service-icon`}></i>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
