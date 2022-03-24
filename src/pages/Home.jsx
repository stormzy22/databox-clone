import React, { useEffect, useState } from "react";
import MAINLAY from "../layout/MAIN-LAY";

const Home = () => {
   const [form_state, set_form_state] = useState(false);
   const img_arr = ["image4.jpg", "image1.jpg", "image2.png"];
   let num = 0;
   const [img, setImg] = useState(num);
   useEffect(() => {
      setInterval(() => {
         num = num + 1;
         if (num > 2) {
            num = 0;
            setImg(num);
         } else {
            setImg(num);
         }
      }, 2000);
   }, []);
   return (
      <MAINLAY>
         <div className="home-wrapper">
            {/* SECTION 1 */}
            <section className="home-section-1 py-3">
               <div className="home-section-1-grow">
                  <div className="index-header-img">
                     <img src={`/img/home/${img_arr[img]}`} loading="lazy" alt="" />
                  </div>
                  <div className="container">
                     <h1 className="text-center index-header-large-txt">Build dashboards and track performance from everywhere</h1>
                     <p className="index-header-small-txt">
                        Connect your data <mark>from any tool and track it from any device.</mark> No more logging into dozens of different tools to understand performance — now you and your team can easily connect your data, build and share reports, monitor trends, and discover insights.
                     </p>
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
               <img src="/img/home/sec2.jpg" loading="lazy" alt="" />
            </section>
            {/* SECTION 4 */}
            <section className="home-section-4 py-3">
               <div className="container h-s-4-container">
                  <div className="row h-s-4-2ndrow">
                     <div className="container h-s-4-2ndrow-container">
                        <div className="h-s-4-2ndrow-icon-wrap"></div>
                        <strong>Have other data that you need to send to Databox?</strong>
                        <p>In addition to our 70+ native integrations, you can also send any data by connecting a SQL database, sending your data via API, or through one of our integrations with Google Sheets, Zapier, or Integromat.</p>
                     </div>
                  </div>
               </div>
            </section>
            {/* SECTION 5 */}
            <section className="home-section-5 py-5">
               <div className="h-s-5-container row ">
                  <div className="col h-s-5-left d-none d-lg-flex flex-column justify-content-center">
                     <img src="/img/home/image5.png" loading="lazy" alt="" />
                  </div>
                  <div className="col h-s-5-right">
                     <div className="container">
                        <h3>Easily track thousands of metrics from all of your tools</h3>
                        <p>All Databox integrations come packed with the most popular metrics and their common visualizations already built into them. This way, you can spend less time figuring out how to visualize your data and more time actually acting on it. Mix and match metrics from different sources in one dashboard and get a more complete view of your performance at a glance.</p>
                        <span>Dashboard Design</span>
                        <h3>Build and customize your dashboards</h3>
                        <p>No more fumbling around trying to visualize data in spreadsheets or slides. Using the Dashboard Designer, you can pull the metrics you need, visualize KPIs in a variety of ways, and fully customize the look and presentation of your dashboards—no code or design skills necessary.</p>
                        <div className="h-s-5-btn-wrapper">
                           <button className="btn btn-lg btn-success mb-3" onClick={() => set_form_state(!form_state)}>
                              Connect your first data source
                           </button>
                           {form_state && (
                              <form className="row row-cols-2">
                                 <div className="col-auto">
                                    <input type="search" className="form-control" />
                                 </div>
                                 <div className="col-auto">
                                    <button className="btn btn-success">SEARCH</button>
                                 </div>
                              </form>
                           )}
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
