import React from "react";
import { Link } from "react-router-dom";
import { houseData } from "./data/house";
import "./Rows.css";

function Rows() {
  return (
    <div className="rows">
      <h2>Recommendations</h2>
      <div className="rows-column">
        {houseData.map((data) => (
          <Link to={`${data.houseName}`}>
            <img className="productsImg" src={data.imgSrc} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Rows;
