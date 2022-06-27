import React, { useState } from "react";
import axios from "axios";
import ToastNotification from "../components/ToastNotification";
import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    msg: "",
  });

  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    discussion: "",
  });
  console.log(contact);

  const handleInputChange = (e) => {
    setContact((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const contactForm = (e) => {
    e.preventDefault();
    setSubmit(true);

    axios
      .post(
        "https://peniel-server.herokuapp.com/contact/api/contact-create/",
        contact
      )
      .then((res) => {
        setMessage({
          type: "success",
          msg: res.data.message,
        });
        setTimeout(() => {
          setMessage({
            type: "",
            msg: "",
          });
          setSubmit(false);
        }, 3000);

        setContact({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          address: "",
          discussion: "",
        });
      })
      .catch((err) => {
        setSubmit(false);
        setMessage({
          type: "error",
          msg: err.response.data.message,
        });

        setTimeout(() => {
          setMessage({
            type: "",
            msg: "",
          });
        }, 8000);
      });
  };

  const handleCloseNotification = () => {
    setMessage({
      type: "",
      msg: "",
    });
  };

  return (
    <div className="volunteer" id="navbar">
      <div className="volunteer-banner">
        <h1>Contact Us </h1>
      </div>

      {message.msg !== "" && (
        <ToastNotification
          type={message.type}
          text={
            message.type === "error"
              ? message.msg
              : "Thank you for your feedback. God bless you!"
          }
          onclick={handleCloseNotification}
          icon={message.type === "success" ? faCheckCircle : faWarning}
        />
      )}
      {submit}

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

            <button type="submit" className="volunteer-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
