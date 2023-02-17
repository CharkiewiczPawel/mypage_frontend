import React,{ useEffect, useState } from 'react'
import rocketI from '../../assets/main/rocketI.png'
import rocketII from '../../assets/main/rocketII.png'
import earth from '../../assets/main/ziemia.png'
import './Loader.css'

function Loader() {
    const [picture, setPicture]=useState(rocketI)

    useEffect(()=>{
       const rocketInterval=setInterval(()=>{
        if(picture===rocketI){setPicture(rocketII)}
        if(picture===rocketII){setPicture(rocketI)}
       },500)
       return()=>clearInterval(rocketInterval)
    })
  return (
    <div className="first_loading_container">
    <div className="loading_container">
      <img src={picture} alt='rakieta' className="loading_rocket"/>
      <img src={earth} alt='ziemia' className="loading_earth"/>
    </div> 
    <div className="textLoad_container">
     <p className="textLoad dot1 dot"> . </p><p className="textLoad dot2 dot"> . </p><p className="textLoad dot3 dot"> . </p>
    </div>
  </div>
  )
}

export default Loader