import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./projects.css";
import './particles.jsx';

function Project() {
    const projects = [
        {
        title: "Real-Time Commodities",
        description: "ahfdisl",
        // img: Real-TimeCommodities,
        link: "google.com",
        }
    ]

function Projects() {
    return (
        <div className="container">
            <Particles />
            <div className="title">Projects</div>
                <div className="bio">
                <Row className="justify-content-center">
        <Col xs={12} md={6}>
            {projects.map((projects) => (
            <div className="projectCards">
                <div className="card">
                {/* <img
                    className="card-img-top"
                    src={projects.img}
                    alt="Project screenshot"
                /> */}
                <div className="card-body">
                    <h5 className="card-title">{projects.title}</h5>
                    <p className="card-text">{projects.description}</p>
                    <a href={projects.repo} target="_blank" className="card-link">
                    Github
                    </a>
                    <a
                    href={projects.link}
                    target="_blank"
                    className="card-link"
                    >
                    Deploy
                    </a>
                </div>
                </div>
            </div>
            ))}
        </Col>
        </Row>
                </div>
        </div>
    );
}

}

export default Project;

//have big projects shown in big cards in center of screen, maybe 3-4 of these, underneath in smaller cards have smaller projects like bootcamp activities. these cards will be much smaller and there should be arrows on each side to scroll through. display a few then can click on arrow to display next chunk of a few activites, etc.