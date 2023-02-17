import React from 'react'


import logoBeach from '../../../../../../assets/forProjects/stock/logoBeach.png'

function AboutUsHeader() {
  return (
    <header className='AboutUsHeaderPalm'>      
         <div className='AboutUsHeaderNameCompanyPalm'>
           <h1>NAZWA FIRMY</h1>
           <h3>Lorem ipsum dolor sit amet, consectetur</h3>
           <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet. Qui illo voluptates sit natus repellendus ut possimus quasi aut suscipit molestiae ut fugit laborum ut nostrum laudantium. Et harum corporis in adipisci voluptas id velit similique quo ipsam tempore non quia soluta qui libero maiores et beatae atque. At minus nihil rem commodi similique et aspernatur provident. Sed voluptate velit ex nihil beatae 33 facere beatae. Non natus dignissimos qui doloremque quia sit voluptas labore.</p>
         </div>
         <img src={logoBeach} alt="logo" />
    </header>
  )
}

export default AboutUsHeader