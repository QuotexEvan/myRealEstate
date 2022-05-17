import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import { houseData } from "./data/house";

function Banner() {
  return (
    <div className="banner">
      <Carousel
        className="carousel"
        autoPlay={true}
        interval={3000}
        stopOnHover={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        swipeable
        infiniteLoop
        transitionTime={600}
      >
        {houseData.map((data) => (
          <div className="bannerContainer">
            <img className="bannerImg" src={data.imgSrc} alt="" />
            <div className="textContainer">
              <h2>{data.houseName}</h2>
              <p>{data.desription}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="border"></div>
    </div>
  );
}

export default Banner;
