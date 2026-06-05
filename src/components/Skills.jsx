const Skills = () => {
  const frontendSkills = [
    { name: 'HTML / CSS', percentage: 90 },
    { name: 'JavaScript (ES6+)', percentage: 75 },
    { name: 'React', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 85 },
    { name: 'Bootstrap', percentage: 75 },
  ];

  const backendSkills = [

    { name: 'Python', percentage: 80 },
    { name: 'Django', percentage: 85 },
    { name: 'Django REST Framework', percentage: 75 },
    { name: 'PostgreSQL', percentage: 75 },
    { name: 'Git / GitHub', percentage: 80 },


  ];

  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
        {/* Frontend Skill Card */}
        <div className="skill-card">
          <h3>
            <i className="fas fa-code"></i> Front-End Development
          </h3>
          {frontendSkills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend Skill Card */}
        <div className="skill-card">
          <h3>
            <i className="fas fa-server"></i> Back-End Development
          </h3>
          {backendSkills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
