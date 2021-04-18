import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";

const ManageServices = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/loadServicesData")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  console.log(servicesData);

  const deleteService = (id) => {
    fetch(`http://localhost:3500/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("response", res);
      })
      .catch((error) => {
        console.log("error massage for delete book", error);
      });
    setServicesData(servicesData.filter((service) => service._id !== id));
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="ml-5">
        <h3>This is ManageServices page</h3>
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Service Price</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service) => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>{service.servicePrice}</td>
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
