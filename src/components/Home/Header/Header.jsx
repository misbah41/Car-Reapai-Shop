import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header-wrapper"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <>
      <header className={navbarClasses.join(" ")} >
        <Navbar className="container " expand="lg">
          <NavbarBrand href="#home">BD Car Repair</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" href="#home">
                Home
              </Link>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link btn btn-primary mr-2" to="/login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Banner />
    </>
  );
};

export default Header;
