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
                     <h1 className="text-center index-header-large-txt">Track performance using sentiments from social media</h1>
                     <p className="index-header-small-txt">
                        Understand products and customers using social media<mark>Track and analyze comments from social media using Artificial intelligence.</mark> use machine learning and natural language processing to understand performance of your survey by analyzing unbiased comments of your users — now you and your team can easily connect your social media, visualize analytical reports, monitor trends, and discover insights.
                     </p>
                     <div className="d-flex flex-column align-items-center">
                        <button className="btn btn-lg btn-success mb-3" onClick={() => set_form_state(!form_state)}>
                           Track your first product
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
            </section>
            {/* SECTION 2 */}
            <section className="home-section-2">
               <div className="py-5">
                  <div className="container">
                     <h2 className="h-s-2-large-txt text-center">Our algorithm can serve your business analytical needs</h2>
                     <p className="h-s-2-small-txt">We have made machine learning accessable for your business neeeds to track and visualize performance easier than they ever have before. Our sentiment driven solution will help you understand customers needs helping you scale your products and services.</p>
                     <p className="h-s-2-small-txt ">We can also help you run tailored, engaging social media campaigns to help you generate the right kind of sentiments to answer specific business questions, that will meet your your business needs. We believe every business should understand its market and should be able to capitalize on that information, our goal is simply to help you understand your business needs</p>
                     <div className="h-s-2-about">
                        <h2 className="h-s-2-large-txt text-center">About us</h2>
                        <p className="h-s-2-small-txt">Unbiased Analytics is an AI product, that helps simplies how realistic business survey data can be collected and analyzed eliminating. With this tool, users are able to seamlessly run our AI algorithm against there social media campaigns, product reviews and general comments about their products and services for deeper and more detailed insights, instantaneously. our platform is compatible with a number of popular platforms such as Twitter, Facebook, Instagram, Linkedin and Tiktok giving users the ability to gain clear understanding about their business needs judging from sentiments of customers.</p>
                        <h2 className="h-s-2-large-txt text-center">You dont need a Data Database to use our platform</h2>
                        <p className="h-s-2-small-txt mb-5">Our platform does not require your database, we have infact allow you to own a database on our server where you can store your sentiments and access it on the cloud. Our skillfull data engineering process connects your data seamlesslessly to our datawarehouse where sentiments can be analyzed and tracked.</p>
                        <div className="h-s-2-about-card">
                           <div className="row row-cols-1 row-cols-lg-2 g-4">
                              {/* -------------- */}
                              <div className="col about-col">
                                 <div className="card about-col-card">
                                    <div className="card-body about-col-card-body">
                                       <div className="card-title about-col-card-title">
                                          <i className="fa-brands fa-uikit fa-10x"></i>
                                       </div>
                                       <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas est excepturi dolor. Ex aliquid voluptatibus, cupiditate eligendi corrupti placeat, quae excepturi, minus ut necessitatibus sit aut porro consequuntur voluptas tempora animi maxime accusantium fugit odio unde. Porro vel voluptates consequatur possimus adipisci molestias sequi animi dolor ipsa maiores? Voluptate non ipsum, natus aut esse magni dicta. Porro expedita sequi earum veritatis minus fugit. Laudantium ipsum voluptatum enim deleniti aliquam neque labore debitis natus nemo laborum doloremque fuga officiis qui delectus blanditiis eligendi, dicta voluptate quo. Quasi quisquam eveniet quibusdam deserunt ab quia aut, ex, suscipit magnam, iure odio. Perferendis.</div>
                                    </div>
                                 </div>
                              </div>
                              {/* -------------- */}
                              <div className="col about-col">
                                 <div className="card h-100 about-col-card">
                                    <div className="card-body about-col-card-body">
                                       <div className="card-title  about-col-card-title">
                                          <i className="fa-solid fa-gears fa-10x "></i>
                                       </div>
                                       <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas est excepturi dolor. Ex aliquid voluptatibus, cupiditate eligendi corrupti placeat, quae excepturi, minus ut necessitatibus sit aut porro consequuntur voluptas tempora animi maxime accusantium fugit odio unde. Porro vel voluptates consequatur possimus adipisci molestias sequi animi dolor ipsa maiores? Voluptate non ipsum, natus aut esse magni dicta. Porro expedita sequi earum veritatis minus fugit. Laudantium ipsum voluptatum enim deleniti aliquam neque labore debitis natus nemo laborum doloremque fuga officiis qui delectus blanditiis eligendi, dicta voluptate quo. Quasi quisquam eveniet quibusdam deserunt ab quia aut, ex, suscipit magnam, iure odio. Perferendis.</div>
                                    </div>
                                 </div>
                              </div>
                              {/* -------------- */}
                              <div className="col about-col">
                                 <div className="card h-100 about-col-card">
                                    <div className="card-body about-col-card-body">
                                       <div className="card-title  about-col-card-title">
                                          <i className="fa-solid fa-lightbulb fa-10x"></i>
                                       </div>
                                       <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas est excepturi dolor. Ex aliquid voluptatibus, cupiditate eligendi corrupti placeat, quae excepturi, minus ut necessitatibus sit aut porro consequuntur voluptas tempora animi maxime accusantium fugit odio unde. Porro vel voluptates consequatur possimus adipisci molestias sequi animi dolor ipsa maiores? Voluptate non ipsum, natus aut esse magni dicta. Porro expedita sequi earum veritatis minus fugit. Laudantium ipsum voluptatum enim deleniti aliquam neque labore debitis natus nemo laborum doloremque fuga officiis qui delectus blanditiis eligendi, dicta voluptate quo. Quasi quisquam eveniet quibusdam deserunt ab quia aut, ex, suscipit magnam, iure odio. Perferendis.</div>
                                    </div>
                                 </div>
                              </div>
                              {/* -------------- */}
                              <div className="col about-col">
                                 <div className="card h-100 about-col-card">
                                    <div className="card-body about-col-card-body">
                                       <div className="card-title  about-col-card-title">
                                          <i className="fa-solid fa-brain fa-10x"></i>
                                       </div>
                                       <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas est excepturi dolor. Ex aliquid voluptatibus, cupiditate eligendi corrupti placeat, quae excepturi, minus ut necessitatibus sit aut porro consequuntur voluptas tempora animi maxime accusantium fugit odio unde. Porro vel voluptates consequatur possimus adipisci molestias sequi animi dolor ipsa maiores? Voluptate non ipsum, natus aut esse magni dicta. Porro expedita sequi earum veritatis minus fugit. Laudantium ipsum voluptatum enim deleniti aliquam neque labore debitis natus nemo laborum doloremque fuga officiis qui delectus blanditiis eligendi, dicta voluptate quo. Quasi quisquam eveniet quibusdam deserunt ab quia aut, ex, suscipit magnam, iure odio. Perferendis.</div>
                                    </div>
                                 </div>
                              </div>
                              {/* -------------- */}
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
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </MAINLAY>
   );
};

export default Home;
