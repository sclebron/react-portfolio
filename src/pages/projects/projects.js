import React from 'react';
import "./projects.css";
import Particles from './particles.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import zorkForDogs from './images/zorkForDogs.png'

function Project() {
    const projects = [
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut! \n Javascript",
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
                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                    <MDBCol>
                    <MDBCard style={{ width: '20rem' }}>
                        <MDBCardBody className="projectCard">
                            <MDBCardTitle className="cardTitle">{projects.title}</MDBCardTitle>
                            <MDBCardImg className="cardImg" src={projects.img} />
                            <MDBCardText className="cardDescription">{projects.description}</MDBCardText>
                            <a className="linkBtn" href={projects.link} target="_blank">Go to app</a>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
            ))}
        </div>
    );
}

export default Project;