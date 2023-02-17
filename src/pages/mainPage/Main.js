import React,{useEffect,useState,Suspense} from 'react'
import {motion} from 'framer-motion'
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import './Main.css'

import Planet from './planet/Planet';
import FirstText from './firstText/FirstText';
import BoardForBubble from './bubbleSkills/BoardForBubble';
import Contact from './contact/Contact';
import PhotoOwner from './photoOwner/PhotoOwner.js';
import cassiopeia from '../../assets/photoOwner/cassiopeia.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Space from './space/Space';






export default function Main() {
  const[isOpen,setIsOpen]=useState(false);
  useEffect(() => {
    AOS.init();
  })


      return (
     <Suspense fallback={<Planet/>}>
      
        <div className='firstBoard' >
         <Space/> 
          <div className='heading'>
            <img src={cassiopeia} alt="mgławica" className='nebulaImg'/>  
            
            <FirstText/>
            <Planet/>
            
            
          </div>
          <article className='aboutme'>
            
            <PhotoOwner/>
            <motion.div
            transition={{layout:{duration:1, type:'spring'}}}
            layout onClick={()=>setIsOpen(!isOpen)}
            className='textInArticle'>
            <p data-aos="zoom-in-left" data-aos-duration="1700">
            Zdobyłem wyższe wykształcenie w 2022 roku z programowania kończąc studia podyplomowe w Wyższej Szkole Bankowej we Wrocławiu, gdzie po pozytywnie zdanym egzaminie uzyskałem tytuł Programisty Front-End Developer z Angular. Dodatkowo posiadam wiedzę i doświadczenie z zakresu logistyki o czym świadczy tytuł inżyniera zdobyty na Politechnice Opolskiej oraz moja praca w tej dziedzinie.  
            <br/>
            <span>Obecnie pracuje w Technologiach: JavaScript, React.js, Node.js, Express, MongoDB </span>
            </p>
            {!isOpen&&<button 
              className='aboutMeButton'
              data-aos="zoom-in-left" data-aos-duration="1700"
            >Więcej o mnie 
             <TiArrowDownOutline style={{marginLeft:'5px' ,fontSize:'22px'}}/>
            </button>}
            {isOpen&&<motion.div
                      initial={{opacity:0}} 
                      animate={{opacity:1}} 
                      transition={{duration:1}} 
                      exit={{opacity:0}} 
            >
            <p  data-aos="zoom-in-left" data-aos-duration="1700">Po za uzyskanym wykształceniem staram się stale poszerzać swoją wiedzę poprzez samokształcenie, co w efekcie skutkuje Powstawaniem w współpracy z Exago Media projektów witryn internetowych, które są gotowymi szablonami do wyboru Klienta. </p>
            <p  data-aos="zoom-in-left" data-aos-duration="1800">Obecnie pracuję nad rozwojem witryny internetowej dla Szwadron Przysiecz, który powierzył mi obowiązki w tym zakresie.</p>
            <p  data-aos="zoom-in-left" data-aos-duration="1800"><strong>W wolnym czasie</strong>
            <br/>
            Jestem miłośnikiem jazdy konnej oraz aktywnego spędzania czasu. Wędrówki górskie, rower i szermierka to mój plan na odreagowanie stresów i odpoczynek od komputera. Dzięki temu jestem w formie fizycznej i psychicznej, gotowy na nowe wyzwania.
            </p>
            <button
              className='aboutMeButton'
              data-aos="zoom-in-left" data-aos-duration="1700"
            >Zwiń
              <TiArrowUpOutline style={{marginLeft:'5px',fontSize:'22px'}}/>
            </button>
            </motion.div>}
            </motion.div>           
          </article>
           
          <div className='skills'>
            <BoardForBubble/>
          </div>            
        </div>
        
        <footer>
          <Contact/>
        </footer>        
    </Suspense>)
  
}
