import React from 'react';
import "./projects.css";
import Particles from './particles.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GridLayout from "react-grid-layout";
import zorkForDogs from './images/zorkForDogs.png'

function Project() {
    const projects = [
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut! \n Javascript",
        // technologies: "Javascript",
        link: "https://sclebron.github.io/zork-for-dogs/",
        },
        {
        title: "Real-Time Commodities",
        img: zorkForDogs,
        description: "ahfdisl includes technologies used",
        link: "https://sclebron.github.io/RealTimeCommodities/",
        },
        {
        title: "Fair Fare",
        img: zorkForDogs,
        description: "ahfdisl includes technologies used",
        link: "google.com",
        },
        {
        title: "The Registry",
        img: zorkForDogs,
        description: "ahfdisl includes technologies used",
        link: "google.com",
        }
    ]

    return (
        <div className="projectsContainer">
            <Particles />
            <div className="title">Projects</div>
            {projects.map((projects) => (
            <div className="projectCards">
                <Card style={{ width: '20rem' }}>
                    <Card.Body className="projectCard">
                        <Card.Title className="cardTitle">{projects.title}</Card.Title>
                        <Card.Img className="cardImg" src={projects.img} />
                        <Card.Text className="cardDescription">{projects.description}</Card.Text>
                        {/* <Button className="linkBtn" href={projects.link} target="_blank">Go to app</Button> */}
                        <a className="linkBtn" href={projects.link} target="_blank">Go to app</a>
                    </Card.Body>
                </Card>
            </div>
            ))}
        </div>
    );
}

export default Project;

//three columns
//two rows (overall six projects)
//centered