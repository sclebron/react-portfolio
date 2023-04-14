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
        <form ref={form} onSubmit={sendEmail} className="contactForm">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
}

export default Contact;