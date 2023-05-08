import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ProductFilters from "../Filters";

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

const ALL = () => {
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
    <>
      <div>
        <Row
          align={"middle"}
          justify={"space-between"}
          className="mt-5"
          gutter={[0, 20]}
        >
          <Col
            xxl={{ span: 5 }}
            xl={{ span: 5 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Commonheading level={2} heading={"All Products"} />
          </Col>
          <Col
            xxl={{ span: 18 }}
            xl={{ span: 18 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            className="justify-content-end d-flex"
          >
            <ProductFilters />
          </Col>
        </Row>
        <Row gutter={[18, 24]} justify={"center"} className="mt-5 ">
          {products.map((_t, key) => (
            <Col
              key={key}
              xxl={{ span: 6 }}
              xl={{ span: 6 }}
              lg={{ span: 8 }}
              md={{ span: 12 }}
              sm={{ span: 16 }}
            >
              <ProductCard productData={_t} key={key} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ALL;
