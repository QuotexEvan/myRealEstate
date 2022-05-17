import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Rows from "./Rows";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Rows />
    </div>
  );
}
