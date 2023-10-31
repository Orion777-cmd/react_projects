import React from 'react';
import './contact.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <CustomButton onClick={() => alert('Message Sent!')}>Send Message</CustomButton>
      </form>
    </div>
  );
};

export default ContactUs;