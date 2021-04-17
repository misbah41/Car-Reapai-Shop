import React from "react";
import Header from "../Home/Header/Header";
import Footer from "../Shared/Footer/Footer/Footer";

const NoMatch = () => {
  return (
    <div>
      <div className="fixed-top">
        <Header />
      </div>
      <div className="container" style={{height:"50vh"}}>
        <h2 className='text-danger'>Page Not Found</h2>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default NoMatch;
