import React from 'react';
import './resume.css';

function Resume () {
    return (
        <div>
            <div className="title">Resume</div>
            <img src={resumeimg} className="resumeimg" />
            <a href={resume} download>
                <button className="resumedownload">Click to Download</button>
            </a>
        </div>
    );
}

export default Resume;