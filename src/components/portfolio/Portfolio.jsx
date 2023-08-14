import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ChatGPT Clone',
    github: 'https://github.com/harshnegi1434/chatgpt-clone',
    demo: 'https://youtu.be/ki2X6bPT75w'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Spotify Playlist Recommendation System',
    github: 'https://github.com/harshnegi1434/Spotify-Playlist-Recommendation-System',
    demo: 'https://youtu.be/OJ88uwstF98'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PGLife',
    github: 'https://github.com/harshnegi1434/PGLife',
    demo: 'https://project-pglife.000webhostapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chatbot',
    github: 'https://github.com/harshnegi1434/Chatbot',
    demo: 'https://github.com/harshnegi1434/Chatbot'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Feedback Recorder',
    github: 'https://github.com/harshnegi1434/Feedback_Recorder',
    demo: 'https://www.youtube.com/watch?v=WgItQOfO52E'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Quiz Program',
    github: 'https://github.com/harshnegi1434/Quiz_Program',
    demo: 'https://github.com/harshnegi1434/Quiz_Program'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <br />
      <h5> My Recent Work </h5>
      <h2> Projects </h2>
      <div className="containter portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"> 
                <img src= {image} alt= {title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
              <a href = {github} className='btn' target='_blank' rel="noreferrer"> Github </a> 
              <a href = {demo} className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
