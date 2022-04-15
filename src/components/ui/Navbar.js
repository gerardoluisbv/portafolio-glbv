import React, { useState } from "react";

import { SidebarData } from "../../data/sidebarData";
import "./Navbar.css";

import menuBurguer from "../../../src/menuBurguerWhite.svg";
import menuBurguerClose from "../../../src/closeMenuWhiteX.svg";
import lconoMenuSvg from "../../../src/logoGerardoluisbvAI.svg";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header className="navbar navbar-header--main ">
        {/*<Link to='#' className='menu-bars'>*/}
        <div className="navbar-header__container">
          <div className="gb-header__brand">
            <div className="nav-left" onClick={showSidebar}>
              <img
                className="icons"
                src={sidebar ? menuBurguerClose : menuBurguer}
                alt="logo"
              />
            </div>

            <div className="nav-left"></div>
          </div>

          <div className="gb-header__brand">
            <div className="nav-right">
              <img className="iconLogoMenu" src={lconoMenuSvg} alt="logo" />
            </div>
            <div className=" nav-right">
              <div className="nav-cart"></div>
            </div>
          </div>
        </div>

        {/*</Link>*/}
      </header>

      <div
        className={sidebar ? "left-col-backdrop active" : "left-col-backdrop"}
        onClick={showSidebar}
      >
     
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-text">
              <span> Home </span>
              
            </li>
            <li className="nav-text">
              <span> About </span>
              
            </li>
            <li className="nav-text">
              <span> Works </span>
              
            </li>
            <li className="nav-text">
              <span> Resume </span>
              
            </li>
            <li className="nav-text">
              <span> Testimonials </span>
              
            </li>

            <li className="nav-text">
              <span> Contact </span>
              
            </li>
          </ul>
        </nav>
       
      </div>
    </>
  );
};

export default Navbar;
