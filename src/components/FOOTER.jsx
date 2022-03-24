import React from "react";

const FOOTER = () => {
   return (
      <footer className="main-footer py-4">
         <div>
            <div className="container">
               <hr />
               <div className="d-flex flex-column flex-md-row justify-content-md-between">
                  <p className="grey">2022 © Databox, Inc. All Rights Reserved. Terms of Service Privacy Policy</p>
                  <div className="d-flex align-items-center grey gap-3 gap-md-4 fs-4">
                     <span>Connect with us:</span>
                     <i className="fa-brands fa-facebook"></i>    
                     <i className="fa-brands fa-twitter "></i>
                     <i className="fa-brands fa-instagram"></i>
                     <i className="fa-brands fa-linkedin-in"></i>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FOOTER;
