import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import basketBall from "public/product/product1.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
import ProductCard from "./ProductCard";
import React from "react";
import { Carousel } from "antd";

const Product = () => {
  const temp = [
    { src: basketBall, width: 218, height: 218 },
    { src: tshirt, width: 223, height: 286 },
    { src: shoes, width: 357, height: 213 },
    { src: socks, width: 244, height: 243 },
    { src: shoes, width: 357, height: 213 },
    { src: basketBall, width: 218, height: 218 },
  ];

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
    <div className="product-side">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Featured Product"} />
        <CommonButton child="View More" />
      </div>
      <Carousel
        dots={false}
        responsive={responsiveSettings}
        slidesToShow={4}
        slidesToScroll={3}
        draggable
        infinite={false}
      >
        {temp.map((_t, key) => (
          <ProductCard image={_t} key={key} />
        ))}
      </Carousel>
    </div>
  );
};

export default Product;
