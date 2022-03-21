import React from "react";
import { Link } from "react-router-dom";

const NAVBAR = () => {
   return (
      <nav className="navbar navigation sticky-top">
         <div className="container d-block">
            <div className="navigation_header justify-content-md-between justify-content-start py-3">
               <ul className="navbar-nav d-none d-md-flex navigation_header_ul">
                  <li className="nav-item ar-down navigation_header_ul_li">
                     <Link to="/">Product</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Services</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Pricing</Link>
                  </li>
               </ul>
               <img src="/img/logo/logo.png" alt="" className="navigation_header_logo navbar-brand" loading="lazy" />
               <ul className="navbar-nav d-none d-md-flex  navigation_header_ul">
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Company</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Resources</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">Login</Link>
                  </li>
                  <li className="nav-item navigation_header_ul_li">
                     <Link to="/">
                        <button className="btn btn-success px-1 py-1 fw-bold">free signup</button>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default NAVBAR;
