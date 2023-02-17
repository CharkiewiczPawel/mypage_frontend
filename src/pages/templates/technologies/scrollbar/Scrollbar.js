import React from 'react'
import { motion, useScroll } from "framer-motion"
import './Scrollbar.css'

function Scrollbar() {

    const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-barSC"
        style={{ scaleX: scrollYProgress }}
      />
    <div className="AppSC">
    
      <header className='headerSC'>
        <h1 className='h1SC'>Labore sea elitr dolor.</h1>
        <p className='pSC'>Et eirmod sea vero accusam diam sit eos sit sed et. Sit at no eos rebum et sea ut dolores. Lorem et aliquyam erat amet justo aliquyam. Amet clita diam.</p>
      </header>
      <article>
        <h2 className='h2SC'>Duo eirmod justo labore elitr labore invidunt. Consetetur.</h2>
        <p className='pSC'>At voluptua gubergren sit et sit eos sanctus, justo ut duo eos vero, dolor lorem amet diam amet amet takimata rebum sit sit. Ipsum lorem dolor ut diam at rebum ea, clita eirmod lorem kasd duo. Invidunt amet et stet et sanctus amet, diam kasd rebum eos lorem amet ea justo, at diam et eirmod sanctus vero, consetetur elitr voluptua clita voluptua et accusam clita eirmod sed, eos magna no amet clita sit at et, sed sea invidunt ipsum dolor dolor accusam consetetur no et. Sit eos no takimata sanctus, amet dolores diam nonumy amet duo stet, duo labore erat.</p>
      </article>
      <article>
        <h2 className='h2SC'>Takimata erat gubergren invidunt aliquyam.</h2>
        <p className='pSC'>Sadipscing et ut amet diam sit. Ipsum diam et amet vero sed no, lorem erat sed kasd eirmod et et magna rebum justo. Lorem sed vero elitr duo ipsum aliquyam lorem est. No ipsum amet erat eos aliquyam sed takimata, ipsum rebum sea duo ipsum justo ut, at takimata vero diam stet at lorem takimata justo, eirmod eirmod at duo sed, sea dolor tempor lorem no magna voluptua sea nonumy stet. Et dolore sed justo eos amet. Gubergren dolor sed et sadipscing labore lorem gubergren at, diam gubergren magna invidunt rebum ut no. Aliquyam labore at sit sanctus erat. Amet lorem dolor justo at vero est lorem, sea consetetur dolor tempor dolor dolore, amet sea dolor ipsum et aliquyam sed. Dolore et dolor justo justo ipsum et, lorem magna at amet amet, at ipsum diam et clita amet labore. No et amet duo sed invidunt at invidunt et at, duo ipsum invidunt sit justo, elitr sit ipsum sit sit, rebum consetetur sit elitr labore takimata stet sit sadipscing, nonumy sit dolore gubergren rebum accusam rebum sanctus sed consetetur. Diam voluptua et clita justo diam diam. Clita magna amet justo duo sadipscing lorem voluptua, aliquyam no et lorem kasd erat at dolor. Ipsum tempor eos lorem accusam takimata nonumy tempor, at vero erat sit ipsum. Sea kasd rebum nonumy dolor. Eos ipsum rebum lorem sea et, takimata diam et vero amet et nonumy. Accusam aliquyam invidunt amet sanctus dolor rebum, no diam at stet sanctus et at rebum dolore, aliquyam duo lorem voluptua stet ut erat dolores. Dolores invidunt at ipsum dolor eirmod, est ea sanctus nonumy eos erat erat sed ipsum. Et eos dolore sed dolores amet et sadipscing consetetur diam. Sit ipsum voluptua lorem sed amet, elitr sanctus diam lorem at voluptua rebum consetetur amet nonumy. Kasd sea sed.</p>
      </article>
      <article>
        <h2 className='h2SC'>Dolore no dolor dolor.</h2>
        <p className='pSC'>Ipsum accusam no kasd ipsum stet. Stet dolores clita labore sit sadipscing eirmod duo magna accusam, sadipscing clita stet gubergren labore at lorem at voluptua. Erat est et sed sadipscing aliquyam amet diam magna. Lorem diam elitr eos magna dolor invidunt sadipscing, consetetur sit aliquyam et stet dolore sea sadipscing ut, justo nonumy diam sed accusam accusam et tempor sadipscing at. Eirmod magna no dolores gubergren vero lorem, sea tempor magna eos erat ut amet sadipscing sanctus, ipsum et magna lorem sea. Sed justo dolor et diam, sit diam ipsum sit clita accusam ipsum aliquyam. Clita sanctus magna dolor erat sit consetetur sit dolor amet, sanctus voluptua consetetur amet diam dolor stet et. Sea at stet est ut. Dolor ipsum erat sadipscing eirmod kasd ut, gubergren labore erat elitr clita diam consetetur dolores et clita. Vero nonumy nonumy lorem dolor accusam lorem ea aliquyam, diam diam dolor labore rebum stet et accusam. Rebum amet kasd duo lorem diam dolores aliquyam elitr. Et stet et kasd no lorem sed dolore dolor sed. Clita dolor magna sadipscing rebum, et at.</p>
      </article>
    </div>  
    </div>
  )
}

export default Scrollbar