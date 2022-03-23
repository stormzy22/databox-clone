import React from "react";
import { Link } from "react-router-dom";

const NAVBAR = () => {
   return (
      <nav className="navbar navigation sticky-top">
         <div className="container d-block">
            <div className="navigation_header justify-content-md-between py-2">
               <img src="/img/logo/logo.png" alt="" className="navigation_header_logo navbar-brand" loading="lazy" />
               <ul className="navbar-nav d-none d-md-flex  navigation_header_ul">
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Company</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Services</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Login</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default NAVBAR;
