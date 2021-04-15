import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import serviceFakeData from "../ServiceFakeData.json";
import './Service.css';

const Service = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    setServicesData(serviceFakeData);
  }, []);

  return (
    <div className="service-wrapper" id="services">
      <div className="container mt-5 pt-5 mb-5">
        <h3 className='text-center'>Our Awesome Services</h3>
        <div className="row">
          {servicesData.map((serviceData) => (
            <div className="col-sm-6 col-md-4">
              {" "}
              <ServiceCard
                key={serviceData.serviceKey}
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
