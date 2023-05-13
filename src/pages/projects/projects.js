import React from 'react';
import "./projects.css";
import '../components/footer.css';
import Particles from './particles.jsx';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import zorkForDogs from './images/zorkForDogs.png';
import fairFare from './images/fairFare.png';
import employeeTracker from './images/employeeTracker.png';
import profile from './images/profile.png';
import readme from './images/readme.png';
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
        img: profile,
        description: "A command line application that creates an HTML page displaying team members.",
        technologies: "Node.js, Inquirer",
        button: "Watch Demo",
        link: "https://drive.google.com/file/d/19T7df7bgN-fr1euWY-5yfWXA7tfmdHGU/view",
        },
        {
        title: "README Generator",
        img: readme,
        description: "A command line application that creates a README.md template.",
        technologies: "Node.js, Inquirer",
        button: "Watch Demo",
        link: "https://drive.google.com/file/d/11XjkS0KC7A9QlDNQUtZt6K0Wgza5aUhY/view",
        },
        {
        title: "Work Day Scheduler",
        img: schedule,
        description: "A planner that allows the user to add, edit, and delete events.",
        technologies: "Javascript",
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
