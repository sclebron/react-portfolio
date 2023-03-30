import React, { useState, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

function emailForm() {
    const form = useRef();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
        setEmail(inputValue);
    } else if (inputType === "name") {
        setName(inputValue);
    } else {
        setMessage(inputValue);
    }
    };

    const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
        setErrorMessage("Email or name not entered correctly!");
        return;
    }

    setName("");
    setMessage("");
    setEmail("");
    const messageSent = document.querySelector(".messageSent");
    if (email && name && message) {
        messageSent.classList.remove("none");
        messageSent.classList.add("show");
        messageSent.textContent = "Message Sent!";
    }
    emailjs
        .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
        )
        .then(
        (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
        );
    e.target.reset();
    };

    return (
    <>
        <div className="contactPage">
        <form className="form" ref={form}>
            <h2>Reach Out!</h2>
            <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            />
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            />
            <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Message"
            />
            <button
            className="submitButton btn-outline-light btn"
            type="button"
            onClick={handleFormSubmit}
            >
            Submit
            </button>
            <p className="messageSent">Message Sent!</p>
            {errorMessage && <p className="error-text">{errorMessage}</p>}
        </form>
        </div>
    </>
    );
}

export default emailForm;