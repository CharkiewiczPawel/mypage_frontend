import React, {useState, useEffect} from 'react'
import BoardBubbleSkills from './BoardBubbleSkills';
import './BubbleSkills.css'
import { TiArrowDownOutline } from "react-icons/ti";


import arrow from '../../../assets/arrow.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BoardForBubble() {

    const [isOpen, setIsOpen]=useState(false)

    useEffect(() => {
        AOS.init();
      })

     return(
        <div>
        <div className="boardSkills" data-aos="flip-up" data-aos-duration="2000">
           <h1>Technologie w których pracuje</h1>
           <div>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Express.js</p>
              <p>Css</p>
              <p>Sass Scss</p>
              <p>Html</p>
              <button 
                 onClick={()=>{setIsOpen(true)}} 
                  className={isOpen?'buttonForBubbleNone':'buttonForBubble'}>
                  Rozwiń
                  <TiArrowDownOutline/>
              </button>  
           </div> 
           <BoardBubbleSkills open={isOpen} onClose={()=>setIsOpen(false)}/>
        </div>               
      </div>  
    )
     
}


