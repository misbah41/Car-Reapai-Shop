import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sidebar';

const ManageServices = () => {
  const [allOrders, setAllOrders] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:3500/allOrdersList')
    .then(res => res.json())
    .then(data => setAllOrders(data))
  },[]);

console.log(allOrders);

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <h3>This is ManageServices page</h3>
      </div>
    </div>
  );
};

export default ManageServices;