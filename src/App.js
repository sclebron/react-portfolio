import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
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
        <Header />
        <div>
          <Routes>
            <Route path='/aboutMe' element={aboutMe}/>
            <Route path='/contact' component={contact}/>
            <Route path='/homepage' component={homepage}/>
            <Route path='/projects' component={projects}/>
            <Route path='/resume' component={resume}/>
          </Routes>
          </div>
        <Footer />
      </Router>
  );
}

export default App;
