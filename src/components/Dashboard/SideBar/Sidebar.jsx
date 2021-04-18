import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faUserPlus,
  faPlus,
  faUserLock,
  faCartPlus,
  faCommentAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import "./SideBar.css";
const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    fetch("http://localhost:3500/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdmin(data));
  }, []);


  return (
    <aside className="sidebar">
      <ul>
        <li className="nav-item">
          <Link className="nav-link sidebar-link" to="/home">
            <FontAwesomeIcon icon={faHome} /> Back To Home
          </Link>
        </li>
        {isAdmin ? (
          <div>
            <li className="nav-item">
              <Link className="nav-link sidebar-link" to="/addservices">
                <FontAwesomeIcon icon={faPlus} /> Add Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sidebar-link" to="/createadmin">
                <FontAwesomeIcon icon={faUserPlus} /> Create Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sidebar-link" to="/usersorder">
                <FontAwesomeIcon icon={faUserLock} /> Users Order
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sidebar-link" to="/manageservices">
                <FontAwesomeIcon icon={faColumns} /> Manage Services
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li className="nav-item">
              <Link
                className="nav-link sidebar-link"
                to="/emtycheckout"
              >
                <FontAwesomeIcon icon={faCartPlus} /> Order
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sidebar-link" to="/orderlist">
                <FontAwesomeIcon icon={faUserLock} /> My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sidebar-link" to="/review">
                <FontAwesomeIcon icon={faCommentAlt} /> Review
              </Link>
            </li>
          </div>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
