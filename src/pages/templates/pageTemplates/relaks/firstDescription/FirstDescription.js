import React, {useEffect} from 'react'
import './FirstDescription.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

import hotelroom from '../../../../../assets/forProjects/hotelroom.jpg'

function FirstDescription() {

    useEffect(() => {
        AOS.init();
      })

  return (
    <div className='firstDescriptionRELAKS'>
      <img src={hotelroom} alt='pokój hotelowy' data-aos="fade-right"  data-aos-duration="1500"/>
      <div className='tableBoardRELAKS'>
        <ul 
          className='listRELAKS' 
          data-aos="fade-left"  
          data-aos-duration="1200" 
          data-aos-delay="300" 
          data-aos-easing="linear"
        >
            <li>Lorem dolor sit takimata lorem.</li>
            <li>Invidunt sea kasd sed.</li>
            <li>Eirmod at clita et diam duo accusam.</li>
        </ul>
        <ul 
          className='listRELAKS' 
          data-aos="fade-left"  
          data-aos-duration="1200" 
          data-aos-delay="600" 
          data-aos-easing="linear" 
        >
            <li>Sadipscing gubergren diam.</li>
            <li>Duo et stet dolor.</li>
            <li>Sadipscing sit ipsum sit labore et duo..</li>
        </ul>
      </div>
    </div>
  )
}

export default FirstDescription