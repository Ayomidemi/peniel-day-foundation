import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import DrawSvg from './DrawSvg'

import what11 from '../img/what11.png'
import what1 from '../img/what1.png'
import what3 from '../img/what3.png'
import what4 from '../img/what4.png'




const RoadMapItem = ({title, subtext, subtext2, addToRef}) => {

    return (
      <div className='road-item' ref={addToRef}>
        <div className='container-item'>
          <div className="box-road">
          <div className='subtitle-road'> {title} </div>
          <div className='subtitle-light-road'> {subtext}</div>
          <div className='subtitle-light-road'> {subtext2}</div>
          </div>
  
        </div>
      </div>
    )
  }



const RoadMap = () => {
    const revealRefs = useRef([]);
  revealRefs.current = [];

  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {  

    let t1 = gsap.timeline();
    revealRefs.current.forEach( (el, index) => {

      // t1.fromTo (
      //   el.childNodes[0], 
      //   {
      //     y: '0'
      //   }, {
      //     y: '-30%',

      //     // scrollTrigger: {
      //     //  id: `section-${index +1}`,
      //     //  trigger: el,
      //     //  start: 'top center+=200px',
      //     //  end: 'bottom center',
      //     //  scrub: true,
      //     // //  markers: true,
      //     // }
      //   }
      // )
      
    })
  
    return () => {
      
    };
  }, [])


  return (
    <div className='container-road'>
        <div className='svg-container'>
          <DrawSvg />
        </div>

        <div className='road-items'>
         <div className="roasd">
           <img src={what11} alt="Peniel Day" />
          <RoadMapItem addToRef={addToRefs} title='december, 2020' subtext='The day Peniel Day Foundation was founded.' />
         </div>
         <div className="roasd">
           <img src={what1} alt="Peniel Day" />
          <RoadMapItem addToRef={addToRefs} title='may, 2021' subtext='Organized a writing competition for adolescents at Word Assembly, Ogba Lagos in May 2021. We had three winners and awarded them with scholarships as well as gave consolation prizes to other contestants.' />
        
         </div>
         <div className="roasd">
           <img src={what3} alt="Peniel Day" />
          <RoadMapItem addToRef={addToRefs} title='august, 2021' subtext='We facilitated seassions at a Leadership summit program at Word Assembly church Ogba Lagos in August 2021.' subtext2='We made donations to sponsor the procurement of a book titled ‘Now I Know’ for 25 adolescents at Word Assembly church, Ogba Lagos in August 2021 ' />
         </div>
         <div className="roasd">
                   <img src={what4} alt="Peniel Day" />
          <RoadMapItem addToRef={addToRefs} title='august, 2021' subtext='We currently pay for the tuition of a teenager who we met at the Junior boys’ correctional center.' />

         </div>

        </div>

        </div>
  )
}

export default RoadMap