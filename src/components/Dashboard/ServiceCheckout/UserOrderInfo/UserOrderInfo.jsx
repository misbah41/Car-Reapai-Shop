import React from 'react';
import './UserOrderInfo.css';
const UserOrderInfo = ({loggedInUser, book}) => {
  const email = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');
  
  return (
    <div>
      <ul className='userOrderInfo'>
        <li>{userName}</li>
        <li>{email}</li>
        <li>Service Name : {book.name}</li>
        <li>Your Service Cost Total will be $ {book.servicePrice}</li>
      </ul>
    </div>
  );
};

export default UserOrderInfo;