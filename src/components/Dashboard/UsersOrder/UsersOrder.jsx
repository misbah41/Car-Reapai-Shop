import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import './UsersOrder.css';
const UsersOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/allOrdersList")
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
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.username}</td>
                <td>{order.email}</td>
                <td>{order.parseData.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersOrder;
