import React from 'react';
import './resume.css';
import resumeimg from './resume.png';
import resume from './Sophie_LeBron_Resume.pdf';
import '../components/particles/Particles.jsx';

function Resume () {
    return (
        <div className="resume-container">
            <Particles />
            <div className="title">Resume</div>
            <img src={resumeimg} className="resumeimg" />
            <a href={resume} download>
                <button className="btn btn-outline-light">Download Resume</button>
            </a>
        </div>
    );
}

export default Resume;