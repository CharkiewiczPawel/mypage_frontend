import React from 'react'
import './Article.css'


import businessWoman from '../../../../../assets/forProjects/businesswoman.jpg'
import forestTwo from '../../../../../assets/forProjects/forestTwo.jpg'
import bathcosmetic from '../../../../../assets/forProjects/bathcosmetic.jpg'
import coffee from '../../../../../assets/forProjects/coffee.jpg'
import soap from '../../../../../assets/forProjects/soap.jpg'
import hands from '../../../../../assets/forProjects/stock/hands.png'
import human from '../../../../../assets/forProjects/stock/human.png'
import lens from '../../../../../assets/forProjects/stock/lens.png'

function Article() {
  return (
    <div className='artilceFOREST'>

      <article className='firstArticleFOREST' id='articleFOREST'>
        <div className='firstTextFOREST'>
           <h1>Lorem ipsum</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src={businessWoman} alt='zdjęcie kobiety'/>
      </article>

      <div className='offerFOREST'>
        <img src={forestTwo} alt='zdjęcie lasu' className='backgroundOfferFOREST'/>
        <div className='placeForOfferFOREST'>
          <h1>Lorem ipsum</h1>
          <div className='boardOfferFOREST'>
            <div className='mainOfferFOREST'>
                <div className='firstOfferFOREST'>
                  <div className='firstOfferPictureFOREST'>
                     <img src={bathcosmetic} alt='kosmetyki łazienkowe'/>
                     <h1>Lorem ipsum</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div className='secondOfferFOREST'>
                  <div className='secondOfferPictureFOREST'>
                     <img src={coffee} alt='kawa'/>
                     <h1>Lorem ipsum</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div className='thirdOfferFOREST'>
                  <div className='thirdOfferPictureFOREST'>
                     <img src={soap} alt='mydło'/>
                     <h1>Lorem ipsum</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
            </div>
            <div className='otherOffersFOREST'>
              <button>Zobacz więcej</button>
            </div>


          </div>
        </div>
      </div>

      <div className='boardInfoFOREST'>
        <div className='firstInfoFOREST'>
          <img src={human} alt='ikona człowieka'/>
          <h1>LOREM IPSUM</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>
        
        <div className='secondInfoFOREST'>
          <img src={hands} alt='ikona uścisku dłoni'/>
          <h1>LOREM IPSUM</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>

        <div className='thirdInfoFOREST'>
           <img src={lens} alt='ikona obiektywu'/>
           <h1>LOREM IPSUM</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>

      </div>
      
    </div>
  )
}

export default Article