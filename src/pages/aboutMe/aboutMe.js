import React from 'react';
import "./aboutMe.css";

function AboutMe() {
    return (
        <div className="container">
            <div className="title">About Me</div>
                <p className="bio">
                    Hi! My name is Sophie and I'm a full-stack developer based in Denver, CO. <br className="break"/>
                    I currently work as a teaching assistant for the University of Utah Coding Boot Camp. I was a student in the University of Denver Coding Boot Camp from July-October 2022. I learned HTML5, CSS3, Javascript, jQuery, Express.js, React.js, Node.js, MySQL, and MongoDB, as well as how to collaborate with others to complete coding projects. Prior to the Boot Camp I had no coding experience. In college I studied physical therapy, and up to two days before beginning the Boot Camp I was working as a rehab tech at an inpatient rehabilitation hospital. In my coding work I enjoy using my problem-solving skills, creativity, adaptability, and curiosity. <br className="break"/>
                    When I'm not coding, I like to spend my time skiing, hiking, traveling, cooking, playing piano, being active, learning new things, and being with my boyfriend and our dog, Peanut!
                </p>
        </div>
    );
}

export default AboutMe;