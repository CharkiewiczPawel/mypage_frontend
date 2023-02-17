import React from 'react'
import Article from './Article/Article'
import Bottom from './bottom/Bottom'
import Nav from './Nav/Nav'

function AppForest() {
  return (
    <div style={{marginTop:'60px', background:'white', color:'black'}}>
      <Nav/>
      <Article/>
      <Bottom/>
    </div>
  )
}

export default AppForest