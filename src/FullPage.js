import React from "react";
import "./FullPage.css";

function FullPage() {
  return (
    <div className="fullpage">
      <div className="imgContainer">
        <img
          className="fullImg"
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
      </div>

      <div className="bodyCont">
        <div className="textC">
          <h2>White House</h2>
          <p>Battisputali, Kathmandu</p>
          <p>NRS 3,00,00,000</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="contact">
          <p>Phone no: 9876543210</p>
          <p>Email: realestate23@mail.com</p>
        </div>
      </div>
    </div>
  );
}

export default FullPage;
