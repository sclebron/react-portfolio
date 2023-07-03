import React, { useRef } from 'react';
import './contact.css';
import Particles from './particles.jsx';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_03cqjd4', 'template_w1momlc', form.current, 'exWicqHUee0tIYOXK')
        .then((result) => {
            e.target.reset();
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        try {
            alert('Your message was sent!');
        } catch (e) {
            alert(`Message send failed! ${e.message}`);
        }
    }

    const displayContactForm = () => {
        
    }

return <div className="contactContainer">
        <Particles />
        <div class="title">Contact</div>
        <div className="contactInfo">
            <div className="infoTitle">Contact Info</div>
            <div className="info">
                <div className="email">Email: sophieclebron@gmail.com</div>
                <div className="phone">Phone: (505)-901-7187</div>
                <div className="city">Denver, CO</div>
                <button onClick={displayContactForm}>Send Me A Message!</button>
            </div>
        </div>
        {/* <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
                <h2 className="contactTitle">Reach out!</h2>
                <input type="text" name="user_name" className="input" placeholder="Name"/>
                <input type="email" name="user_email" className="input" placeholder="Email"/>
                <textarea name="message" className="textarea" placeholder="Your Message"/>
                <input type="submit" value="Submit" className="input" />
            </form>
        </div> */}
    </div>
}

export default Contact;

/*
email validation
check that name, email, and message are filled in before sending email
check that functionality works
*/