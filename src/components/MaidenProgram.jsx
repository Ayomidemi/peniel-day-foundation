import React from 'react'
import maiden from '../img/maiden.png'


const MaidenProgram = () => {
  return (
    <div className='maiden' id='navbar'>

         <div className="maiden-banner">
        <h1>Maiden Program</h1>
      </div>

      <div className="maiden-container">
          <img src={maiden} alt="Peniel Day" />

          <h3>October 21, 2021</h3>

          <h1>Peniel Day's Maiden program at word assembly church</h1>

          <p>We are a not-for-profit organization that strives to be led and informed
              by the spirit of God. Therefore, as the burden for adolescents
              on the streets and prisons in Nigeria was laid upon our hearts, we 
              prayerfully sort for God's help to help us go about this vision. He led
              us to start off in His church.
          </p>

          <p>
              Therefore, our first program as a team kicked at the Word Assembly Church,
              Ogba Lagos. We collaborated with the paastorate at the church to organize
              a writing contest. We invited adolescentsto describe what an encouterwith the
              Lord meant to them.
          </p>

          <p>
              Interestingly, we had a good number of creative, insightful and powerful entries
              from adolescents and their essays were critically reviewed by our team here at Peniel Day
              Foundation.
          </p>

          <p>
              The grading rubrics utilized to judge contenstants were as follows: 
              The writing mechanics they used, scriptural Citations, personal experiences, 
              originality and clarity of their work.
          </p>

          <p>
          Overall, we announced three grand winners who were given cash prizes and
          we gave out consolation prizes to other writers who had submitted their entries.
          </p>
          
      </div>

    </div>
  )
}

export default MaidenProgram