import React from "react";

import { Input } from "antd";
const { TextArea } = Input;
import { Col, Divider, Row, Space } from "antd";
// import { Input } from 'antd';

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";

const index = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      <div className="">
        <Commonheading level={5} heading={"Payment"} />
        <Commonheading level={3} heading={"Enter Payment Details"} />
        <Commonheading level={5} heading={"Payment Detail"} />

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="Cardholder Name" />
          </Col>
          <Col span={12}>
            <Input placeholder="Cardholder Name" />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="Cardholder Name" />
          </Col>
          <Col span={12}>
            <Input placeholder="Cardholder Name" />
          </Col>
        </Row>
        <CommonButton type="default" child={" Submit Review"} />
      </div>
    </>
  );
};

export default index;
