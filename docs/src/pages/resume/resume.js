import React from 'react';
import './resume.css';
import resumeimg from './resume.png';
import resume from './Sophie_LeBron_Resume.pdf';
import Particles from './particles.jsx';

function Resume () {
    return (
        <div className="resumeContainer">
            <Particles />
            <div className="title">Resume</div>
            <img src={resumeimg} className="resumeimg" />
            <div className="resumeDownload">
                <a href={resume} download>
                    <button className="btn btn-outline-light">Download Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Resume;