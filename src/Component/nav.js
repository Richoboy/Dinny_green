import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavComp = () => {
  const [active, setActive] = useState(true);
  const handleActive = () => setActive(!active)

  return (
    <div>
      <div class="container">
        <div class="container_box">
          <div class="container_box1">
            <div class="info">
              <ul>
                <li>
                  <span class="darkg">Call:</span> +234 9012624162
                </li>
                <li>
                  <span class="darkg">Support:</span>
                  <a href="mailtoinfo@yourcompany.com"> info@yourcompany.com</a>
                </li>
              </ul>
            </div>

            <div class="butt">
              <button class="button">
                <a href="">Log in</a>
              </button>
              <button class="button button-darkg">
                <a href="">Register</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="nav-box">
          <div className="logo">
            <img src="images/logo1.png" alt="logo" />
          </div>
          <div className="mid">
           
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/Instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            <button className="con">Contact</button>
            </ul>
          </div>
        </div>
        {/* mobile view */}

        
          <div className="toggler" onClick={handleActive}>
              <i className={active? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
            
            <ul className="mobile-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/Instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <button className="con">Contact</button>
            </ul>
          </div>
        
      </div>
    </div>
  );
};

export default NavComp;
