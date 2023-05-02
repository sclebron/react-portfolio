import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import NavBar from './components/navBar/navBar.js';
import AboutMe from './pages/aboutMe/aboutMe.js';
import Contact from './pages/contact/contact.js';
import Homepage from './pages/homepage/homepage.js';
import Projects from './pages/projects/projects.js';
import Resume from './pages/resume/resume.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
        <Routes>
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/react-portfolio/' element={<Homepage/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
