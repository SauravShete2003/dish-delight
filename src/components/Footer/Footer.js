import React from 'react'
import "./Footer.css"
import LogoImage from "./../../assets/logo.png"
import MobileImg from "./../../assets/FooterImg/mobile.png"
import EmailImg from "./../../assets/FooterImg/gmail.png"
import Address from "./../../assets/FooterImg/location.png"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footer-container'>

      <div className='contact-info-div'>
        <img src={LogoImage} className='logo-image' />

      </div>

      <div className='contact-info-div footer-links '>
        <p><b>Quick Links</b></p>
        <Link to="/" className='links'><p>Home</p></Link>
        <Link to="/veg"className='links'><p>Category</p></Link>
        <Link to="/blog"className='links'><p>Blog</p></Link>
        <Link to="/about"className='links'><p>About</p></Link>
      </div>

      <div className="contact-info-div ">
        <p><b><u>Usefull Links</u></b></p>
        <p>Privacy Policy</p>
        <p>Terms And conditions</p>

        <p>Support</p>
        <p>FAQ</p>
      </div>
      <div className='contact-info-div'>
        <p>About</p>
        <p className='font-size-sm'>Dish Delight, Tilak ward main road new Delhi,
          pin : 442903.
        </p>
      
      </div>
      <div className='contact-info-div contact-info-width'>
        <p className='contact-info-heading'>Contact Info</p>
        <img src={MobileImg} className='contact-logo align-items-start ' /><span className='font-size-sm'>+9922868597</span><br></br>
        <img src={EmailImg} className='contact-logo align-items-start ' /><span className='font-size-sm'>delight@gmail.com</span><br></br>
        <img src={Address} className='contact-logo align-items-start ' /><span className='font-size-sm'>1234 delight Building,New &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delhi,12002700</span>
      </div>

    </div>
  )
}

export default Footer
