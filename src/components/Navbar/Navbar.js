import "./Navbar.css"


function Navbar() {
  return (
    <>
      <div className="navbar-container" >
        <div className='navbar-items-container'>
          <img src={logo} className="navbar-logo" />
          <span className='navbar-items'>Home</span>
          <span className='navbar-items'>Categories</span>
          <span className='navbar-items'>Blog</span>
          <span className='navbar-items'>About</span>
        </div>
        <div >
        <span className='navbar-items'>Log in</span>
        </div>

      </div>
    </>
  )
}

export default Navbar