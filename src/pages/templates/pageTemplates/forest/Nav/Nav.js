import React, {useEffect, useState} from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import { GiBarracksTent } from "react-icons/gi";

import forest from '../../../../../assets/forProjects/forest.png'

function Nav() {

  const [changeClass, setChangeClass]=useState(false)

  useEffect(()=>{
    setTimeout(() => {
        setChangeClass(true)
      }, 1000);
  },[])



  return (
    <div className='navFOREST' 
      style={{
        backgroundImage:`url(${forest})`,
       }}
        >
      <div className={changeClass?'groupForNavFOREST':'displayNoneFOREST'}>
      <div className='buttonNavFOREST'>
        <p>Przycisk</p>
        <p>Przycisk</p>
      </div>

      <div className='logoFOREST'>
        <p><GiBarracksTent/></p>
      </div>

      <div className='buttonNavFOREST'>
        <p><Link to="articleFOREST" spy={true} smooth={true} duration={500}>Artykuł</Link></p>
        <p><Link to="contactFOREST" spy={true} smooth={true} duration={500}>Kontakt</Link></p>
      </div>      
      </div>

      <div className={changeClass?'textInNavFOREST':'displayNoneFOREST'}>
        <h1>Lorem ipsum dolor sit ame</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </h2>
        <p>Sprawdź</p>
      </div>
      
    </div>
  )
}

export default Nav