import React from 'react'
import css from './Bottom.module.css'
import { IoMdRose } from "react-icons/io";
import { BsFillGeoAltFill,BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

function Bottom() {
  return (
    <div className={css.bottomBeach}>
    <h2><IoMdRose/>Logo</h2>
  <div className={css.contactBeach}>
    <h3>Contact</h3>
    <p><BsFillGeoAltFill/> lorem ipsum 12-345</p>
    <p><BsFillTelephoneFill/> xxx xxx xxx</p>
    <p><BsEnvelopeFill/> xxx@xxx.com</p>
  </div>
  <div className={css.socialMediaBeach}>
    <h3>Social Media</h3>
    <div>
      <p><AiFillFacebook/></p>
      <p><AiFillLinkedin/></p>
      <p><AiFillTwitterCircle/></p> 
    </div>


  </div>
</div>
  )
}

export default Bottom