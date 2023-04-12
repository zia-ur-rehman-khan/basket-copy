import React from "react";
import ProductCard from "./ProductCard";
import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import { Col, Row, Space } from "antd";
import basketBall from "public/product/product1.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
import CommonTextField from "components/common/TextField";

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
    <div className="pl-5">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Featured Product"} />
        <CommonButton child="View More" />
      </div>
      {/* <div className="card-parent mt-3"> */}
      <Row gutter={[33, 33]} className="mt-5 card-parent" wrap={false}>
        {temp.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 7 }}
            xl={{ span: 7 }}
            lg={{ span: 10 }}
            md={{ span: 11 }}
            sm={{ span: 12 }}
          >
            <ProductCard image={_t} key={key} />
          </Col>
        ))}
      </Row>

      {/* </div> */}
    </div>
  );
};

export default Product;
