import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link className='nav-link' href="#home">Home</Link>
              <Link className='nav-link' href="#services">Services</Link>
              <Link className='nav-link' href="#contact">Contact</Link>
              <Link className='nav-link' href="#reviews">Reviews</Link>
              <Link className='nav-link' to='/dashboard'>Dashboard</Link>
              <Link className='nav-link btn btn-primary mr-2'  to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Banner />
    </>
  );
};

export default Header;
