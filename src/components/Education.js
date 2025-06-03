import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.E. in Computer Science',
      institution: 'Malnad College of Engineering, Hassan',
      year: '2026',
      score: 'CGPA: 7.61'
    },
    {
      degree: 'PUC',
      institution: 'Masters PU College, Hassan',
      year: '2022',
      score: '92%'
    },
    {
      degree: 'SSLC',
      institution: 'Royale Apollo International School',
      year: '2020',
      score: '91.04%'
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p>{item.score}</p>
            <p className="year">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;