import React, { Component } from "react";
import "./SearchPage.css";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search">
        <div className="bg"></div>
        <form className="form">
          <label className="labelOne">
            <p> What type of listing would you like to see?</p>
            <input type="button" value="For Rent" />
            <input type="button" value="For Sale" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchPage;
