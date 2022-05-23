import React from "react";

const Contact = () => {
  return (
    <div className="volunteer" id="navbar">
      <div className="volunteer-banner">
        <h1>Contact Us </h1>
      </div>

      <div className="volunteer-container">
        <div className="volunteer-form">
          <h2>
            Want to chat? We'd love to hear from you! Get in touch in touch with
            us and also get your questions answered.
          </h2>

          <form action="/action_page.php">
            <label for="fname">Name</label>
            <input
              type="text"
              className="contact name"
              id="fname"
              name="fname"
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="contact name"
              id="lname"
              name="lname"
              placeholder="Last name"
              required
            />

            <label for="email">Email</label>
            <input
              type="text"
              className="contact name"
              name="email"
              placeholder="Email Address"
              required
            />

            <label for="pnumber">Phone Number</label>
            <input
              type="text"
              className="contact name"
              id="pnumber"
              placeholder="Phone Number"
              required
            />

            <label for="address">Address</label>
            <input
              type="text"
              className="contact name"
              name="address"
              placeholder="Address"
              required
            />

            <label for="message">What would you like to discuss?</label>
            <textarea name="message" id="message" required></textarea>

            <button className="volunteer-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
