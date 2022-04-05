import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRightAlt, AccessTime } from '@material-ui/icons';
import CountUp from 'react-countup'

import img1 from '../img/pod1.jpg'
import img2 from '../img/pod2.jpg'
import img3 from '../img/pod3.jpg'

import grid1 from '../img/pod1.jpg'
import grid2 from '../img/pod2.jpg'
import grid3 from '../img/pod3.jpg'
import grid4 from '../img/pod1.jpg'
import grid5 from '../img/pod2.jpg'
import grid6 from '../img/pod3.jpg'
import grid7 from '../img/pod1.jpg'
import grid8 from '../img/pod2.jpg'
import grid9 from '../img/pod3.jpg'

import news1 from '../img/podcast.jpg'
import abimbola from '../img/abimbola.jpg'



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


const Home = () => {
  return (
    <div className='home' id='navbar'>
      
      <div className="first-section">
        <div className="outer">
          <div className="first-details">

          <h1>Shining the light of Jesus with adolescents in Nigeria.</h1>

          <h3>
           We stand for access to quality education and believe that through our efforts
           we can give adolescents in Nigeria access to schools and education.
          </h3>

          <div className="box-home">
         <Link to='volunteer'> <button className='btn-home'> Join Us</button> </Link> 
         <a href="https://paystack.com/pay/penielday"><button className='btn-home' 
         style={{'background': '#009346'}}> Donate</button></a>
          </div>
        </div>
         
        </div>
      </div>

      <div className='grid-container'>
        <div className="box-grid">
          <div className="grid1">
            <div className="image"> <img src={grid1} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid2} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid3} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid4} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid5} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid6} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid7} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid8} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid9} alt="Peniel Day" /> </div>


          </div>
        </div>

        <div className="box-grid">
         <h1>We are about doing good</h1>

         <p>We live to exemplify Jesus who went about doing good to communities
           He visited. By the help of the Holy Spirit, we serve our target comminities
           with goodness. -Acts 10:38 
         </p>

         <Link to='volunteer'> <button className='btn-home' 
         style={{'background': '#009346'}}> Join Us</button> </Link> 
        </div>
      </div>


      <div className="grig-contained">
        <div className="grid-contained">
        <div className="box-grid">
        <h1>Educating Adolescents</h1>

<p>Jesus went about teaching, educating and enlightening the crowd. 
  Just like Him, we go about the streets and prisons of Nigeria educating, teaching
  and equipping adolescents with knowledge and skills to be great citizens. -Matthew 5:1-2
</p>

