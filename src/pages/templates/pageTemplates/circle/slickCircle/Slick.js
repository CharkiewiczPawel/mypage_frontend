import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  css from './Slick.module.css'
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'

import dancingAndBeach from '../../../../../assets/forProjects/dancingAndBeach.jpg'
import seaAndPalm from '../../../../../assets/forProjects/seaAndPalm.jpg'
import seaAndShip from '../../../../../assets/forProjects/seaAndShip.jpg'
import bikeBeach from '../../../../../assets/forProjects/bikeBeach.jpg'


 class Slick extends Component{
   
    render(){

        const NextArrow=({onClick})=>{
            return(
             <div className={css.next} onClick={onClick}>
                <BsArrowRightCircleFill/>
             </div>
            )
          }
          const PrevArrow=({onClick})=>{
            return(
              <div className={css.prev} onClick={onClick}>
                 <BsArrowLeftCircleFill/>
              </div>
             )
           }

           const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow:<NextArrow/>,
            prevArrow:<PrevArrow/>,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
    
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
         
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return(
            <div className={css.mainSlick}>
            <div className={css.slick}>
            <Slider {...settings}>
              <div className={css.slickElement}>
                <div className={css.slickElementDiv}>
                  <img src={dancingAndBeach} alt='taniec na plaży'/>  
                  <div className={css.slickBoardInfo}>
                    <h1>Sale!</h1>
                    <h2>Lorem ipsum</h2>
                  </div>
                 
                </div>                
              </div>

              <div className={css.slickElement}>
                <div className={css.slickElementDiv}>
                  <img src={bikeBeach} alt='taniec na plaży'/>
                  <div className={css.slickBoardInfo}>
                     <h1>25$</h1>
                     <h2>Lorem ipsum</h2>                   
                  </div>
                </div>
              </div>

              <div className={css.slickElement}>
                <div className={css.slickElementDiv}>
                  <img src={seaAndShip} alt='taniec na plaży'/>
                  <div className={css.slickBoardInfo}>
                    <h1>Only Now!</h1>
                    <h2>Lorem ipsum</h2>
                  </div>
                </div>  
              </div>

              <div className={css.slickElement}>
                <div className={css.slickElementDiv}>
                  <img src={seaAndPalm} alt='taniec na plaży'/>
                  <div className={css.slickBoardInfo}>
                    <h1>Look</h1>
                    <h2>Lorem ipsum</h2>
                  </div>
                </div>  
              </div>
            </Slider>
          </div>
          </div>
        )

    }
}

export default Slick