import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <br />
      <h5> My Recent Work </h5>
      <h2> Projects </h2>
      <div className="containter portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src= {IMG1} alt="" />
          </div>
          <h3> ChatGPT Clone </h3>
          <div className="portfolio__item-cta">
          <a href = "https://github.com/harshnegi1434/chatgpt-clone" className='btn' target='_blank' rel="noreferrer"> Github </a> 
          <a href = "https://harshgptclone.onrender.com/" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src= {IMG2} alt="" />
          </div>
          <h3> Spotify Playlist Recommendation System </h3>
          <div className="portfolio__item-cta">
          <a href = "https://github.com/harshnegi1434/Spotify-Playlist-Recommendation-System" className='btn' target='_blank' rel="noreferrer"> Github </a> 
          <a href = "#" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src= {IMG3} alt="" />
          </div>
          <h3> PGLife </h3>
          <div className="portfolio__item-cta">
          <a href = "https://github.com/harshnegi1434/chatgpt-clone" className='btn' target='_blank' rel="noreferrer"> Github </a> 
          <a href = "#" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src= {IMG1} alt="" />
          </div>
          <h3> Chatbot </h3>
          <div className="portfolio__item-cta">
          <a href = "https://github.com/harshnegi1434/Chatbot" className='btn' target='_blank' rel="noreferrer"> Github </a> 
          <a href = "#" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src= {IMG1} alt="" />
          </div>
          <h3> Feedback Recorder </h3>
          <div className="portfolio__item-cta">
          <a href = "https://github.com/harshnegi1434/Feedback_Recorder" className='btn' target='_blank' rel="noreferrer"> Github </a> 
          <a href = "#" className='btn btn-primary' target='_blank' target='_blank' rel="noreferrer"> Live Demo </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
            <img src= {IMG1} alt="" />
          </div>
          <h3> Quiz Program </h3>
          <div className="portfolio__item-cta">
          <a href = "https://github.com/harshnegi1434/Quiz_Program" className='btn' target='_blank' rel="noreferrer"> Github </a> 
          <a href = "#" className='btn btn-primary' target='_blank' target='_blank' rel="noreferrer"> Live Demo </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio