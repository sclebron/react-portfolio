import React from 'react';
import "./aboutMe.css";

function AboutMe() {
    return (
        <div className="container">
            <div className="title">About Me</div>
                <div className="bio">
                    <p>Hi! My name is Sophie LeBron and I'm a full-stack developer based in Denver, CO.</p>
                    <p>I currently work as a teaching assistant for the University of Utah Coding Boot Camp. I was a student in the University of Denver Coding Boot Camp from July-October 2022. During my time in the Boot Camp I learned *list technologies learned*. I also learned how to collaborate with others to complete coding projects, as the Boot Camp involved three group projects. Prior to the Boot Camp I had no coding experience; in college I studied with the intention of becoming a physical therapist, and up to two days before beginning the Boot Camp I was working as a rehab tech at an inpatient rehabilitation hospital.</p>
                    <p>When I'm not coding, I enjoy skiing, hiking, being active, spending time outside, spending time with my boyfriend and dog, Peanut, traveling, cooking, baking, yoga, pilates, running, playing piano, painting, reading, learning.</p>
                </div>
        </div>
    );
}

export default AboutMe;

/*three sections - opening intro line, work info, personal info*/