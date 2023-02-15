import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import AboutMe from './pages/aboutMe/AboutMe.js';
import Contact from './pages/contact/Contact.js';
import Homepage from './pages/Homepage/Homepage.js';
import Projects from './pages/Projects/Projects.js';
import Resume from './pages/Resume/Resume.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path='/AboutMe' element={AboutMe}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/Homepage' component={Homepage}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/Resume' component={Resume}/>
          </Routes>
          </div>
        <Footer />
      </Router>
  );
}

export default App;
