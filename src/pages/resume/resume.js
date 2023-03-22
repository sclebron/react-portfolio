import React from 'react';
import './resume.css';
import resumeimg from './resume.png';
// import resume from './Sophie_LeBron_Resume.pdf';

function Resume () {
    return (
        <div>
            <div className="title">Resume</div>
            <img src={resumeimg} className="resumeimg" />
            {/* <a href={resume} download>
                <button className="resumedownload">Download Resume</button>
            </a> */}
        </div>
    );
}

export default Resume;