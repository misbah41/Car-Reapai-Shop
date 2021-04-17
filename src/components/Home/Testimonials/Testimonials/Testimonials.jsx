import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3500/userReview')
    .then(res => res.json())
    .then(data => setReviews(data));
  },[])

  

  return (
    <div className="container mt-5 mb-5 pt-5">
      <h2>What Clients Say ?</h2>
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Carousel>
            <div className=" d-flex justify-content-around ">
            <div className="card p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum ab libero voluptatem accusamus commodi corrupti itaque culpa laborum, vero repudiandae, necessitatibus incidunt voluptas vitae minima. Necessitatibus similique labore nam.</p>
            </div>
            <div className="card p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum ab libero voluptatem accusamus commodi corrupti itaque culpa laborum, vero repudiandae, necessitatibus incidunt voluptas vitae minima. Necessitatibus similique labore nam.</p>
            </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
