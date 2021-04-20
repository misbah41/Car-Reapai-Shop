import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import "./UsersOrder.css";
const UsersOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://obscure-hamlet-08357.herokuapp.com/allOrdersList")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service </th>
              <th>Pay With </th>
              <th>Status </th>
            </tr>
          </thead>
          <tbody style={{padding:'20px'}}>
            {orders.map((order) => (
              <tr key={order._id}>
                <td style={{paddingLeft:'10px', paddingTop:'10px', backgroundColor:'gray'}}>{order.username}</td>
                <td style={{paddingLeft:'10px', paddingTop:'10px', backgroundColor:'gray'}}>{order.email}</td>
                <td style={{paddingLeft:'10px', paddingTop:'10px', backgroundColor:'gray'}}>{order.parseData.name}</td>
                <td style={{paddingLeft:'10px', paddingTop:'10px', backgroundColor:'gray'}}>VISA CARD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersOrder;
