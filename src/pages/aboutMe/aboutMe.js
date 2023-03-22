import React from 'react';
import "./aboutMe.css";

function AboutMe() {
    return (
        <div className="container">
            <div className="title">About Me</div>
                <div className="bio">
                    <p>Hi! My name is Sophie LeBron and I'm a full-stack developer based in Denver, CO.</p>
                    <p>I currently work as a teaching assistant for the University of Utah Coding Boot Camp. I was a student in the University of Denver Coding Boot Camp from July-October 2022. During my time in the Boot Camp I learned HTML5, CSS3, Javascript, jQuery, Express.js, React.js, Node.js, MySQL, and MongoDB. I also learned how to collaborate with others to complete coding projects, as the Boot Camp involved three group projects. Prior to the Boot Camp I had no coding experience. In college I studied physical therapy, and up to two days before beginning the Boot Camp I was working as a rehab tech at an inpatient rehabilitation hospital. In my coding work I enjoy using my problem-solving skills, creativity, adaptability, and curiosity.</p>
                    <p>When I'm not coding, I like to spend my time skiing, hiking, traveling, cooking, playing piano, being active, learning new things, and being with my boyfriend and our dog, Peanut!</p>
                </div>
        </div>
    );
}

export default AboutMe;