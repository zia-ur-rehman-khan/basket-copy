import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ProductFilters from "../Filters";

import basketBall from "public/product/product1.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
// import ProductCard from "./ProductCard";
import ProductCard from "../Product/ProductCard";
import React from "react";

const ALL = () => {
  const products = [
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},
    { src: basketBall, width: 218, height: 218, heading:"White Jersey", subHeading:"Organic Cotton", price:"£20.00", reveiws:5, category:"all"},

  ];
  return (
    <>
      <div className="product-side">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Commonheading level={2} heading={"All Products"} />
          <div className="product-filters">
            {/* <CommonButton child="Reset Filters" /> */}
            <ProductFilters />
          </div>
        </div>
        {/* <div className="card-parent mt-3"> */}
        <Row gutter={[33, 33]} className="mt-5 card-parent" wrap={false}>
          {products.map((_t, key) => (
            <>
              <Col
                key={key}
                xxl={{ span: 6 }}
                xl={{ span: 6 }}
                lg={{ span: 10 }}
                md={{ span: 11 }}
                sm={{ span: 15 }}
              >
                <ProductCard productData={_t} key={key} />
              </Col>
            </>
          ))}
        </Row>
        <CommonButton
          child="Load More"
          classname="load-products-btn"
          topClass="load-products"
        />

        {/* </div> */}
      </div>
    </>
  );
};

export default ALL;
