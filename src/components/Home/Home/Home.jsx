import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Awards from "../Awards/Awards";
import Chose from "../Chose/Chose/Chose";
import Contact from "../Contact/Contact/Contact";
import Header from "../Header/Header";
import Service from "../Service/Service/Service";
import Testimonials from "../Testimonials/Testimonials/Testimonials";
import './Home.css'
const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <Chose />
      <Awards />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
