import React from 'react';
import "./aboutMe.css";

// function AboutMe() {
//     return (
//         <div className="container">
//             <div className="header">About Me</div>
//                 <div className="bio">
//                     <p></p>
//                 </div>
//         </div>
//     )
// }

function AboutMe() {
    return (
      <div className="container fade-in-top">
        <div className="header">About Me</div>
        <div className="aboutBio">
          <p>
            Hello, and welcome! My name is Dylan, and I am a full-stack web
            developer.
          </p>
          <p>
            About me! Over the last four years, I worked as an Occupational
            Therapist primarily in settings such as an inpatient acute hospital,
            an assisted living facility, and a dementia care unit. Fast forward, I
            decided to make a significant career transition from the healthcare
            industry to Denver University's Coding Bootcamp. This allowed me to
            connect my interpersonal skills with my interests in technology,
            innovation, building and creating.
          </p>
          <p>
            Outside of work, you can find me making the most of every season here
            in Colorado: skiing, running, hockey, camping, and most recently,
            biking. I am always open to collaborating with others on projects.
            Feel free to reach out to connect on any platform!
          </p>
        </div>
        </div>
    );
  }
  

export default AboutMe;