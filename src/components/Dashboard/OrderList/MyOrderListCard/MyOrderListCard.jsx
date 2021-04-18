import React from 'react';

const MyOrderListCard = ({order}) => {
  console.log(order);
  return (
    <div className='card p-3 text-center text-muted'>
      <h3>{order.parseData.name}</h3>
      <p>{order.parseData.description}</p>
    </div>
  );
};

export default MyOrderListCard;