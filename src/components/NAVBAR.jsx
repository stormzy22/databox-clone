import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAVBAR = () => {
   const [minnav, setMINNAV] = useState(false);
   return (
      <nav className="navbar navigation sticky-top">
         <div className="container d-block">
            <div className="navigation_header justify-content-between align-items-center py-2">
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
               <i className="fa-solid fa-bars d-md-none btn btn-light btn-outline-info" onClick={() => setMINNAV(!minnav)}></i>
            </div>
            {minnav && (
               <ul className="list-group list-group-flush nav-min-list">
                  <li className="list-group-item bg-transparent">
                     <Link to="/">Company</Link>
                  </li>
                  <li className="list-group-item bg-transparent">
                     <Link to="/">Services</Link>
                  </li>
                  <li className="list-group-item bg-transparent">
                     <Link to="/">Login</Link>
                  </li>
               </ul>
            )}
         </div>
      </nav>
   );
};

export default NAVBAR;
