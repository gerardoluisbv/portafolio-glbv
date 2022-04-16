import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import menuBurguer from "../../../src/menuBurguerWhite.svg";
import menuBurguerClose from "../../../src/closeMenuWhiteX.svg";
import lconoMenuSvg from "../../../src/logoGerardoluisbvAI.svg";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header className="navbar">
        <div className="navbar-header__container">
          <div className="nav-left" onClick={showSidebar}>
            <img
              className="icons"
              src={sidebar ? menuBurguerClose : menuBurguer}
              alt="logo"
            />
          </div>

          <div className=" nav-right">
            <img className="iconLogoMenu" src={lconoMenuSvg} alt="logo" />
          </div>
        </div>
      </header>

      <div
        className={sidebar ? "left-col-backdrop active" : "left-col-backdrop"}
        onClick={showSidebar}
      >
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items" onClick={showSidebar}>
            <NavLink
              className={({ isActive }) =>
                "nav-text" + (isActive ? " activated" : "")
              }
              to="/"
            >
              <span> Home </span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-text" + (isActive ? " activated" : "")
              }
              to="/about"
            >
              <span> About </span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-text" + (isActive ? " activated" : "")
              }
              to="/works"
            >
              <span> Works </span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-text" + (isActive ? " activated" : "")
              }
              to="/resume"
            >
              <span> Resume </span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-text" + (isActive ? " activated" : "")
              }

              to="/testimonials"
            >
              <span> Testimonials </span>
             </NavLink>


            <NavLink
              className={({ isActive }) =>
                "nav-text" + (isActive ? " activated" : "")
              }
              to="/contact"
            >
              <span> Contact</span>
            
            </NavLink>

          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
