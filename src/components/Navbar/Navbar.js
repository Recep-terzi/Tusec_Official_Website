import React, { useState, useRef, useEffect } from "react";
import {  NavLink } from "react-router-dom";
import "./Navbar.Module.css";

import { init } from "ityped";
import tusec from "../../assets/tusec.png";
import { Typography } from "@mui/material";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      startDelay: 100,
      typeSpeed: 50,
      strings: ["Welcome to", "TUSEC", ":)"],
    });
  }, []);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              src={tusec}
              alt=""
              style={{ width: "60px", marginRight: "10px" }}
            ></img>
            
            <Typography
                component="div"
                sx={{ flexGrow: 1,fontSize:"30px",fontWeight:"bold" }}
                className="kayan-yazi"

                ref={textRef}
              ></Typography>
          
          </NavLink>
          

          <ul className={click ? "nav-menu active" : "nav-menu"}>
           
            
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projeler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/calendar"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Takvim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                İletişim
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
