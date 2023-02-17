import React from 'react'
import Nav from './Nav/Nav.js'
import './AppRelaks.css'
import FirstPicture from './firsPicture/FirstPicture.js'
import FirstDescription from './firstDescription/FirstDescription.js'
import Movie from './movie/Movie.js'
import ProductPresentation from './productPresentation/ProductPresentation.js'
import Bottom from './bottom/Bottom.js'


function AppRelaks() {
  return (
    <div className='AppRelaks'>
      <Nav/>
      <FirstPicture/>
      <FirstDescription/>
      <Movie/>
      <ProductPresentation/>
      <Bottom/>
    </div>
  )
}

export default AppRelaks