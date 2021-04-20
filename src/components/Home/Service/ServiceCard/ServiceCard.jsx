import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css';
const ServiceCard = ({ serviceData }) => {
  return (
    <div className="service-card">
      <img src={`data:image/png;base64,${serviceData.image.img}`} alt="" />
      <div className="d-flex justify-content-around">
        <div className="serviceTitle">
          <h4>{serviceData.name}</h4>
        </div>
        <div className="serviceDiscount">
          <small className='discount'>{serviceData.discount}%</small><br/>
          <small className='discOff'>{serviceData.serviceOff}</small>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <Link className='serviceBtn' to={`/serviceCheckout/${serviceData._id}`} >Get Service</Link>
        <h5 className='servicePrice'>$ {serviceData.servicePrice}</h5>
      </div>
    </div>
  );
};

export default ServiceCard;
