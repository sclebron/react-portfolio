import React from 'react';
import "./aboutMe.css";
import Particles from './particles.jsx';

function AboutMe() {
    return (
        <div className="aboutMeContainer">
            <Particles />
            <div className="title">About Me</div>
                <div className="bio">
                    Hi! My name is Sophie and I'm a full stack developer based in Denver, CO. <br />
                    <br />
                    I currently work as a teaching assistant for the University of Utah Coding Boot Camp, which teaches HTML5, CSS3, Javascript, jQuery, Express.js, React.js, Node.js, MySQL, and MongoDB. (add sentence about group projects) I am working on some MERN personal projects, including an app to . In my coding work I enjoy using my problem-solving skills, creativity, adaptability, and curiosity. <br />
                    <br />
                    When I'm not coding, I like to spend my time skiing, hiking, traveling, cooking, playing piano, being active, learning new things, and being with my boyfriend and our dog, Peanut!
                </div>
        </div>
    );
}

export default AboutMe;