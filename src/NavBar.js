import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845022.png"
          alt=""
        />
        <h2>myRealEstate</h2>
      </Link>

      <ul className="list">
        <Link to="/search" className="listItems">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt=""
            />
            <span> Search</span>
          </li>
        </Link>
        <Link to="/sell" className="listItems">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1441/1441242.png"
              alt=""
            />
            <span>Sell</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
