import React from 'react'
import './BottomNOI.css'
import { GrFacebook, GrGithub, GrLinkedin } from "react-icons/gr";

function BottomNOI() {
  return (
    <div className='bottomNOI' id='bottomNOI'>
    <div className='bottomChoiceNOI'>
      <p>O Nas</p>
      <p>Kontakt</p>
      <p>Info</p>
    </div>
    <div className='bottomSocialMediaNOI'>
      <p>Lorem ipsum dolor sit amet. Et tempore facilis et necessitatibus quisquam et neque placeat et vero amet ea ipsa omnis sed 
         eveniet vero ut voluptatum perferendis.</p>
      <div>
        <p><GrFacebook/></p>
        <p><GrGithub/></p>
        <p><GrLinkedin/> </p>
      </div>

    </div>

</div>
  )
}

export default BottomNOI