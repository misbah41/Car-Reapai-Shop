import React from 'react';
import Sidebar from '../SideBar/Sidebar';

const EmtyCheckOut = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <div className='pt-5'>
        <h3 className='pt-5 mt-5 text-success'>Before Choose An Service Then You Order An Service</h3>
      </div>
    </div>
  );
};

export default EmtyCheckOut;