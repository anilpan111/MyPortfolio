import React from 'react'
import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='Portfolio' id='portfolio'>
      <h1>Portfolio</h1>

      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>

      </ul>

      <div className="container">
        <div className="item">
          <img src="./Assets/html1.png" alt="" />
          <h3>HTML</h3>
        </div>
        <div className="item">
          <img src="./Assets/css.webp" alt="" />
          <h3>CSS</h3>
        </div>
        <div className="item">
          <img src="./Assets/js.webp" alt="" />
          <h3>JavaScript</h3>
        </div>
        <div className="item">
          <img src="./Assets/bootstrap.avif" alt="" />
          <h3>Bootstrap</h3>
        </div>
        <div className="item">
          <img src="./Assets/react.png" alt="" />
          <h3>React JS</h3>
        </div>
        <div className="item">
          <img src="./Assets/sql.png" alt="" />
          <h3>WSQL</h3>
        </div>
        <div className="item">
          <img src="./Assets/design2.jpg" alt="" />
          <h3>Web App</h3>
        </div>
      </div>
     
      
      
      
    </div>
  )
}
