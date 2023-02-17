import { NavLink, Link } from "react-router-dom";
import React, { useState } from 'react'
import './Navigation.css'

import menu from '../assets/menu.png'

export default function Navigation() {

    // const[changeSiteMenu, setChangeSiteMenu]=useState(true)
    const guest=localStorage.getItem('isGuest')
    const user=localStorage.getItem('token')
    const isWorker=localStorage.getItem('isWorker')

    window.addEventListener('scroll', ()=>{
        let header=document.querySelector('header');
        let liA=[...document.querySelectorAll('li a')]
        let windowPosition=window.scrollY>90
        header.classList.toggle('scrolling-active', windowPosition)
    
        liA.forEach((e)=>{
            e.classList.toggle('scrolling-active-li-a',windowPosition)
        })        
      })
    
      const handleLogout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('isWorker')
        localStorage.removeItem('isGuest')
        window.location='/'
      }

      const AgreeCookies=localStorage.getItem('isAgree')

  return (
    <header className="navbar">
 

      <NavLink to='/main'><p>Strona Główna</p></NavLink>
      <NavLink to='/templates' className="navbartemplates"><p>Szablony stron</p></NavLink>
      <button className='siteMenuTrigger'>
        <img src={menu} alt='logo menu'/>
      </button>
      <div className="siteMenu">
        <ul>
            <li>
               <p><a href='https://github.com/CharkiewiczPawel'>Projekty</a></p>
            </li>
            <li>
              <Link to='/templates' className="siteMenuLinktToTemplates"><p>Szablony stron</p></Link>
            </li>
            {!user&&<li>
                <Link to='/login'><p>Zaloguj</p></Link>
            </li>}
            {isWorker==="true"&& <li>
                <Link to='/work'><p>Praca</p></Link>
            </li>}
           {(guest==="true")&& <li>
                <Link to='/gallery'><p>Galeria</p></Link>
            </li>}
           {
            user&&<li><p onClick={handleLogout}>Wyloguj</p></li>
            }
        </ul>
      </div>
    </header>
  )
}
