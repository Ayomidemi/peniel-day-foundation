import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRightAlt } from '@material-ui/icons';

import img1 from '../img/pod1.jpg'
import img2 from '../img/pod2.jpg'
import img3 from '../img/pod3.jpg'
import img5 from '../img/esther1.jpg'
import img4 from '../img/abimbola.jpg'


const PodcastItem = ({img, name='', icon}) => { 

  return (
    <div className="podcast-item">
<div className="image-podcast">  <img src={img} alt={name} />  </div> 

      <div className="podcast-details">
<div className="podcast-name">  {name}  </div>

      <div className="podcast-icon"> {icon} </div> 
      </div>
  
    </div>
  )
}

const TeamMembers = ({img, name='', position=''}) => { 

  return (
    <div className="pod-item">

      <div className="image-podcast">  <img src={img} alt={name} />  </div> 
      <div className="names">  {name}  </div>
      <div className="position">  {position}  </div>

    </div>
  )
}


const Podcast = () => {
  return (
    <div className='podcast' id='navbar'>

      <div className="podcast-banner">
        <h1>Podcast</h1>
      </div>

<div className="podcast-title">
          <h1>recent episodes</h1>
        </div>
        
      <div className="podcast-container">
      <PodcastItem img={img1} name='our maiden event programme' 
      icon={<Link to='/maiden'> <ArrowRightAlt/> </Link>}/>
        <PodcastItem img={img3} name='summer leadership summit 2021' 
        icon={<Link to='/leader'> <ArrowRightAlt/> </Link>}/>
        <PodcastItem img={img2} name='correctional center outreach' 
        icon={ <ArrowRightAlt/> }/>
        </div> 
       


<div className="podcast-title">
          <h1>meet our speakers</h1>
        </div>
        
        <div className='container2'>
          <div className='column1'>
          <TeamMembers  img={img4} name='abimbola ayodele' 
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corrupti quia voluptate iusto omnis maiores, aut doloremque impedit assumenda excepturi, 
          quae ullam dolor magnam? Sunt tempora consequatur culpa, rerum esse est.</p>
          </div>

          <div className='column1'>
         <TeamMembers  img={img5} name='esther hinmikaiye' 
        />
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corrupti quia voluptate iusto omnis maiores, aut doloremque impedit assumenda excepturi, 
          quae ullam dolor magnam? Sunt tempora consequatur culpa, rerum esse est.</p>

        </div>
       
          </div>

          
     

      </div>
  )
}

export default Podcast