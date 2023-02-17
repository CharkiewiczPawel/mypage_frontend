import React from 'react'
import './Movie.css'
function Movie() {
  return (
    <div className='movieRELAKS' id='movie'>
      <iframe
        src="https://www.youtube.com/embed/m0kU96Y9548" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default Movie