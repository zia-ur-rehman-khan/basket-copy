import { Col, Image, Row } from "antd";
import TempImage from "public/product/product1.png";

import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";

const tempImage =
  "https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg";

const Index = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Commonheading level={4} heading="Payment Details" className={"mt-5"} />
        <div
          className="radius p-3 mt-2"
          style={{ background: "#1D1D1D", width: "100%" }}
        >
          <div className="mt-3 mb-3">
            <Row gutter={[16, 16]}>
              <Col span={4}>
                <Image src={tempImage} width={50} height={50} alt="" />
              </Col>
              <Col span={16}>
                <Commonheading level={5} heading="My Personal Card" />
                <Commonheading level={5} heading="**** **** **** 1239" />
              </Col>
              <Col span={4}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="mt-3 mb-3">
            <Row gutter={[16, 16]}>
              <Col span={4}>
                <Image src={tempImage} width={50} height={50} alt="" />
              </Col>
              <Col span={16}>
                <Commonheading level={5} heading="My Personal Card" />
                <Commonheading level={5} heading="**** **** **** 1239" />
              </Col>
              <Col span={4}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>

          <CommonButton
            width={"100%"}
            child="Add New Payment"
            background={"#1D1D1D"}
            color={"#FF6600"}
            border={"1px solid #FF6600"}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
