import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import Banner from "./Banner/Banner";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-wrapper mb-5">
        <Navbar className="container " expand="lg">
          <NavbarBrand href="#home">BD Car Repair</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Reviews</Nav.Link>
              <Nav.Link href="#link">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Banner />
    </>
  );
};

export default Header;
