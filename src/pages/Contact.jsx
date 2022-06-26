import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    discussion: "",
  });
  console.log(contact);

  const [token, setToken] = useState('')

  useEffect(() => {
    setToken("accessToken");
  }, []);

  const handleInputChange = (e) => {
    setContact((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const contactForm = (e) => {
    e.preventDefault();

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .post(
        "https://peniel-server.herokuapp.com/contact/api/contact-create/",
        contact,
        {headers}
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="volunteer" id="navbar">
      <div className="volunteer-banner">
        <h1>Contact Us </h1>
      </div>

      <div className="volunteer-container">
        <div className="volunteer-form">
          <h2>
            Want to chat? We'd love to hear from you! Get in touch with us and
            also get your questions answered.
          </h2>

          <form action="/action_page.php" onSubmit={contactForm}>
            <label htmlFor="fname">Name</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="first_name"
              value={contact.first_name}
              placeholder="First Name"
              required
            />
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="last_name"
              value={contact.last_name}
              placeholder="Last Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="email"
              value={contact.email}
              placeholder="Email Address"
              required
            />

            <label htmlFor="pnumber">Phone Number</label>
            <input
              onChange={handleInputChange}
              type="number"
              className="contact name"
              name="phone_number"
              value={contact.phone_number}
              placeholder="Phone Number"
              required
            />

            <label htmlFor="address">Address</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="address"
              value={contact.address}
              placeholder="Address"
              required
            />

            <label htmlFor="message">What would you like to discuss?</label>
            <textarea
              onChange={handleInputChange}
              name="discussion"
              value={contact.discussion}
              id="message"
              required
            ></textarea>

            <button className="volunteer-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
