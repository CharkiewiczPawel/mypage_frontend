import React from 'react'
import { IoMdRose } from "react-icons/io";
import {BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";


function AboutUsNavbar() {
  return (
    <div className='AboutUsNavbarBeachPalm'>
    <h2><IoMdRose/>Logo</h2>
  <div className='AboutUsNavbarContactBeachPalm'>
    <p><BsFillTelephoneFill/> xxx xxx xxx</p>
    <p><BsEnvelopeFill/> xxx@xxx.com</p>
  </div>
  <div className='AboutUsNavbarSocialMediaBeachPalm'>
    <p><AiFillFacebook/></p>
    <p><AiFillLinkedin/></p>
    <p><AiFillTwitterCircle/></p> 
  </div>
</div>
  )
}

export default AboutUsNavbar