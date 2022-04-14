import React, { useState } from 'react'

import { SidebarData } from '../data/sidebarData';
import './Navbar.css';

import menuBurguer from "../../src/menuBurguer.svg";
import lconoMenuSvg from "../../src/logoGerardoluisbvAI.svg";

import iconUser from "../../src/iconUser.svg";


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
               <img className="icons" src={menuBurguer} alt="logo" style={ {width:'20px'} }/>
            </div>

            <div className="nav-left">
               <img className="iconLogoMenu" src={lconoMenuSvg} alt="logo" />
            </div>
          </div>

          <div className="gb-header__brand">
            <div className="nav-right">
               <img className="icons" src={iconUser} alt="logo" />
            </div>
            <div className=" nav-right">
              <div className="nav-cart">
                
              </div>
            </div>
          </div>
        </div>
        {/* <FaIcons.FaBars  />*/}
        {/*</Link>*/}
      </header>

      <div
        className={sidebar ? "left-col-backdrop active" : "left-col-backdrop"}
        onClick={showSidebar}
      >
        {/*<div id='left-col-backdrop'>*/}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {/*<Link to={item.path}>*/}
                  {item.icon} {/* viene un string que renderiza los iconos */}
                  <span>{item.title}</span>
                  {/*</Link>*/}
                </li>
              );
            })}
          </ul>
        </nav>
        {/*</div>*/}
      </div>
    </>
  );
}


export default Navbar;
