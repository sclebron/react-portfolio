import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./projects.css";
import Particles from './particles.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import images
import zorkForDogs from './images/zorkForDogs.png'

function Project() {
    const projects = [
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut!",
        // technologies: "Javascript",
        link: "https://sclebron.github.io/zork-for-dogs/",
        },
        {
        title: "Real-Time Commodities",
        img: zorkForDogs,
        description: "ahfdisl includes technologies used",
        link: "google.com",
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
        <Row className="justify-content-center">
        <Col xs={12} md={6}>
            {projects.map((projects) => (
            <div className="projectCards">
                <Card style={{ width: '20rem' }}>
                    <Card.Body className="projectCard">
                        <Card.Title className="cardTitle">{projects.title}</Card.Title>
                        <Card.Img className="cardImg" src={projects.img} />
                        <Card.Text className="cardDescription">{projects.description}</Card.Text>
                        <Button className="linkBtn" variant="primary" href={projects.link}>Go to app</Button>
                    </Card.Body>
                </Card>
            </div>
            ))}
        </Col>
        </Row>
        </div>
    );
}

export default Project;

//have big projects shown in big cards in center of screen, maybe 3-4 of these, underneath in smaller cards have smaller projects like bootcamp activities. these cards will be much smaller and there should be arrows on each side to scroll through. display a few then can click on arrow to display next chunk of a few activites, etc.