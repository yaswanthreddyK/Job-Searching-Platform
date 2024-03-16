import { BrowserRouter, NavLink, Route, useLocation } from 'react-router-dom';
import "./Navbar.css"
import { useEffect, useState } from 'react';

export default function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)
  const location = useLocation()
  const staticNav = location.pathname !== "/" ? true : false;
 const user = true;

 useEffect(()=>{
      setShowNavbar(false)
 },[location.pathname])
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={`${staticNav && " fixed-navbar"}`}>

    <nav className={`navbar  ${staticNav && " static"} `}>
      <div className="container">
        <div className="logo">
          <a href="/">
          <div className='logo'>
            <img src="../../../img/logo.svg" alt="" />
          </div>
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && ' active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-all/professionals">Green Giggers</NavLink>
            </li>
            <li>
              <NavLink to="/search-all/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/search-all/companies">Climate Tech</NavLink>
            </li>
            <li>
              <NavLink to="/carbon-monetization">Carbon Monetization</NavLink>
            </li>
            <li>
              {user ? ( <NavLink to="/profile">Profile</NavLink>) : ( <NavLink to="/login">Login</NavLink>)}
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};


const Hamburger = () => (
  <svg
  className={`hamburger`}
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

