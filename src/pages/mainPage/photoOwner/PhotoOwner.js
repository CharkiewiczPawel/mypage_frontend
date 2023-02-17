import React from 'react'
import pawel from '../../../assets/photoOwner/pawel.png'
import catCandle from '../../../assets/photoOwner/catCandle.png'
import nightCat from '../../../assets/photoOwner/nightCat.png'
import Clock from './clock/Clock'

import './PhotoOwner.css'

import 'aos/dist/aos.css';

function PhotoOwner() {
  const data=new Date();
  const month=data.getMonth()
  const day=data.getDate()
  console.log(day)
  console.log(month)


  if((data.getHours()<5&&data.getHours()>=0)||(data.getHours()>=21)){
    return (
      <div className='divNightCat' data-aos="zoom-in-right"  data-aos-duration="1700"> 
        <Clock/>
        <img src={nightCat} alt='moje zdjęcie' className='nightCat' /> 
         
      </div>
    )
  }else if((month+1===6&&day===21)||(month+1===6&&day===22)){
    return(
       <div className='divNightCat' data-aos="zoom-in-right"  data-aos-duration="1700"> 
          <img src={catCandle} alt='moje zdjęcie' />   
          <p >NOC ŚWIĘTOJAŃSKA</p>
       </div>
    )
  }else if((month+1===11&&day===29)||(month+1===11&&day===30)){
     return(
        <div className='divNightCat' data-aos="zoom-in-right"  data-aos-duration="1700"> 
           <img src={catCandle} alt='moje zdjęcie' />   
           <p >Andrzejki</p>
        </div>
        )
  }else{
    return(
      <div className='divNightCat'>
        <img src={pawel} alt='moje zdjęcie' data-aos="zoom-in-right"  data-aos-duration="1700" className='pawel'/> 
      </div>
          
    )         
  }

}

export default PhotoOwner