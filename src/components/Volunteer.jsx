import React, { useState } from "react";
import ToastNotification from "./ToastNotification";
import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

const Volunteer = () => {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    msg: "",
  });

  const [volunteer, setVolunteer] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    date_of_birth: "",
    skills: "",
    salvation_story: "",
    Volunteer_reason: "",
  });

  const handleInputChange = (e) => {
    setVolunteer((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    setLoading(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "volunteer",
        ...volunteer,
      }),
    })
      .then((res) => {
        setLoading(false);
        setMessage({
          type: "success",
          msg: res.message,
        });
        setTimeout(() => {
          setMessage({
            type: "",
            msg: "",
          });
          setSubmit(false);
        }, 8000);

        setVolunteer({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          address: "",
          date_of_birth: "",
          skills: "",
          salvation_story: "",
          Volunteer_reason: "",
        });
      })

      .catch((err) => {
        setSubmit(false);
        setLoading(false);
        setMessage({
          type: "error",
          msg: err.message,
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
    <div className="volunteer">
      {loading && <Spinner />}
      <div className="volunteer-banner">
        <h1>Volunteer </h1>
      </div>
      {message.msg !== "" && (
        <ToastNotification
          type={message.type}
          text={
            message.type === "error"
              ? message.msg
              : "Thanks for volunteering! We'll reach out shortly."
          }
          onclick={handleCloseNotification}
          icon={message.type === "success" ? faCheckCircle : faWarning}
        />
      )}
      {submit}

      <div className="volunteer-container">
        <div className="volunteer-form">
          <h2>
            Fill this form to join the fast growing community of volunteers
            shining the light of Jesus to adolescents in Nigeria.
          </h2>

          <form
            name="volunteer"
            action="/"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="volunteer"></input>
            <div hidden>
              <input name="bot-field" />
            </div>

            <label htmlFor="fname">Name</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="first_name"
              placeholder="First Name"
              value={volunteer.first_name}
              required
            />
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="last_name"
              value={volunteer.last_name}
              placeholder="Last Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="email"
              value={volunteer.email}
              placeholder="Email Address"
              required
            />

            <label htmlFor="pnumber">Phone Number</label>
            <input
              onChange={handleInputChange}
              value={volunteer.phone_number}
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              className="contact name"
              required
            />

            <label htmlFor="address">Address</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="address"
              value={volunteer.address}
              placeholder="Address"
              required
            />

            <div className="volunteer-form-flex">
              <div className="volunteer-flex-1">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  onChange={handleInputChange}
                  value={volunteer.date_of_birth}
                  type="date"
                  name="date_of_birth"
                  className="contact name"
                  required
                />
              </div>

              <div className="volunteer-flex-2">
                <label htmlFor="dob">Skills</label>
                <select
                  onChange={handleInputChange}
                  value={volunteer.skills}
                  name="skills"
                  className="contact name"
                >
                  <option value="department">Departments</option>
                  <option value="prison outreach">Prison Outreach</option>
                  <option value="street outreach">Street Outreach</option>
                  <option value="photography">Photography</option>
                  <option value="grants / proposal writing">
                    Grants / Proposal Writing
                  </option>
                  <option value="communication">Communication</option>
                </select>
              </div>
            </div>

            <label htmlFor="message">What is your salvation story?</label>
            <textarea
              onChange={handleInputChange}
              name="salvation_story"
              value={volunteer.salvation_story}
              id="message"
              required
            ></textarea>

            <label htmlFor="message">Why do you want to volunteer?</label>
            <textarea
              onChange={handleInputChange}
              name="Volunteer_reason"
              value={volunteer.Volunteer_reason}
              id="message"
              required
            ></textarea>
            <div data-netlify-recaptcha="true"></div>

            <button type="submit" className="volunteer-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
