// import React from 'react';
// import './contact.css';
// import Particles from './particles.jsx';

// function Contact() {
//     return (
//         <div className="contact">
//             <Particles />
//             <div class="title">Contact</div>
//                 <div className="formContainer">
                    
//                 </div>
//         </div>
//     )
// }

// export default Contact;

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
    };

return <div className="contactContainer">
        <Particles />
        <div class="title">Contact</div>
        <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
                <label className="label">Name</label>
                <input type="text" name="user_name" className="input" />
                <label className="label">Enter Email</label>
                <input type="email" name="user_email" className="input" />
                <label className="label">Your Message</label>
                <textarea name="message" className="textarea" />
                <input type="submit" value="Submit" className="input" />
            </form>
        </div>
    </div>
}

export default Contact;