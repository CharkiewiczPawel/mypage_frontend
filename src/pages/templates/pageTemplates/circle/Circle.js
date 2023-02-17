import React from 'react'
import Bottom from './bottomCircle/Bottom'
import css from './Circle.module.css'
import CircleChoice from './circleChoiceCircle/CircleChoice'
import Highlighted from './HighlightedCircle/Highlighted'
import NavigationCircle from './navigationCircle/NavigationCircle'
import Opinion from './opinionCircle/Opinion'
import Product from './productCircle/Product'
import Slick from './slickCircle/Slick.js'


function Circle() {
  return (
    <div className={css.AppCircle}>
       <NavigationCircle/>
       <CircleChoice/>
       <Slick/>
       <Highlighted/>
       <Product/>
       <Opinion/>
       <Bottom/>
    </div>
  )
}

export default Circle