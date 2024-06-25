import React from 'react'
import "./Footer.css"
import LogoImage from "./../../assets/logo.png"
import MobileImg from "./../../assets/FooterImg/mobile.png"
import EmailImg from "./../../assets/FooterImg/gmail.png"
import Address from "./../../assets/FooterImg/location.png"

function Footer() {
  return (
    <div className='footer-container'>
    
        <div className='contact-info-div'>
        <img src={LogoImage}  className='logo-image'/>

        </div>
        <div className='contact-info-div'>
          <p>About</p>
          <p className='font-size-sm'>Dish Delight, Tilak ward main road new Delhi,
            pin : 442903.
          </p>
          <div>
            <img src="" />
            <img src="" />
            <img src="" />
            <img src="" />
          </div>
        </div>
        <div className='contact-info-div contact-info-width'>
          <p className='contact-info-heading'>Contact Info</p>
          <img src= {MobileImg} className='contact-logo align-items-start ' /><span className='font-size-sm'>+9922868597</span><br></br> 
           <img src= {EmailImg} className='contact-logo align-items-start '/><span className='font-size-sm'>delight@gmail.com</span><br></br>
          <img src= {Address} className='contact-logo align-items-start '/><span className='font-size-sm'>1234 delight Building,New &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delhi,12002700</span>
        </div>

        <div className='contact-info-div'>
          <p >Opening Hours</p>
          <p className='font-size-sm'>Monday Thusday<br></br>
            10:00 AM To 11:00PM
          </p>

          <p className='font-size-sm'>Friday Sunday <br></br>
            12.00PM To 3.00PM
          </p>

        </div>
    



    </div>
  )
}

export default Footer
