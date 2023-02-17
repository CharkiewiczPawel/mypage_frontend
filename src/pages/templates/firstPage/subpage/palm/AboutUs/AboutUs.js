import React from 'react'


import AboutUsBody from './AboutUsBody';
import AboutUsHeader from './AboutUsHeader';
import AboutUsNavbar from './AboutUsNavbar';

function AboutUs() {
  return (
    <div className='AboutusPalm'>
      <AboutUsNavbar/>
      <AboutUsHeader/>
      <AboutUsBody/>
    </div>
  )
}

export default AboutUs