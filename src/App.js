import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from './components/footer/footer.js';
import navBar from './components/navBar/navBar.js';
import aboutMe from './pages/aboutMe/aboutMe.js';
import contact from './pages/contact/contact.js';
import homepage from './pages/homepage/homepage.js';
import projects from './pages/projects/projects.js';
import resume from './pages/resume/resume.js';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <homepage>
          <Routes>
            
          </Routes>
        </homepage>
      </Router>
    </>
  );
}

export default App;
