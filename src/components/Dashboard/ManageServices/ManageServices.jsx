import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";

const ManageServices = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("https://obscure-hamlet-08357.herokuapp.com/loadServicesData")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);


  const deleteService = (id) => {
    fetch(`https://obscure-hamlet-08357.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("response", res);
      })
      .catch((error) => {
        console.log("error massage for delete service", error);
      });
    setServicesData(servicesData.filter((service) => service._id !== id));
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="ml-5">
        <h4>All Service Here You Want Edit or Delete This Service</h4>
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th style={{paddingLeft:'10px'}}>Service Price</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service) => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td style={{paddingLeft:'10px'}}>{service.servicePrice}</td>
                <td className="text-center">
                  <button
                    onClick={() => deleteService(service._id)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
