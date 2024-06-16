import "./Navbar.css"
import logo from "./../../assets/logo.png"
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <>
      <div className="navbar-container" >
        <div className='navbar-items-container'>
          <img src={logo} className="navbar-logo" />
          <Link to={"/"}className='navbar-items'>Home</Link>
          <Link to={"/vegcard"} className='navbar-items'>Categories</Link>
          <Link to={"/blog"}className='navbar-items'>Blog</Link>
          <Link to={"/about"} className='navbar-items'>About</Link>
        </div>
        <div >
        <Link to={"/login"} className='navbar-items mr-20'>Log in</Link>
        </div>

      </div>
    </>
  )
}

export default Navbar