import React from 'react'
import './testimonials.scss'
import ShortcutSharpIcon from '@mui/icons-material/ShortcutSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Testimonials() {
  return (
    <div className='Testimonials' id='testimonials'>
      <h1>Testimonials</h1>

      <div className="reviewContainer">
      <div className="reviews">
        <div className="profile">
          <div className="arrow">
            <ShortcutSharpIcon/>
          </div>
          <div className="image">
            <img src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
          </div>
          <div className="socialMedia">
            <TwitterIcon/>
          </div>
        </div>
        <div className="feedback">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit officia nesciunt rerum quasi architecto!</p>
        </div>
        <div className="name">
          <h2>Tom Durden</h2> 
          <h3>Senior Developer</h3>
        </div>
      </div>

      <div className="reviews">
        <div className="profile">
          <div className="arrow">
          <ShortcutSharpIcon/>
          </div>
          <div className="image">
            <img src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
          </div>
          <div className="socialMedia">
            <InstagramIcon/>
          </div>
        </div>
        <div className="feedback">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit officia nesciunt rerum quasi architecto!</p>
        </div>
        <div className="name">
          <h2>Riya Mishra</h2>
          <h3>Assistent Director</h3>
        </div>
      </div>

      <div className="reviews">
        <div className="profile">
          <div className="arrow">
          <ShortcutSharpIcon/>
          </div>
          <div className="image">
            <img src="https://as1.ftcdn.net/v2/jpg/05/86/65/86/1000_F_586658640_LoqbtbLWRWdrY9LoydA0L6tuoDZdjl93.jpg" alt="" />
          </div>
          <div className="socialMedia">
            <FacebookIcon/>
          </div>
        </div>
        <div className="feedback">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit officia nesciunt rerum quasi architecto!</p>
        </div>
        <div className="name">
          <h2>Ryan Raynold</h2>
          <h3>Software Developer</h3>
        </div>
      </div>


      </div>
    </div>
  )
}
