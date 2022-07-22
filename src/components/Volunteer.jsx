import React, { useState } from "react";
import axios from "axios";
import ToastNotification from "./ToastNotification";
import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";

const Volunteer = () => {
  const [submit, setSubmit] = useState(false);
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
    story: "",
    Volunteer_reason: "",
  }); 
  console.log(volunteer);

  const handleInputChange = (e) => {
    setVolunteer((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const volunteerForm = (e) => {
    e.preventDefault();
    setSubmit(true);

    axios
      .post(
        "https://peniel-server.herokuapp.com/volunteer/api/volunteer-create/",
        volunteer
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

        setVolunteer({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          address: "",
          date_of_birth: "",
          skills: "",
          story: "",
          Volunteer_reason: "",
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
    <div className="volunteer">
      <div className="volunteer-banner">
        <h1>Volunteer </h1>
      </div>
      {message.msg !== "" && (
        <ToastNotification
          type={message.type}
          text={
            message.type === "error"
              ? message.msg
              : "Form successfully submitted. God bless you!"
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

          <form action="/action_page.php" onSubmit={volunteerForm}>
            <label htmlFor="fname">Name</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="first_name"
              placeholder="First name"
              value={volunteer.first_name}
              required
            />
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="last_name"
              value={volunteer.last_name}
              placeholder="Last name"
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
              name="story"
              value={volunteer.story}
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
