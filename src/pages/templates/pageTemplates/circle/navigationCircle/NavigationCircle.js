import React from 'react'
import { IoMdRose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import css from './NavigationCircle.module.css'

function NavigationCircle() {
  return (
    <div className={css.navigationBeach}>
        <div className={css.boardForLogo}> 
          <h2><IoMdRose/>Logo</h2> 
        </div>
        <div className={css.boardNavigationBeach}>
          <NavLink to='/templates/circle/circleonas'><p>O Nas</p></NavLink>
          <p>Kontakt</p>
          <p>Info</p>
        </div>
    </div>
  )
}

export default NavigationCircle