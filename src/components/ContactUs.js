
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any queries or support.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* Add more content specific to Contact Us */}
    </div>
  );
};

export default ContactUs;

