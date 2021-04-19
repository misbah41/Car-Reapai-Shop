import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Reviewimg from "./reviewimg.png";
import "./Testimonilas.css";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://obscure-hamlet-08357.herokuapp.com/userReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <div className="container mt-5 mb-5 pt-5">
      <h2>What Clients Say ?</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={Reviewimg} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="col-md-6">
          <Carousel>
            {reviews.map((review) => (
              <div className=" d-flex justify-content-around ">
                <div className="card p-3" style={{ marginBottom: "50px" }}>
                  <div className="review-card">
                    <h4>{review.name}</h4>
                    <p>{review.company}</p>
                    <p>{review.position}</p>
                    <p>{review.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
