import React from 'react'
import css from './Highlighted.module.css'

//img
import seaAndPalm from '../../../../../assets/forProjects/seaAndPalm.jpg'

function Highlighted() {
  return (
    <div className={css.highlightedBeach}>
        <div>
            <h1>Zwycięzca roku 2023!</h1>       
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
        </div>       
        <img src={seaAndPalm} alt='łódź i palmy'/>
    </div>
  )
}

export default Highlighted