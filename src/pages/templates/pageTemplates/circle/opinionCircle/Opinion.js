import React from 'react'
import css from './Opinion.module.css'

//image
import man from '../../../../../assets/forProjects/man.jpg'
import women from '../../../../../assets/forProjects/women.jpg'

function Opinion() {
  return (
    <div className={css.mainOpinionBeach}>
    <div className={css.opinonBeach}>
      <div>
         <img src={man} alt="mężczyzna"/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div>
         <img src={women} alt="mężczyzna"/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore :)</p>
      </div>
    </div>
    </div>
  )
}

export default Opinion