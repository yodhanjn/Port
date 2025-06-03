import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yodhan J N</h1>
      </header>
      <main>
        <AboutMe />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <ContactMe />
      </main>
      <footer>
        <p>© 2025 Yodhan J N. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;