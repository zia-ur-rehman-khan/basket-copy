import React from "react";
import { Carousel } from "antd";

import ShopCarousel from "./ShopCarousel";

const dotPosition = "bottom";

const index = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const Slides = [
    { id: 1, content: "Get Your Favorite iBall Merchandise today" },
    { id: 3, content: "Get Your Favorite iBall Merchandise today" },
    { id: 2, content: "Get Your Favorite iBall Merchandise today" },


  ];


  return (
    <>
      <div className="carousel-wrapper">
        <Carousel dotPosition={dotPosition}>
        {Slides.map((_t, key) => (

             <ShopCarousel slideData={_t} key={key} />
        ))}
         
        </Carousel>
      </div>
    </>
  );
};

export default index;
