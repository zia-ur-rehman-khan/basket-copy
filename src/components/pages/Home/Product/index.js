import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import basketBall from "public/product/product1.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
import ProductCard from "./ProductCard";
import React from "react";

const Product = () => {
  const temp = [
    { src: basketBall, width: 218, height: 218 },
    { src: tshirt, width: 223, height: 286 },
    { src: shoes, width: 357, height: 213 },
    { src: socks, width: 244, height: 243 },
    { src: shoes, width: 357, height: 213 },
    { src: basketBall, width: 218, height: 218 },
  ];

  return (
    <div className="product-side">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Featured Product"} />
        <CommonButton child="View More" />
      </div>
      {/* <div className="card-parent mt-3"> */}
      <div className="mt-5 card-parent d-flex" style={{ gap: "20px" }}>
        {temp.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 10 }}
            md={{ span: 11 }}
            sm={{ span: 16 }}
            xs={{ span: 22 }}
          >
            <ProductCard image={_t} key={key} />
          </Col>
        ))}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Product;
