import React from 'react'
import BottomNOI from './bottom/BottomNOI'
import MainBoardNOI from './mainBoard/MainBoardNOI'
import MainPictureNOI from './mainPicture/MainPictureNOI'
import NavigationNormalOne from './navigation/NavigationNormalOne'
import './NormalOne.css'

function NormalOne() {
  return (
    <div className='AppNOI'>
        <NavigationNormalOne/>
        <MainPictureNOI/>
        <MainBoardNOI/>
        <BottomNOI/>
    </div>
  )
}

export default NormalOne