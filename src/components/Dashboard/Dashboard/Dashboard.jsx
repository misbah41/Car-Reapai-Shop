import React, { useEffect, useState } from "react";

import Sidebar from "../SideBar/Sidebar";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    fetch(`https://obscure-hamlet-08357.herokuapp.com/bookingList/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);


  return (
    <section className="d-flex">
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm-5 card">
            <h3>Your Orders {orders.length}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
