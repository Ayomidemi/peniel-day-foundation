import React, { useState, useEffect } from "react";
import axios from "axios";

const Volunteer = () => {
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
  console.log(volunteer)

  const [token, setToken] = useState('')

  useEffect(() => {
    setToken("accessToken");
  }, []);

  const handleInputChange = (e) => {
    setVolunteer((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const volunteerForm = (e) => {
    e.preventDefault();

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .post(
        "https://peniel-server.herokuapp.com/volunteer/api/volunteer-create/",
        volunteer,
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

            <button className="volunteer-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
