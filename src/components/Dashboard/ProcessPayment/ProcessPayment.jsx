import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const ProcessPayment = ({handlePlaceOrder}) => {
  const stripePromise = loadStripe(
    "pk_test_51Ie1DASHUn3MAaIcjhQ9mod4aAPw88kNMuK0cQ387wqPLZ9SYKoMPS6eyO8JKahyS64xmMa8QQtqpzWEFlgkyVy500beEUOyc0"
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm handlePlaceOrder={handlePlaceOrder}/>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
