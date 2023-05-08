import React from "react";
import { Carousel } from "antd";

import ShopCarousel from "./ShopCarousel";
import CommonCarousal from "components/common/Carousal";

const dotPosition = "left";

const Index = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const Slides = [
    { id: 1, content: "Get Your Favorite iBall Merchandise today" },
    { id: 3, content: "Get Your Favorite iBall Merchandise today" },
    { id: 2, content: "Get Your Favorite iBall Merchandise today" },
    { id: 2, content: "Get Your Favorite iBall Merchandise today" },
  ];

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel slidesToShow={1}>
          {Slides.map((_t, key) => (
            <ShopCarousel slideData={_t} key={key} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Index;