<a href="https://paystack.com/pay/penielday"><button className='btn-home' 
         style={{'background': '#009346'}}> Donate</button></a>
        </div>

        <div className="box-grid">
          <div className="grid1">
            <div className="image"> <img src={grid1} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid2} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid3} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid4} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid5} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid6} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid7} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid8} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid9} alt="Peniel Day" /> </div>
          </div>
        </div>

      </div>
      </div>

      <div className='grid-container'>
        <div className="box-grid">
          <div className="grid1">
            <div className="image"> <img src={grid1} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid2} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid3} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid4} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid5} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid6} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid7} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid8} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid9} alt="Peniel Day" /> </div>


          </div>
        </div>

        <div className="box-grid">
         <h1>Nuturing Adolescents</h1>

         <p>
           Jesus made leaders of his disciples, we hope to raise and nurture great
           leaders in Nigeria. -Matthew 28:19-20
         </p>

         <Link to='ourcause'> <button className='btn-home' 
         style={{'background': '#009346'}}> Learn More</button> </Link> 
        </div>
      </div>


      <div className="podcast-sect">
        <div className="podcast-sectext">
          <h1>Peniel day foundation programs</h1>

        <p>Read about the stories of the children we have helped and how we helped them.</p>
        </div>


        <div className="podcast-container">
      <PodcastItem img={img1} name='our maiden event programme' 
      icon={<Link to='/maiden'> <ArrowRightAlt/> </Link>}/>
        <PodcastItem img={img3} name='summer leadership summit 2021' 
        icon={<Link to='/leader'> <ArrowRightAlt/> </Link>}/>
        <PodcastItem img={img2} name='correctional center outreach' 
        icon={ <ArrowRightAlt/> }/>
        </div>
      </div>


      <div className='grid-container'>
        <div className="box-grid">
          <div className="grid1">
            <div className="image"> <img src={grid1} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid2} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid3} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid4} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid5} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid6} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid7} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid8} alt="Peniel Day" /> </div>
            <div className="image"> <img src={grid9} alt="Peniel Day" /> </div>


          </div>
        </div>

        <div className="box-grid">
         <h1>how we measure our impact</h1>

         <p>
           We are always where others need help.
         </p>

         <div className="counter">
           <div className="counter-content">
           <CountUp duration={3} end={5} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='count' />
                <h3>
                  No of Scholarship
                </h3>
           </div>

           <div className="counter-content">
           <CountUp duration={3} end={95} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='count' />
                <h3>
                  Lives Saved
                </h3>
           </div>

           <div className="counter-content">
           <CountUp duration={3} end={5} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='count' />
                <h3>
                  Team Outreach
                </h3>
           </div>
         </div>

         <div className="box-home">
         <Link to='volunteer'> <button className='btn-home' 
         style={{'color': '#009346'}}> Join Us</button> </Link> 
         <a href="https://paystack.com/pay/penielday"><button className='btn-home' 
         style={{'background': '#009346'}}> Donate</button></a>
          </div>

        </div>
      </div>



      <div className="articles">

        <div className="gradient">
        <h1>News and Articles</h1>
      </div>

      <div className="news">

        <div className="news-box">

          <Link to='leader'> <img src={news1} alt="Peniel Day" /> </Link>
          
          <div className="news-box1">

            <Link to ='leader'> <button className='btn-news' 
            style={{'background': '#D4AF37'}}>Blog Post</button>
             </Link>           

            <h1>summer leadership summit</h1>

            <p>
              In alignment with Peniel Day Foundation's vision to support adolescents in prisons
              and on the streets with the aim of shinning the light of Jesus to these ones, 
              we recieved an invite for partnership with the Word Assemble church, (The Leaders' Place)
              Ogba Lagos, at the Summer Leadership Summit held between 2nd and 15th 2021...
            </p>

            <div className="news-bottom">
              <img src={abimbola} alt="" />

              <div className="hhs">
                <h3>  Abimbola Ayodele</h3>
              <h4> 22nd October, 2021 <AccessTime style={{'fontSize': '1rem'}}/>  </h4>  
              </div>                    
            </div>
            
          </div>
        </div>


        <div className="news-box">

        <Link to='peniel'> <img src={news1} alt="Peniel Day" /> </Link>

<div className="news-box1">
  <button className='btn-news' 
  style={{'background': '#009346'}}>Featured Post</button>

  <h1>Peniel Day</h1>

  <p>
  The 3rd of December, 2017 was the first time I made a visit to the 
            confines of the juvenile center for boys in Nigeria. Prior to that day, 
            I do not think I paid sufficient attention to the existence of correctional 
            centers or juvenile centers in Nigeria. But thanks to my membership 
            in Goldmine ministry; a youth outreach 
            ministry in my church I had access to boys at the center on that day...
  </p>

  <div className="news-bottom">
              <img src={abimbola} alt="" />

              <div className="hhs">
                <h3>  Abimbola Ayodele</h3>
              <h4> 22nd October, 2021 <AccessTime style={{'fontSize': '1rem'}}/>  </h4>  
              </div>                    
            </div>
  
</div>
</div>


<div className="news-box">

<Link to='raising'> <img src={news1} alt="Peniel Day" /> </Link>

<div className="news-box1">
  <button className='btn-news' 
  style={{'background': '#D4AF37', 'border': '#D4AF37'}}>Blog Post</button>

  <h1>Raising Leaders</h1>

  <p>
  To raise involves responsiveness, nurturing, mentoring, protection, and many other
qualities you desire to add to the list. Whether by a biological parent, foster parent, a
teacher, coach, or caregiver, it brings great joy and fulfillment to watch an individual
you had invested time, resources, and skills in the right environment to become a great
leader...
  </p>

  <div className="news-bottom">
              <img src={abimbola} alt="" />

              <div className="hhs">
                <h3>  Abimbola Ayodele</h3>
              <h4> 22nd October, 2021 <AccessTime style={{'fontSize': '1rem'}}/>  </h4>  
              </div>                    
            </div>
  
</div>
</div>

      </div>
      </div>
      
    </div>
  )
}

export default Home