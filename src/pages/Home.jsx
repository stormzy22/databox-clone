import React from "react";
import MAINLAY from "../layout/MAIN-LAY";

const Home = () => {
   return (
      <MAINLAY>
         <div className="index-wrap">
            <div className="index-header-img">
               <img src="/img/header.jpg" alt="" />
            </div>
            <div className="container">
               <h1 className="text-center index-header-large-txt">Build dashboards and track performance from everywhere</h1>
               <p className="index-header-small-txt text-center">
                  Connect your data <mark>from any tool and track it from any device.</mark> No more logging into dozens of different tools to understand performance — now you and your team can easily connect your data, build and share reports, monitor trends, and discover insights.
               </p>
               <form className="d-flex flex-column align-items-center">
                  <div className="d-flex align-items-center">
                     <span className="mx-2">
                        <i className="fas fa-rotate-left"></i>
                     </span>
                     <div className="input-group">
                        <input type="email" name="" id="" className="form-control border-3 " placeholder="Your company email" />
                        <button className="input-group-text btn btn-success rounded-2">Start now </button>
                     </div>
                  </div>
                  <small>ww</small>
               </form>
            </div>
         </div>
      </MAINLAY>
   );
};

export default Home;
