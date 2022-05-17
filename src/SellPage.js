import React from "react";
import "./SellPage.css";

function SellPage() {
  return (
    <div className="sellpage">
      <div className="bg-1"></div>
      <form className="form1">
        <div>
          <label>Are you selling or renting your property?</label>
          <select name="rentorsale">
            <option value="">--Please select your option--</option>
            <option value="Sell">Sell</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div>
          <label>Enter the value for your property</label>
          <input type="number" />
        </div>
        <div>
          {" "}
          <label>Enter the location of your property</label>
          <input type="text" />
        </div>
        <div>
          <label>Upload pictures of your property</label>
          <input type="file" name="image" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SellPage;
