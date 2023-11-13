import React, { useState, useEffect  } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay the animation for 500 milliseconds (0.5 seconds)

    return () => clearTimeout(timer);
  }, []); // Run the effect only once after the component mounts


  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            {/* <img src='./images/logo.png' alt='' /> */}
            <h2>YOURTUT</h2>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
          {/* <Link to="/book-free-trial" className='btn1' style={{ color: 'green' }}>Book Free Trial</Link > */}
          <Link
            to="/book-free-trial"
            className={`slide-in-button ${isVisible ? 'show' : ''}`}
            style={{ color: 'black' }}
          >
            Book Free Trial
          </Link>
            <Link to="/login" className='btn1'>Login</Link >
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
      <div className="under-construction-bar">
        <p>
          Website under construction, please call us on <span>+91-8432235748</span> for booking sessions.
        </p>
      </div>
    </>
  )
}

export default Header
