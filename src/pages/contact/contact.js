import React from 'react';
import './contact.css';
import emailForm from './emailForm.js'
import '.../components/particles/particles.jsx';

function Contact() {
    return (
        <div className="contact">
            <Particles />
            <div class="title">Contact</div>
                <div>
                    <emailForm/>
                </div>
        </div>
    )
}

export default Contact;