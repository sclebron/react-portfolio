import React from 'react';
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMongodb,
    DiReact,
    DiMysql,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
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
                    I work as a teaching assistant for the University of Utah Coding Boot Camp, which teaches HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, MySQL, and MongoDB. Currently, I am working on some MERN personal projects, including an app to plan and document trips to National Parks! In my coding work I enjoy using my problem-solving skills, creativity, adaptability, and curiosity. <br />
                    <br />
                    When I'm not coding, I like to spend my time skiing, hiking, traveling, cooking, painting, being active, learning new things, and being with my boyfriend and our dog, Peanut!
                </div>
                <div className="technologies">
                    <div className="iconList">
                        <DiHtml5 className="icons" />
                        HTML 5
                    </div>
                <div className="iconList">
                    <DiCss3 className="icons" />
                    CSS 3
                </div>
                <div className="iconList">
                    <DiJsBadge className="icons" />
                    JavaScript
                </div>
                <div className="iconList">
                    <SiExpress className="icons" />
                    ExpressJS
                </div>
                <div className="iconList">
                    <DiReact className="icons" />
                    React
                </div>
                <div className="iconList">
                    <DiNodejsSmall className="icons" />
                    NodeJS
                </div>
                <div className="iconList">
                    <DiMysql className="icons" />
                    MySQL
                </div>
                <div className="iconList">
                    <DiMongodb className="icons" />
                    MongoDB
                </div>
        </div>
    </div>
    );
}

export default AboutMe;