import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import MyOrderListCard from "./MyOrderListCard/MyOrderListCard";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    fetch(`https://obscure-hamlet-08357.herokuapp.com/bookingList/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="container">
        <h3>Your Ordered List</h3>
        <div className="row">
          {orders.map((order) => (
            <div className="col-md-4 col-sm-6">
              {" "}
              <MyOrderListCard order={order} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
