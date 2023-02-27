import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import AboutMe from './pages/aboutMe/aboutMe.js';
import Contact from './pages/contact/contact.js';
import Homepage from './pages/homepage/homepage.js';
import Projects from './pages/projects/projects.js';
import Resume from './pages/resume/resume.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path='/#AboutMe' element={<AboutMe/>}/>
            <Route path='/#Contact' element={<Contact/>}/>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/#Projects' element={<Projects/>}/>
            <Route path='/#Resume' element={<Resume/>}/>
          </Routes>
          </div>
        <Footer />
      </Router>
      </>
  );
}

export default App;
