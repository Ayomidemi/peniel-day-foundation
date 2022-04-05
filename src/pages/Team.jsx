import React from 'react'


import img1 from '../img/esther1.jpg'
import img2 from '../img/abimbola.jpg'
import img3 from '../img/peter.jpg'
import img4 from '../img/esther2.jpg'
import img5 from '../img/tobiloba.jpg'
import img6 from '../img/foluso.jpg'
import img7 from '../img/opeyemi.jpg'
import img8 from '../img/abimbola.jpg'
import img9 from '../img/faith.jpg'



const TeamMembers = ({img, name='', position=''}) => { 

  return (
    <div className="show-item">

      <div className="image-contain">  <img src={img} alt={name} />  </div> 
      <div className="names">  {name}  </div>
      <div className="position">  {position}  </div>

    </div>
  )
}


const Team = () => {
  return (
    <div className='team' id='navbar'>
     <div className="team-banner">
       <h1>Meet the team</h1>
     </div>

     <div className="container-show">
        <TeamMembers img={img2} name='abimbola ayodele' 
        position='chairman, board of trustees and executive director'/>
        <TeamMembers img={img1} name='esther hinmikaiye' 
        position='vice chairman, board of trustees'/>
        <TeamMembers img={img3} name='peter akerele' 
        position='secretary, board of trustees & team lead intercessory team '/>
        <TeamMembers img={img4} name='ester olulana' 
        position='member, board of trustees & team lead outreach team'/>
        <TeamMembers img={img5} name='tobiloba fasunhan'
        position='member, board of trustees & assistant team lead outreach team'/>
        <TeamMembers img={img6} name='foluso ajayi' 
        position='member, board of trustees '/>
        <TeamMembers img={img7} name='opeyemi oso' 
        position='member, board of trustees & assistant team lead intercessory team'/>
        <TeamMembers img={img8} name='oluwatomisin ayodele'
         position='member, board of trustees'/>
        <TeamMembers img={img9} name='faith hinmikaiye' 
        position='member, board of trustees'/>
      </div>


      </div>
  )
}

export default Team