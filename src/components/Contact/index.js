import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';
import '../Button/Button.css'


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        const formValue = capitalizeFirstLetter(e.target.name)
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(formValue + ' is required.');
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact">
            <div className="contact-div">
                <div className="contact-wrapper">
                    <h1>Contact Me</h1>
                    <form id="contact-form" className="contact-container" onSubmit={handleSubmit}>

                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" onBlur={handleChange} defaultValue={formState.name} />

                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" onBlur={handleChange} defaultValue={formState.email} />

                        <label htmlFor="message">Message:</label>
                        <textarea name="message" row="5" onBlur={handleChange} defaultValue={formState.message} />

                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="sumbit" className="btn--outline">Submit</button>
                    </form>
                </div>
            </div>


        </section>
    );
}

export default ContactForm;