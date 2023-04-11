import React from 'react';
import './homepage.css';
import Particles from './homepageParticles.jsx';

function Homepage() {
    return (
        <div className="home">
            <Particles />
            <text className="text">
                Hello, I'm <mark className="name">Sophie LeBron.</mark> <br />
                I'm a full stack developer.
            </text>
        </div>
    );
}

export default Homepage;