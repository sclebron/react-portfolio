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

        // const onSubmit = async (event) => {
        //     event.preventDefault();
        //     try {
        //         alert('Your registration was successfully submitted!');
        //     } catch (e) {
        //         alert(`Registration failed! ${e.message}`);
        //     }
    };

return <div className="contactContainer">
        <Particles />
        <div class="title">Contact</div>
        <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
                <h2 className="contactTitle">Reach out!</h2>
                <input type="text" name="user_name" className="input" placeholder="Name"/>
                <input type="email" name="user_email" className="input" placeholder="Enter email"/>
                <textarea name="message" className="textarea" placeholder="Your Message"/>
                <input type="submit" value="Submit" className="input" />
            </form>
        </div>
    </div>
}

export default Contact;