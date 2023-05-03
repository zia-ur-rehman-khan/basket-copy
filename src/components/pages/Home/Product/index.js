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
import CommonDraggableCarousal from "components/common/DraggableCarousal";

const Product = () => {
  const temp = [
    { src: basketBall, width: 164, height: 164 },
    { src: tshirt, width: 174, height: 214 },
    { src: shoes, width: 267, height: 159 },
    { src: socks, width: 183, height: 182 },
    { src: shoes, width: 267, height: 159 },
    { src: basketBall, width: 164, height: 164 },
  ];

  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={"Featured Product"} />
        <CommonButton child="View More" />
      </div>
      <CommonDraggableCarousal>
        {temp.map((_t, key) => (
          <ProductCard image={_t} key={key} />
        ))}
      </CommonDraggableCarousal>
    </div>
  );
};

export default Product;
