import React from 'react'
import './MainBoardNOI.css'

//img
import manWithPhone from '../../../../../assets/forProjects/manWithPhone.jpg'
import laptop from '../../../../../assets/forProjects/laptop.jpg'
import teamwork from '../../../../../assets/forProjects/teamwork.jpg'

function MainBoardNOI() {
  return (
    <div className='mainBoardNOI'>
       <p className='firstTextNOI'>Lorem ipsum dolor sit amet. In voluptatem laboriosam et deserunt galisum ut molestiae asperiores aut 
          internos neque eum molestiae 
          minima? Est illum deleniti aut quia quia ut temporibus amet sit eligendi sequi.
          Sed sint internos hic fugiat quos est numquam iusto. Nam culpa numquam ut praesentium aliquam aut doloribus veniam non veritatis 
          mollitia est ducimus nulla aut dolores distinctio.</p>
        
        <article className='mainArticleNOI' id='middleNOI'>
          <h1>Lorem ipsum dolor sit amet</h1> 
          
          <section className='sectioninLeftNOI'>
             <img src={manWithPhone} alt='człowiek z telefonem'/>
             <div className='divInSectionRightNOI'>
                <h1>Lorem ipsum dolor </h1>
                <p>Lorem ipsum dolor sit amet. Ut optio debitis et amet tempora aut animi itaque eum corporis</p>   
             </div>
          </section> 

          <section className='sectioninRightNOI'>
              <div className='divInSectionLeftNOI'>
                <h1>Lorem ipsum dolor </h1>
                <p>Lorem ipsum dolor sit amet. Ut optio debitis et amet tempora aut animi itaque eum corporis</p>  
              </div>
              <img src={laptop} alt='Laptop'/>
          </section>

          <section className='sectioninLeftNOI'>
             <img src={teamwork} alt='praca zespołowa'/>
             <div className='divInSectionRightNOI'>
                <h1>Lorem ipsum dolor </h1>
                <p>Lorem ipsum dolor sit amet. Est repellat galisum cum eius culpa nam soluta assumenda est adipisci harum et autem 
                   mollitia vel quasi quia. Aut recusandae optio et quas autem aut doloremque neque vel commodi doloribus ut voluptatum 
                   repellat. Aut illo</p>   
             </div>
          </section> 

          <div className='afterArticleNOI'>
            <h1>Lorem ipsum dolor </h1>
            <div className='textInPictureNOI'>
                <div className='textInPictureOneNOI'>
                   <img src={laptop} alt='laptop'/>
                   <div className='textInPictureDivforPNOI'>
                      <p>Lorem ipsum dolor sit amet</p>
                   </div>                   
                </div>
                <div className='textInPictureTwoNOI'>
                   <img src={teamwork} alt='praca zespołowa'/>
                   <div className='textInPictureDivforPNOI'>
                      <p>Lorem ipsum dolor sit amet. Est repellat galisum cum</p>
                   </div>
                </div>
            </div>
            <p className='textAfterArticleNOI'>Lorem ipsum dolor sit amet. Ea galisum eligendi non cumque voluptatibus eos voluptatem 
               assumenda 33 incidunt omnis sit 
               quidem dolore sit ullam esse. Ad inventore repellendus At quod deserunt et doloremque dolore aut deleniti velit et culpa 
               veniam. Vel suscipit fugit et accusamus perferendis sed facere quod sit beatae consequuntur ut omnis voluptatum sit galisum 
               saepe.</p>
          </div>

        </article>
        
    </div>
  )
}

export default MainBoardNOI