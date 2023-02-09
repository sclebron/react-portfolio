import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from './components/footer/footer.js';
import header from './components/header/header.js';
import aboutMe from './pages/aboutMe/aboutMe.js';
import contact from './pages/contact/contact.js';
import homepage from './pages/homepage/homepage.js';
import projects from './pages/projects/projects.js';
import resume from './pages/resume/resume.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <header />
        <div>
          <Routes>
            <Route path='/aboutMe' component={aboutMe}/>
            <Route path='/contact' component={contact}/>
            <Route path='/homepage' component={homepage}/>
            <Route path='/projects' component={projects}/>
            <Route path='/resume' component={resume}/>
          </Routes>
          </div>
        <footer />
      </Router>
    </>
  );
}

export default App;
