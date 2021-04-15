import React from "react";
import Chose from "../Chose/Chose/Chose";
import Contact from "../Contact/Contact/Contact";
import Header from "../Header/Header";
import Service from "../Service/Service/Service";
import Testimonials from "../Testimonials/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Service/>
      <Chose/>
      <Testimonials/>
      <Contact/>
    </div>
  );
};

export default Home;
