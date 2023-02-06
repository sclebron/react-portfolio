import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from './components/footer/footer.js';
import header from './components/header/header.js';
import navBar from './components/navBar/navBar.js';
import aboutMe from './pages/aboutMe/aboutMe.js';
import contact from './pages/contact/contact.js';
import homepage from './pages/homepage/homepage.js';
import projects from './pages/projects/projects.js';
import resume from './pages/resume/resume.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <Router>
        <header />
        <div>
          <Routes>
            <Route path='aboutMe' element={<aboutMe/>}/>
            <Route path='contact' element={<contact/>}/>
            <Route path='homepage' element={<homepage/>}/>
            <Route path='projects' element={<projects/>}/>
            <Route path='resume' element={<resume/>}/>
          </Routes>
          </div>
        <footer />
      </Router>
  );
}

export default App;
