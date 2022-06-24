import React, { useState } from "react";
import axios from "axios";

const Volunteer = () => {
  const [volunteer, setVolunteer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dob: "",
    skills: "",
    salvationStory: "",
    volunteer: "",
  });

  const handleInputChange = (e) => {
    setVolunteer((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const volunteerForm = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://peniel-server.herokuapp.com/volunteer/api/volunteer-create",
        volunteer
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="volunteer">
      <div className="volunteer-banner">
        <h1>Volunteer </h1>
      </div>

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
              name="firstName"
              value={volunteer.firstName}
              required
            />
            <input
              onChange={handleInputChange}
              type="text"
              className="contact name"
              name="lastName"
              value={volunteer.lastName}
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
              value={volunteer.phoneNumber}
              type="tel"
              name="phoneNumber"
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
                  value={volunteer.dob}
                  type="date"
                  name="dob"
                  className="contact name"
                  required
                />
              </div>

              <div className="volunteer-flex-2">
                <label htmlFor="dob">Skills</label>
                <select
                  onChange={handleInputChange}
                  value={volunteer.skills}
                  id="department"
                  name="department"
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
              name="message"
              value={volunteer.salvationStory}
              id="message"
              required
            ></textarea>

            <label htmlFor="message">Why do you want to volunteer?</label>
            <textarea
              onChange={handleInputChange}
              name="message"
              value={volunteer.volunteer}
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

export default Volunteer;
