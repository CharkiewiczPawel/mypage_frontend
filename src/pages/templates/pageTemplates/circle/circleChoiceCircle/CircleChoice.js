import React from 'react'
import { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import pair from '../../../../../assets/forProjects/stock/pair.png'
import css from './CircleChoice.module.css'

function CircleChoice() {
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
    <div className={css.mainCircleChoice}>
      <div className={css.CircleChoice}>
        <div className={css.groupForbuttonI}>
          <button className={css.buttonOne}><NavLink to='/templates/circle/circleonas'>O Nas</NavLink></button>
          <button className={css.buttonTwo}><NavLink to='/templates/circle/circleonas'>GALERIA</NavLink></button>
        </div>
        <div className={css.backgroundToothpaste}>
          <img 
            ref={toot}
            src={pair}
            alt='para' 
            className={css.toothpaste} 
            style={{
            transform:`rotate(${calcAngle(toot)}deg)`
            }}
           />
        </div>
        <div className={css.groupForbuttonII}>
          <button className={css.buttonThree}>OPIS</button>
          <button className={css.buttonFour}>OPIS</button>
        </div>
      </div>
    </div>
  )
}

export default CircleChoice