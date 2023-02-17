import React from 'react'
import { NavLink } from "react-router-dom";
import '../TemplatesBoard.css' 

//img
import background from '../../../assets/background/digitalSkysrapers.jpg'
import circleScreen from '../../../assets/screens/circle.png'
import normalOne from '../../../assets/screens/normalOne.png'
import galleryOneScreen from '../../../assets/screens/galleryOneScreen.png'
import galleryTwoScreen from '../../../assets/screens/galleryTwoScreen.png'
import galleryThree from '../../../assets/screens/galleryThreeScreen.png'
import Contact from '../../mainPage/contact/Contact';
import palmScreens from '../../../assets/screens/palm.png' 
import ContactMovieScreen from '../../../assets/screens/contactMovieScreen.png';
import scrollbarXscreen from '../../../assets/screens/scrollbarXscreen.png'
import circleTechnologiesScreen from '../../../assets/screens/circleTechnologiesScreen.png'
import drawingOpinionsScreen from '../../../assets/screens/drawingOpinionsScreen.png'
import relaksScreen from '../../../assets/screens/relaksScreen.png'
import forestScreen from'../../../assets/screens/forestScreen.png'

export default function FirstPage() {
  return (
    <div className='mainBoardForTemplates'>
      <img src={background} alt='' className='backgroundI'/>

         {/* Templates */}
        <div className='placeForTemplates placeForProject'> 
            <div className='infoForTemplates'>
               <h1>Szablony</h1> 
               {/* <button className='buttonInfo'>Info</button> */}
            </div>  
            
            <div className='allTemplates'>
            <div className='boardForProject'>
              <img src={relaksScreen} alt='Szablon relaks' />          
              <h1>Relaks</h1>
              <NavLink to='/templates/relaks'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={normalOne} alt='Szablon normalny I' />          
              <h1>Standard I</h1>
              <NavLink to='/templates/normalOne'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={circleScreen} alt='Szablon zachód' />          
              <h1>Zachód</h1>
              <NavLink to='/templates/circle'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={forestScreen} alt='Szablon zachód' />          
              <h1>Las</h1>
              <NavLink to='/templates/forest'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>
  
            </div>
        </div>

        {/* Galeries */}
        <div className='placeForGalleries placeForProject'>
          <div className='infoForTemplates'>
            <h1>Galerie</h1>
            {/* <button className='buttonInfo'>Info</button> */}
          </div>
          
          <div className='allGalleries'>
            
            <div className='boardForProject'>
              <img src={galleryOneScreen} alt='galeria I' />          
              <h1>Galeria I</h1>
              <NavLink to='/gallery_one'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={galleryTwoScreen} alt='galeria II' />          
              <h1>Galeria II</h1>
              <NavLink to='/gallery_two'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={galleryThree} alt='galeria III' />          
              <h1>Galeria III</h1>
              <NavLink to='/gallery_three'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>
            </div>
          

        </div>  

        {/* Podstrony */}

        <div className='placeForSubpage placeForProject'> 
        
            <div className='infoForTemplates'>
               <h1>Podstrony</h1> 
               {/* <button className='buttonInfo'>Info</button> */}
            </div>  
            
            <div className='allTemplates'>

            <div className='boardForProject'>
              <img src={palmScreens} alt='Palma' />          
              <h1>Palmy</h1>
              <NavLink to='/templates/palm'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={ContactMovieScreen} alt='Kontakt z filmem' />          
              <h1>Góry</h1>
              <NavLink to='/templates/contact_movie'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            </div>
        </div>


        {/* Technologie */}
        <div className='placeForProject placeForTechnology'>
          <div className='infoForTemplates'>
            <h1>Technologie</h1>
            {/* <button className='buttonInfo'>Info</button> */}
          </div>
          <div className='allTemplates'>

            <div className='boardForProject'>
              <img src={scrollbarXscreen} alt='Kontakt z filmem' />          
              <h1>Pasek postępu</h1>
              <NavLink to='/templates/scrollbar'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={circleTechnologiesScreen} alt='koło wyboru' />          
              <h1>Koło wyboru</h1>
              <NavLink to='/templates/circle_technology'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

            <div className='boardForProject'>
              <img src={drawingOpinionsScreen} alt='Renderowanie opini' />          
              <h1>Losowanie opinii</h1>
              <NavLink to='/templates/drawing_opinion'> <button className='greenBtn'>Zobacz</button></NavLink> 
            </div>

          </div>

        </div>

        <Contact/>
                           
    </div>
  )
}
