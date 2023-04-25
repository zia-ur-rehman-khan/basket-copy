import React from "react";

import { Col, Divider, Row, Space } from "antd";

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="product_body_wrapper">
        <Row>
          <Col span={12}>
            <Commonheading level={4} heading={"Black iBall Hoodie"} />
            <Row>
              <Col span={12}>
                <Commonheading level={5} heading={"Organic Cotton"} />
              </Col>
              <Col span={12}>
                {" "}
                <p>⭐⭐⭐⭐⭐</p>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Commonheading level={4} heading={"£20.00"} />
          </Col>
        </Row>
        <Commonheading level={4} heading={"Description"} />
        <Commonheading
          level={5}
          heading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          }
        />

        <Row>
          <Col span={12}>
            <div className="">
              <Commonheading level={5} heading={"Quantity :"} />
              <CommonButton type="default" child={"-"} />
              <Commonheading level={5} heading={"05"} />
              <CommonButton type="default" child={"+"} />
            </div>
          </Col>
          <Col span={12}>
            <div className="">
              <Commonheading level={5} heading={"Colors :"} />
              <CommonButton type="default" child={" "} />
              <CommonButton type="default" child={" "} />
              <CommonButton type="default" child={" "} />
              <CommonButton type="default" child={" "} />
            </div>
          </Col>
        </Row>
        <div className=""></div>
        {/* <div className="">
          <ul>
            <li>
              <Image src="/" alt="Picture " width={50} height={50} />
              <Commonheading level={5} heading={"Delivery :"} />
              <br />
              <Commonheading level={5} heading={"Next Day :"} />
            </li>
          </ul>
        </div> */}
        <Row>
          <Col span={12}>
            <CommonButton type="default" child={"Add to Cart"} />
          </Col>
          <Col span={12}>
            <CommonButton type="default" child={"Add to Wishlist"} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default index;
