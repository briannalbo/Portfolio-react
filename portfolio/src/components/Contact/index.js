import React, { useState } from 'react';
import '../../App.css';

//function to render the contact page
function Contact() {
  //usestate for contact form
  const [formState, setFormState] = useState({
    //sets form values to empty strings
    name: '',
    email: '',
    message: '',
  });
//uses usetate to send error message if form criteria is not met
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  //function to handle contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
//function to handle proper form input from user and establish error messages as needed 
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = (e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
//will return the html  content for the contact form/page
  return (
    <section id='contact-box'>
      <h4>Kindly submit any questions or inquiries using the form below.</h4>
      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="your message here..."
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
//exports contact function && it is used in the app.js file 
export default Contact;