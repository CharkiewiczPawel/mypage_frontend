import React from 'react'
import { useState, useEffect, useRef } from "react";
import './CircleChoiceTechnologies.css'

import pair from '../../../../assets/forProjects/stock/pair.png'
import paintbrush from '../../../../assets/forProjects/stock/paintbrush.png'
import arrow from '../../../../assets/forProjects/stock/arrow.png'
import sword from '../../../../assets/forProjects/stock/sword.png'

function CircleChocie() {
  const [changePicture, setChangePicture]=useState(pair)
  const [changeBackground, setChangeBackground]=useState('linear-gradient(0deg, rgba(234,120,71,0) 18%, rgba(239,123,72,0.7903536414565826) 44%, rgba(229,118,70,1) 62%)')
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const toot=useRef()

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth/2;
    let elY = element.current.offsetTop + element.current.clientHeight/2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1-180;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>

    
    <div className='mainCircleChoiceCCT'>
      <div className='CircleChoiceCCT'>
        <div className='groupForbuttonICCT'>
          <button className='buttonOneCCT'>Wybór I</button>
          <button className='buttonTwoCCT'>Wybór II</button>
        </div>
        <div className='backgroundToothpasteCCT' style={{background:changeBackground}}>
          <img 
            ref={toot}
            src={changePicture}
            alt='para' 
            className='toothpasteCCT' 
            style={{
            transform:`rotate(${calcAngle(toot)}deg)`
            }}
           />
        </div>
        <div className='groupForbuttonIICCT'>
          <button className='buttonThreeCCT'>Wybór III</button>
          <button className='buttonFourCCT'>Wybór IV</button>
        </div>
      </div>
    </div>
    
    <div className='changeBoardCCT'>
       <div className='changePictureCCT'>
        <h1>Wybór obrazka</h1>
        <div>
          <button onClick={()=>{setChangePicture(pair)}}><img src={pair} alt='para'/>Para</button>
          <button onClick={()=>{setChangePicture(sword)}}><img src={sword} alt='Miecz'/>Miecz</button>
          <button onClick={()=>{setChangePicture(arrow)}}><img src={arrow} alt='Strzałka'/>Strzałka</button>
          <button onClick={()=>{setChangePicture(paintbrush)}}><img src={paintbrush} alt='Pędzelek'/>Pędzelek</button>
        </div>
        </div>
        <div className='changeBackgroundCCT'>        
        <h1>Wybór tła</h1>
         <div>
          <button onClick={()=>{setChangeBackground('none')}}>Brak</button>
           <button style={{background:'linear-gradient(0deg, rgba(234,120,71,0) 18%, rgba(239,123,72,0.7903536414565826) 44%, rgba(229,118,70,1) 62%)'}} onClick={()=>{setChangeBackground('linear-gradient(0deg, rgba(234,120,71,0) 18%, rgba(239,123,72,0.7903536414565826) 44%, rgba(229,118,70,1) 62%)')}}>Zachód</button> 
           <button style={{background:'radial-gradient(circle, rgba(0,200,83,1) 8%, rgba(105,240,174,1) 93%)'}} onClick={()=>{setChangeBackground('radial-gradient(circle, rgba(0,200,83,1) 8%, rgba(105,240,174,1) 93%)')}}>Zielony</button>
           <button style={{background:'radial-gradient(circle, rgba(98,0,238,1) 35%, rgba(55,0,179,1) 58%)'}} onClick={()=>{setChangeBackground('radial-gradient(circle, rgba(98,0,238,1) 35%, rgba(55,0,179,1) 58%)')}}>Niebieski</button>
         </div> 
         </div>
       
    </div>

    </div>
  )
}

export default CircleChocie