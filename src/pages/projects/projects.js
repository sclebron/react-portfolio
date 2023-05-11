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

function Project() {
    const projects = [
        {
        title: "Fair Fare",
        img: fairFare,
        description: "A restaurant review site that allows you to review individual dishes.",
        technologies: "Javascript, MYSQL",
        button: "Visit Site",
        link: "https://the-foo-d-s-production.up.railway.app/",
        },
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut!",
        technologies: "Javascript",
        button: "Visit Site",
        link: "https://sclebron.github.io/zork-for-dogs/",
        },
        {
        title: "README Generator",
        img: zorkForDogs,
        description: "View commodities, currency pricing, and news articles from a timeframe.",
        technologies: "Javascript",
        button: "Visit Site",
        link: "https://sclebron.github.io/RealTimeCommodities/",
        },
        {
        title: "Work Day Schedule",
        img: zorkForDogs,
        description: "heioa",
        technologies: "Javascript, MongoDB, React",
        button: "Visit Site",
        link: "google.com",
        },
        {
        title: "Employee Tracker",
        img: zorkForDogs,
        description: "hfdiadis",
        technologies: "ahfieo",
        button: "Watch Demo",
        link: "google.com",
        },
        {
        title: "Team Profile Generator",
        img: zorkForDogs,
        description: "hfidoap",
        technologies: "ahfieo",
        button: "Watch Demo",
        link: "google.com",
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
