import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Artificial Intelligence Internship & Certification',
      organization: 'Acmegrade',
      duration: '11-Mar-2023 to 11-Apr-2023',
      description: 'Completed a 1-month internship and training in Artificial Intelligence, gaining hands-on experience with AI tools and technologies. Demonstrated technical ability, creativity, and strong problem-solving skills.'
    }
  ];

  return (
    <section className="certifications">
      <h2>Certifications & Internships</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h3>{cert.title}</h3>
            <p className="organization">Organization: {cert.organization}</p>
            <p className="duration">Duration: {cert.duration}</p>
            <p className="description">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;