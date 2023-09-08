import React from 'react'
import './contact.scss'

export default function Contact() {
  return (
    <div className='Contact'id='contact'>
      <div className="left">
        <img src="./Assets/feedback.jpg" alt="" /> 
      </div>
      <div className="right">
        <div className="up">
          <h2>Contact/Feedback</h2>
          <div className="email">
            <h3>email</h3>
            <input type="email"  />
          </div>
          <div className="textarea">
            <h3>write here</h3>
            <input type="textarea" />
          </div>
          <div className="send">
            <button>send</button>
          </div>
        </div>
        <div className="down">
          <img src="./Assets/done.webp" alt="" />
        </div>
      </div>
    </div>
  )
}
