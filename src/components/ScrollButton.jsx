import React from 'react'
import { useLayoutEffect } from 'react';
import { useRef } from 'react'
import { useWindowScroll } from 'react-use';

const ScrollButton = () => {

    const ref = useRef(null);
    const {y} = useWindowScroll();

    const scrollToTop = (id) => {
        let element = document.getElementById('navbar')
    
        element.scrollIntoView ({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }

      useLayoutEffect(() => {
        if (y > 200){
            ref.current.style.display = 'flex'
        }
        else {
            ref.current.style.display = 'none'
        }
      }, [y])

      
  return (
    <div className='scroll-button' onClick={() => scrollToTop()} ref={ref}>
       &#x2191;
        </div>
  )
}

export default ScrollButton