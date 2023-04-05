import React from 'react';
import './homepage.css';

function Homepage() {
    return (
        <div className="home">
            {/* <h1 className="name">Hello, I'm <mark className="name2">Sophie LeBron</mark>.</h1>
            <h2 className="title">I'm a full stack developer.</h2> */}
            <text className="text">
                Hello, I'm Sophie LeBron.{"\n"} 
                I'm a full stack developer.
            </text>
        </div>
    );
}

export default Homepage;