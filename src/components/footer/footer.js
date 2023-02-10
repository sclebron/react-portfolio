import React from 'react';
import './footer.css';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

function Footer() {
    return (
        <div className='footer'>
            <a 
                href="https://github.com/sclebron"
                target="_blank"
                className="footerLink"
            >
                <AiOutlineGithub className="footerIcon"/>
            </a>
            <a
                href="https://www.linkedin.com/in/sophielebron/"
                target="_blank"
                className="footerLink"
            >
                <AiOutlineLinkedin className="footerIcon"/>
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sophieclebron@gmail.com"
                target="_blank"
                className="footerLink"
            >
                <AiOutlineMail className="footerIcon"/>
            </a>
        </div>
    );
}

export default Footer;