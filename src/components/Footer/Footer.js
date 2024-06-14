import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
    
        <div className='contact-info-div'></div>
        <div className='contact-info-div'>
          <p>About</p>
          <p>Dish Delight, Tilak ward main road new Delhi,
            pin : 442903.
          </p>
          <div>
            <img src="" />
            <img src="" />
            <img src="" />
            <img src="" />
          </div>
        </div>
        <div className='contact-info-div'>
          <p>Contact Info</p>
        </div>
        <div className='contact-info-div'>
          <p>Opening Hours</p>
          <p>Monday Thusday<br></br>
            10:00 AM To 11:00PM
          </p>

          <p>Friday Sunday <br></br>
            12.00PM To 3.00PM
          </p>

        </div>
    



    </div>
  )
}

export default Footer
