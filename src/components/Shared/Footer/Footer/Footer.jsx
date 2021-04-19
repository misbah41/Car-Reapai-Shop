import React from "react";
import FooterSubscribe from "../FooterSubscribe/FooterSubscribe";
import "./Footer.css";
import FooterContent from "./FooterContent/FooterContent";
const Footer = () => {
  return (
    <section className="footerWrapper">
      <div className="container">
        <div className="row">
          <FooterContent />
        </div>
        <div className="row justify-content-center">
          <FooterSubscribe />
        </div>
      </div>
    </section>
  );
};

export default Footer;
