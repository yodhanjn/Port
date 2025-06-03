import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'Python',
    'Java',
    'C++',
    'HTML & CSS',
    'SQL',
    'React',
    'Excel',
    'PowerPoint',
    'Windows',
    'Ubuntu'
  ];

  return (
    <section className="skills">
      <h2>🛠 Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;