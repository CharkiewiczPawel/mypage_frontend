import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
//img
import asianwomen from '../../../../../assets/forProjects/asianwomen.jpg'
import bathcosmetic from '../../../../../assets/forProjects/bathcosmetic.jpg'
import soap from '../../../../../assets/forProjects/soap.jpg'
import women from '../../../../../assets/forProjects/women.jpg'

function FirstDisplay() {
    useEffect(() => {
        AOS.init();
      })
  return (
    <div className='firsDisplayRelaksRELAKS'>
      <img src={asianwomen} alt='kąpiąca się kobieta'/>
      <div className='placeForFirstButtonRelaksRELAKS'>
        <button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" data-aos-easing="linear" ><img src={bathcosmetic} alt='kosmetyki'/></button>
        <button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1200" data-aos-easing="linear"><img src={soap} alt='mydło'/></button>
        <button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="2100" data-aos-easing="linear"><img src={women} alt='kobieta'/></button>
      </div>
      <div className='lowerInscriptionRelaksRELAKS' data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="1500" >
        <p >Elitr ipsum ipsum magna sadipscing voluptua et. Voluptua dolor gubergren et sit est, voluptua est at amet labore takimata. <a href='https://www.youtube.com/watch?v=k1WwFlu1-nk'>Sprawdź</a></p>
      </div>
    </div>
  )
}

export default FirstDisplay