import React from 'react';
import "./projects.css";
import Particles from './particles.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import zorkForDogs from './images/zorkForDogs.png';
import fairFare from './images/fairFare.png';
import employeeTracker from './images/employeeTracker.png';
import schedule from './images/schedule.png';

function Project() {
    const projects = [
        {
        title: "Fair Fare",
        img: fairFare,
        description: "A restaurant review site that allows you to review individual dishes.",
        technologies: "Javascript, MySQL, Express Handlebars",
        button: "Visit Site",
        link: "https://the-foo-d-s-production.up.railway.app/",
        },
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut!",
        technologies: "Javascript, jQuery",
        button: "Visit Site",
        link: "https://sclebron.github.io/zork-for-dogs/",
        },
        {
        title: "Employee Tracker",
        img: employeeTracker,
        description: "A command line application for tracking and adding employees.",
        technologies: "Node.js, Inquirer, MySQL",
        button: "Watch Demo",
        link: "https://drive.google.com/file/d/1WuRLfl9s8N_UCaedx0487WIIEZAjlplt/view",
        },
        {
        title: "Team Profile Generator",
        img: zorkForDogs,
        description: "heioa",
        technologies: "Javascript, MongoDB, React",
        button: "Watch Demo",
        link: "google.com",
        },
        {
        title: "README Generator",
        img: zorkForDogs,
        description: "hfdiadis",
        technologies: "ahfieo",
        button: "Watch Demo",
        link: "google.com",
        },
        {
        title: "Work Day Scheduler",
        img: schedule,
        description: "hfidoap",
        technologies: "ahfieo",
        button: "Visit Site",
        link: "https://sclebron.github.io/work-day-schedule/",
        }
    ]

    return (
        <div className="projectsContainer">
            <Particles />
            <div className="title">Projects</div>
            <Container className="projectCards">
                <Row className="row">
                {projects.map((projects) => (
                    <Col className="column">
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">{projects.title}</Card.Title>
                                <Card.Img className="cardImg" src={projects.img} />
                                <Card.Text className="cardDescription">{projects.description} <br /> {projects.technologies}</Card.Text>
                                <a className="linkBtn" href={projects.link} target="_blank">{projects.button}</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Project;
