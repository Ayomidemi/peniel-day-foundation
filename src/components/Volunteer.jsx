import React from "react";

const Volunteer = () => {
  return (
    <div className="volunteer" id="navbar">
      <div className="volunteer-banner">
        <h1>Volunteer </h1>
      </div>

      <div className="volunteer-container">
        <div className="volunteer-form">
          <h2>
            Fill this form to join the fast growing community of volunteers
            shining the light of Jesus to adolescents in Nigeria.
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
            <input type="tel"  id="phone" placeholder="Phone Number" className="contact name" required/>
            

            <label for="address">Address</label>
            <input
              type="text"
              className="contact name"
              name="address"
              placeholder="Address"
              required
            />

            <label for="dob">Date of Birth</label>
            <input type="date"  name="date" className="contact name" required/>

            <label for="dob">Skills</label>
            <select id="department" name="department" className="contact name">
              <option value="department">Departments</option>
              <option value="department">Prison Outreach</option>
              <option value="department">Street Outreach</option>
              <option value="department">Photography</option>
              <option value="department">Grants / Proposal Writing</option>
              <option value="department">Communication</option>
            </select>

            <label for="message">What is your salvation story?</label>
            <textarea name="message" id="message" required></textarea>

            <label for="message">Why do you want to volunteer?</label>
            <textarea name="message" id="message" required></textarea>

            <button className="volunteer-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
