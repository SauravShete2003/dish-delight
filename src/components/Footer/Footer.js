import React from 'react'
import "./Footer.css"
import LogoImage from "./../../Assets/logo3.jpg"
import MobileImg from "./../../Assets/footer-img/mobile (1).png"
import EmailImg from "./../../Assets/footer-img/gmail.png"
import Address from "./../../Assets/footer-img/location.png"

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
          <img src= {MobileImg} className='contact-logo align-items-start' /><span>+9922868597</span><br></br>
          <img src= {EmailImg} className='contact-logo align-items-start'/><span>delight@gmail.com</span><br></br>
          <img src= {Address} className='contact-logo align-items-start'/><span>1234 delight Building,New Delhi,12002700</span>
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
