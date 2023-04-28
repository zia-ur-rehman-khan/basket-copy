import { Col, Image, Row } from "antd";
import TempImage from "public/product/product1.png";

import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";
const Index = () => {
  return (
    <>
      <div>
        <Commonheading level={4} heading="Payment Details" />
        <div>
          <div>
            <Row>
              <Col span={4}>
                <Image src={TempImage} width={50} height={50} alt="" />
              </Col>
              <Col span={16}>
                <Commonheading level={4} heading="My Personal Card" />
                <Commonheading level={4} heading="**** **** **** 1239" />
              </Col>
              <Col span={4}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>
          <hr />
          <div>
            <Row>
              <Col span={4}>
                <Image src={TempImage} width={50} height={50} alt="" />
              </Col>
              <Col span={16}>
                <Commonheading level={4} heading="My Personal Card" />
                <Commonheading level={4} heading="**** **** **** 1239" />
              </Col>
              <Col span={4}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>

          <CommonButton width={"200px"} child="Add New Payment" />
        </div>
      </div>
    </>
  );
};

export default Index;
