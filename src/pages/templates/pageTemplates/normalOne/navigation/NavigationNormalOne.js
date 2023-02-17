import React from 'react'
import {Link} from 'react-scroll'
import './NavigationNormalOne.css'

function NavigationNormalOne() {
  return (
    <div className='navigationNOI'>
    <p>LOGO</p>
    <div className='buttonNavigationNOI'>
      <p><Link to="topNOI" spy={true} smooth={true} duration={500}>Góra</Link></p>
      <p><Link to="middleNOI" spy={true} smooth={true} duration={500}>Artykuł</Link></p>
      <p><Link to="bottomNOI" spy={true} smooth={true} duration={500}>Kontakt</Link></p>
    </div>

</div>
  )
}

export default NavigationNormalOne