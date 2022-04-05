import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import DrawSvg from './DrawSvg'

import road1 from '../img/pod1.jpg'


const RoadMapItem = ({title, subtext, addToRef}) => {

    return (
      <div className='road-item' ref={addToRef}>
        <div className='container-item'>
          <div className="box-road">
          <div className='subtitle-road'> {title} </div>
          <div className='subtitle-light-road'> {subtext}</div>
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

      t1.fromTo (
        el.childNodes[0], 
        {
          y: '0'
        }, {
          y: '-30%',

          scrollTrigger: {
           id: `section-${index +1}`,
           trigger: el,
           start: 'top center+=200px',
           end: 'bottom center',
           scrub: true,
          //  markers: true,
          }
        }
      )
      
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
         <div className='road-item'>&nbsp;</div>
          <RoadMapItem addToRef={addToRefs} title='Grand Opening' subtext='With more than 200+ hand drawn traits, each NFT is unique and to an exclusive group of successful investors.' />
          <RoadMapItem addToRef={addToRefs} title='Great Benefits' subtext='With more than 200+ hand drawn traits, each NFT is unique and to an exclusive group of successful investors.' />
          <RoadMapItem addToRef={addToRefs} title='Early Access' subtext='With more than 200+ hand drawn traits, each NFT is unique and to an exclusive group of successful investors.' />
          <RoadMapItem addToRef={addToRefs} title='New Merch' subtext='With more than 200+ hand drawn traits, each NFT is unique and  to an exclusive group of successful investors.' />
          <RoadMapItem addToRef={addToRefs} title='Holders Ranking' subtext='With more than 200+ hand drawn traits, each NFT is unique and  to an exclusive group of successful investors.' />


        </div>

        </div>
  )
}

export default RoadMap