import React from 'react'

import hands from '../../../../../../assets/forProjects/stock/hands.png'
import lens from '../../../../../../assets/forProjects/stock/lens.png'
import human from '../../../../../../assets/forProjects/stock/human.png'
import { NavLink } from 'react-router-dom'

function AboutUsBody() {
  return (
    <div className='AboutUsBodyMainPalm'>
       <h1>Lorem ipsum dolor</h1>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
       <div className='AboutUsBodyPalm'>
         <div className='AboutUsBodyContentPalm'>
            <div>
              <img src={hands} alt='ręce'/>  
            </div>
            <h4>Lorem ipsum dolor sit amet,</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
         </div>

         <div className='AboutUsBodyContentPalm'>
            <div>
              <img src={lens} alt='obiektyw'/>  
            </div>
            <h4>Lorem ipsum dolor sit amet,</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
         </div>

         <div className='AboutUsBodyContentPalm'>
            <div>
              <img src={human} alt='człowiek z trybikami'/>  
            </div>
            <h4>Lorem ipsum dolor sit amet,</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
         </div>

       </div>

       <NavLink to='/templates'><button>WRÓĆ</button></NavLink>

    </div>
  )
}

export default AboutUsBody