import React from 'react'
import './Nav.css'
import {Link} from 'react-scroll'

import lens from '../../../../../assets/forProjects/stock/lens.png'


export default function Nav() {


 
    window.addEventListener('scroll', ()=>{
        let header=document.getElementById('headerRelaks');
        let windowPositionz=window.scrollY>10
        header.classList.toggle('scrolling-active', windowPositionz)
        
      })
 

  return (
    <header className="navbarRELAKS" id='headerRelaks'>
        <div className='logoRelaksRELAKS'>
         <img src={lens} alt='logo'/>
         <p>LOGO</p>   
        </div>        
        <div className='optionsRelaks'>
          <p><Link to='movie' spy={true} smooth={true} duration={500}>Odnośnik I</Link></p>
          <p><Link to='product' spy={true} smooth={true} duration={500}>Odnośnik II</Link></p>
          <p><Link to='contact' spy={true} smooth={true} duration={500}>Odnośnik III</Link></p>
        </div>
    </header>
  )
}