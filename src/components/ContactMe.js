import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-me">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:yodhanjn6@gmail.com">yodhanjn6@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/yodhan-j-n-539718252" target="_blank" rel="noopener noreferrer">
            Profile
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/yodhanjn" target="_blank" rel="noopener noreferrer">
            Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;