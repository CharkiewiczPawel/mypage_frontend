import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MainPictureNOI.css'


//img
import digitalSkysrapers from '../../../../../assets/background/digitalSkysrapers.jpg'
import laptop from '../../../../../assets/forProjects/laptop.jpg'
import teamwork from '../../../../../assets/forProjects/teamwork.jpg'

function MainPictureNOI() {
    
    let settings={
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:1500,
        pauseOnHover:false
    }

  return (
        <div className='mainForSliderNOI' id='topNOI'>
        <Slider {...settings}>
          <div className='mainDivPictureNOI'>
              <img src={digitalSkysrapers} alt='Wiezowiec' className='imgMainPictureNOI'/>
              <div className='secoundDivPictureNOI leftNOI'>
                <h1>Loren ipsun dolor sit anet</h1>
                <h2>consectetur adipisci elit, sed eiusnod tenpor</h2>  
              </div>
          </div>    
          <div className='mainDivPictureNOI'>
              <img src={laptop} alt='laptop' className='imgMainPictureNOI'/>
              <div className='secoundDivPictureNOI rightNOI'>
                <h1>Loren ipsun dolor sit anet</h1>
              </div>
          </div>
          <div className='mainDivPictureNOI'>
              <img src={teamwork} alt='praca zespołowa' className='imgMainPictureNOI'/>
              <div className='secoundDivPictureNOI leftNOI'>
                <h2>Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua</h2>
              </div>              
          </div>
        </Slider>
    </div>
  )
  
}

export default MainPictureNOI