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
        description: "A restaurant review site that allows you to review individual dishes. \n Javascript, MySQL",
        link: "https://the-foo-d-s.netlify.app",
        },
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut! \n Javascript",
        link: "https://sclebron.github.io/zork-for-dogs/",
        },
        {
        title: "Real-Time Commodities",
        img: zorkForDogs,
        description: "View commodities and currency pricing beside relevant news articles from a particular timeframe. \n Javascript",
        link: "https://sclebron.github.io/RealTimeCommodities/",
        },
        {
        title: "The Registry",
        img: zorkForDogs,
        description: "Javascript, MongoDB, React",
        link: "google.com",
        },
        {
        title: "National Parks",
        img: zorkForDogs,
        description: "Javascript, MongoDB, React",
        link: "google.com",
        },
        {
        title: "Ski Resorts Reviews",
        img: zorkForDogs,
        description: "Javascript, MongoDB, React",
        link: "google.com",
        }
    ]

    return (
        <div className="projectsContainer">
            <Particles />
            <div className="title">Projects</div>
            <Container className="projectCards">
                <Row className="d-flex justify-content-center">
                {projects.map((projects) => (
                    <Col xs="4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={projects.img} />
                            <Card.Body>
                                <Card.Title>{projects.title}</Card.Title>
                                <Card.Text>{projects.description}</Card.Text>
                                <Button variant="primary" href={projects.link} target="_blank">Visit site</Button>
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
