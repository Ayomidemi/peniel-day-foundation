import React, {useState} from "react";
import axios from 'axios'

const Volunteer = () => {

  const [volunteer, setVolunteer] = useState({
    
  })

  const handleInputChange = (e) => {
    setVolunteer( (previousDetails) => {
      return {...previousDetails, [e.target.name]: e.target.value}
    }) 
  }

  const volunteerForm = (e) => {
    e.preventDefault()

    axios.post('http://127.0.0.1:8000/volunteer/api/volunteer-create', volunteer)
    .then( (res) => {
      console.log(res.data)
    })
    .catch( (err) => {
      console.log(err)
    })
  }



  return (
    <div className="volunteer" >
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
              id="fname"
              name="fname"
              placeholder="First name"
              required
            />
            <input
                  onChange={handleInputChange}
              type="text"
              className="contact name"
              id="lname"
              name="lname"
              placeholder="Last name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
                  onChange={handleInputChange}
              type="text"
              className="contact name"
              name="email"
              placeholder="Email Address"
              required
            />

            <label htmlFor="pnumber">Phone Number</label>
            <input
                  onChange={handleInputChange}
                  type="tel"  id="phone" placeholder="Phone Number" className="contact name" required/>
            

            <label htmlFor="address">Address</label>
            <input
                  onChange={handleInputChange}
              type="text"
              className="contact name"
              name="address"
              placeholder="Address"
              required
            />

            <div className="volunteer-form-flex">
              <div className="volunteer-flex-1">
                <label htmlFor="dob">Date of Birth</label>
            <input
                  onChange={handleInputChange}
                  type="date"  name="date" className="contact name" required/>
              </div>

              <div className="volunteer-flex-2">
                <label htmlFor="dob">Skills</label>
            <select 
                  onChange={handleInputChange}
                  id="department" name="department" className="contact name">
              <option value="department">Departments</option>
              <option value="department">Prison Outreach</option>
              <option value="department">Street Outreach</option>
              <option value="department">Photography</option>
              <option value="department">Grants / Proposal Writing</option>
              <option value="department">Communication</option>
            </select>
              </div>
        
            </div>

            <label htmlFor="message">What is your salvation story?</label>
            <textarea
                  onChange={handleInputChange}
                  name="message" id="message" required></textarea>

            <label htmlFor="message">Why do you want to volunteer?</label>
            <textarea
                  onChange={handleInputChange}
                  name="message" id="message" required></textarea>

            <button className="volunteer-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
