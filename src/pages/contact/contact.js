import React from 'react';
import './contact.css';
import './emailForm.js';
import Particles from './particles.jsx';

function Contact() {
    return (
        <div className="contact">
            <Particles />
            <div class="title">Contact</div>
                <div className="formContainer">
                    <emailForm />
                </div>
        </div>
    )
}

export default Contact;