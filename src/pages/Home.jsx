import React from "react";
import MAINLAY from "../layout/MAIN-LAY";

const Home = () => {
   return (
      <MAINLAY>
         <div className="home-wrapper">
            {/* SECTION 1 */}
            <section className="home-section-1 py-3">
               <div className="home-section-1-grow">
                  <div className="index-header-img">
                     <img src="/img/home/header.jpg" alt="" />
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
            </section>
            {/* SECTION 2 */}
            <section className="home-section-2">
               <div className="py-5">
                  <div className="container">
                     <h2 className="h-s-2-large-txt text-center">Databox is just easier to use</h2>
                     <p className="h-s-2-small-txt text-center">20,000+ businesses use Databox to track and visualize performance easier than they ever have before.</p>
                     <div className="row row-cols-1 row-cols-lg-3 h-s-2-row">
                        {/* ---------------[1]------------ */}
                        <div className="col h-s-2-col">
                           <div className="card h-s-2-card">
                              <div className="card-body h-s-2-card-body">
                                 <div className="img-container">
                                    <img src="/img/home/logo-g2crowd.png" alt="" className="d-block mx-auto" />
                                    <img src="/img/home/4-5stars.png" alt="" className="d-block mx-auto" />
                                 </div>
                                 <div className="h-s-2-card-body-score text-center">
                                    <span>4.5</span> out of <span>5 </span>stars
                                 </div>
                                 <a className="d-block">read reviews</a>
                              </div>
                           </div>
                        </div>
                        {/* ----------------[2]------------ */}
                        <div className="col h-s-2-col">
                           <div className="card h-s-2-card">
                              <div className="card-body h-s-2-card-body">
                                 <div className="img-container">
                                    <img src="/img/home/g2.png" alt="" className="d-block mx-auto" />
                                 </div>
                                 <p className="h-s-2-card-body-score text-center">2022 Leader on the</p>
                                 <a className="d-block">G2 Grid for Data Visualization</a>
                              </div>
                           </div>
                        </div>
                        {/* ----------------[3]------------ */}
                        <div className="col h-s-2-col">
                           <div className="card h-s-2-card">
                              <div className="card-body h-s-2-card-body">
                                 <div className="img-container">
                                    <img src="/img/home/logo-capterra-2.png" alt="" className="d-block mx-auto" />
                                    <img src="/img/home/4-5stars.png" alt="" className="d-block mx-auto" />
                                 </div>
                                 <div className="h-s-2-card-body-score text-center">
                                    <span>4.5</span> out of <span>5 </span>stars
                                 </div>
                                 <a className="d-block">read reviews</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* SECTION 3 */}
            <section className="home-section-3">
               <img src="/img/home/sec2.jpg" alt="" />
            </section>
            {/* SECTION 4 */}
            <section className="home-section-4 py-5">
               <div className="container h-s-4-container">
                  <div className="row mb-1 h-s-4-row">
                     <div className="container h-s-4-row-container">
                        <h3>Easily track thousands of metrics from all of your tools</h3>
                        <p>All Databox integrations come packed with the most popular metrics and their common visualizations already built into them. This way, you can spend less time figuring out how to visualize your data and more time actually acting on it. Mix and match metrics from different sources in one dashboard and get a more complete view of your performance at a glance.</p>
                        <div className="h-s-4-row-btn-wrapper">
                           <a href="" className="btn btn-lg btn-success mb-3 mb-md-0 ">
                              Connect your first data source
                           </a>
                           <a href="" className="btn btn-lg btn-light text-primary ms-4 fw-bolder border-primary ">
                              Browse integrations
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </MAINLAY>
   );
};

export default Home;
