import React from "react";
import './ServiceCard.css';
const ServiceCard = ({ serviceData }) => {
  
  return (
    <div className="service-card">
      <img src={serviceData.seviceImg} alt="" />
      <div className="d-flex justify-content-around">
        <div className="serviceTitle">
          <h4>{serviceData.serviceTitle}</h4>
        </div>
        <div className="serviceDiscount">
          <small className='discount'>{serviceData.discount}</small><br/>
          <small className='discOff'>{serviceData.discountPost}</small>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <button className='serviceBtn' >Get Service</button>
        <h5 className='servicePrice'>{serviceData.servicePrice}</h5>
      </div>
    </div>
  );
};

export default ServiceCard;
