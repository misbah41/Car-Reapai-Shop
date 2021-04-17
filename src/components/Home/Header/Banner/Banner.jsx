import React from "react";
import "./Banner.css";
import "../../../../images/bg7.jpg";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../InfoCard/InfoCard";
const infoCardData = [
  {
    id:'7835efrhd65v',
    infoTitle: "Mail Us Today",
    infoPost: "info@yourdomain.com",
    infoIcon: faEnvelope,
  },
  {
    id:'ndhg45363523',
    infoTitle: "Company Location",
    infoPost: "121 King Street, Melbourne",
    infoIcon: faMapMarkedAlt,
  },
  {
    id:'76354gdnsb4',
    infoTitle: "+(012) 345 6789",
    infoPost: "Call us for more details",
    infoIcon: faPhoneSquareAlt,
  },
];
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="banner-title">
              <h4>We Always Provide You</h4>
            </div>
            <div className="subtitle">
              <h2>Best Car Repair Services</h2>
            </div>
            <p className="text-center text-white p-5 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iusto repellendus rem, magni dicta neque omnis quo
              quia cum obcaecati culpa, ratione eum natus eligendi quam rerum
              amet atque praesentium!
            </p>
          </div>
        </div>
      </div>
      <div className="pb-5 container-fluid banner-fluid">
        <div style={{marginBottom:'-49px'}} className="row text-center justify-content-center">
          {infoCardData.map((infoData) => (
            <div className="col-sm-6 col-md-4">
              <div style={{color:'#fff'}} className="social ">
                <InfoCard key={infoData.id} infoData={infoData} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
