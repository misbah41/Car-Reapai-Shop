import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../SideBar/Sidebar";
import UserOrderInfo from "./UserOrderInfo/UserOrderInfo";
const ServiceCheckout = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  localStorage.setItem('dynamicId', id);
  
  useEffect(() => {
    fetch("https://obscure-hamlet-08357.herokuapp.com/serviceById/"+id)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);



  const handlePlaceOrder = (paymentId) => {
    let today = new Date();
    let dateFormate =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const { description, name, discount, serviceOff, servicePrice } = book;
    const parseData = { description, name, discount, serviceOff, servicePrice };
    const confirmOrder = { ...loggedInUser, date: dateFormate, parseData, paymentId };
    fetch("https://obscure-hamlet-08357.herokuapp.com/addorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Order Placed");
        }
      });
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <UserOrderInfo loggedInUser={loggedInUser} book={book} />
        <ProcessPayment handlePlaceOrder={handlePlaceOrder}/>
      </div>
    </div>
  );
};

export default ServiceCheckout;
