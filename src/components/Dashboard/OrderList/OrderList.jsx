import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../SideBar/Sidebar';

const OrderList = () => {
const [orders, setOrders] = useState([]);
const [selectedDate, setSelectedDate] = useState(new Date());
const [loggedInUser, setLoggedInUser] = useContext(UserContext);



useEffect(() => {
  fetch("http://localhost:3500/bookingList", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ date: selectedDate, email:loggedInUser.email}),
  })
    .then((res) => res.json())
    .then((data) => setOrders(data));
}, [selectedDate, loggedInUser]);



  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <h3>Hello Order list App</h3>
      </div>
    </div>
  );
};

export default OrderList;