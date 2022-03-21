import React from "react";
import FOOTER from "../components/FOOTER";
import NAVBAR from "../components/NAVBAR";

// eslint-disable-next-line react/prop-types
const MAINLAY = ({ children }) => {
   return (
      <main className="main-layout">
         <NAVBAR />
         <div className="main-layout-wrap">{children}</div>
         <FOOTER />
      </main>
   );
};

export default MAINLAY;
