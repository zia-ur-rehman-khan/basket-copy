import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import product5 from "public/product/product5.png";
import product6 from "public/product/product6.png";
import product7 from "public/product/product7.png";
import product8 from "public/product/product8.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
// import ProductCard from "./ProductCard";
import ProductCard from "../Product/ProductCard";
import React from "react";
import CommonDraggableCarousal from "components/common/DraggableCarousal";

const Index = () => {
  const products = [
    {
      src: product5,
      width: 198,
      height: 244,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product8,
      width: 198,
      height: 233,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product7,
      width: 189,
      height: 218,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product6,
      width: 189,
      height: 218,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product5,
      width: 198,
      height: 244,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product8,
      width: 198,
      height: 233,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product7,
      width: 189,
      height: 218,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
    {
      src: product6,
      width: 189,
      height: 218,
      heading: "White Jersey",
      subHeading: "Organic Cotton",
      price: "£20.00",
      reveiws: 5,
      category: "featured",
    },
  ];
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={"Featured Product"} />
      </div>
      <CommonDraggableCarousal>
        {products.map((_t, key) => (
          <ProductCard
            productData={_t}
            key={key}
            styling={{ margin: "0 9px" }}
            featured
          />
        ))}
      </CommonDraggableCarousal>
    </div>
  );
};

export default Index;
