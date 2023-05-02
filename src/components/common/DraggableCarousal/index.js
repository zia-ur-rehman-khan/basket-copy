import { Carousel } from "antd";
import React from "react";

const CommonDraggableCarousal = ({ children }) => {
  const responsiveSettings = [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ];

  return (
    <Carousel
      dots={false}
      responsive={responsiveSettings}
      slidesToShow={4}
      slidesToScroll={3}
      draggable
      infinite={false}
    >
      {children}
    </Carousel>
  );
};

export default CommonDraggableCarousal;
