import React from 'react'
import './Bottom.css'

import coffee from '../../../../../assets/forProjects/coffee.jpg'

function Bottom() {
  return (
    <footer className='footerFOREST'>
       <div className='contactFOREST' id='contactFOREST'>
        <div>
           <h1>Kontakt</h1>
           <p>Tel:123******</p>
           <p>Email: ***@***</p>
        </div>
        <div>
           <h1>Adres:</h1>
           <p>*****</p>
           <p>******</p>
           <p>*******</p>
        </div>
        </div>

        <div className='facebookFOREST'>
            <img src={coffee} alt='Kawa'/>
        </div>

    </footer>
  )
}

export default Bottom