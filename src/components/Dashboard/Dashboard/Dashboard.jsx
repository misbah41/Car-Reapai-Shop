import React from "react";

import Sidebar from "../SideBar/Sidebar";

const Dashboard = () => {
  return (
    <section className='d-flex'>
      <Sidebar/>
      <div>
        <h2>Well Come To Dashboard</h2>
      </div>
    </section>
  );
};

export default Dashboard;
