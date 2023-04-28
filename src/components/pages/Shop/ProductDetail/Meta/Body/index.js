import React from "react";

import { Col, Divider, Row, Space } from "antd";

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import tempImage from "public/product/product1.png";

import Image from "next/image";

const Index = () => {
  return (
    <>
      <div className="product_body_wrapper">
        <Row>
          <Col span={12}>
            <Commonheading level={4} heading={"Black iBall Hoodie"} />
            <div className="d-flex">
              <Commonheading
                level={5}
                heading={"Organic Cotton"}
                color="rgba(255, 255, 255, 0.5)"
              />
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </Col>
          <Col span={12} className="d-flex flex-row justify-content-end">
            <Commonheading level={4} heading={"£20.00"} color="#FF6600" />
          </Col>
        </Row>
        <Commonheading level={4} heading={"Description"} />
        <Commonheading
          level={5}
          heading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          }
          className={"mt-2"}
        />

        <Row className="mt-3">
          <Col span={12}>
            <div className="product_meta_Quantity d-flex">
              <Commonheading level={5} heading={"Quantity :"} />
              <CommonButton
                child={"-"}
                background={"#454545"}
                color="#ffffff"
                classname="m-2 mt-0 mb-0"
              />
              <Commonheading level={5} heading={"05"} />
              <CommonButton
                child={"+"}
                background={"#FF6600"}
                color="#ffffff"
                classname="m-2 mt-0 mb-0"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="product_meta_colorvariation d-flex">
              <Commonheading level={5} heading={"Colors :"} />
              <CommonButton
                child={" "}
                background={"#454545"}
                color="#ffffff"
                classname="m-2 mt-0 mb-0"
              />
              <CommonButton
                child={" "}
                background={"#B81818"}
                color="#ffffff"
                classname="m-2 mt-0 mb-0"
              />
              <CommonButton
                child={" "}
                background={"#46B472"}
                color="#ffffff"
                classname="m-2 mt-0 mb-0"
              />
              <CommonButton
                child={" "}
                background={"#2861B6"}
                color="#ffffff"
                classname="m-2 mt-0 mb-0"
              />
            </div>
          </Col>
        </Row>

  
        <Row className="mt-5" gutter={[16, 16]}>
          <Col span={12}>
            <CommonButton child={" Add to Cart"} width={"100%"} />
          </Col>
          <Col span={12}>
            <CommonButton
              child={"Add to Wishlist "}
              background={"#8F8F8F"}
              color="#ffffff"
              width={"100%"}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
