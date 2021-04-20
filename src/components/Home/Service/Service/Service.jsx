import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Service.css";

const Service = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("https://obscure-hamlet-08357.herokuapp.com/loadServicesData")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <div className="service-wrapper" id="services">
      <div className="container mt-5 pt-5 mb-5">
        <div className="titleDiv">
          <h3 className="title text-center">Our Awesome Services</h3>
        </div>
        <div className="row justify-content-center">
          {servicesData.map((serviceData) => (
            <div className="col-sm-6 col-md-4">
              {" "}
              <ServiceCard
                key={serviceData._id}
                serviceData={serviceData}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
