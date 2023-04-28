import { Col, Input, Row } from "antd";
import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";

const Index = () => {
  return (
    <>
      <div>
        <Commonheading level={4} heading="Billing information" />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="First Name" />
          </Col>
          <Col span={12}>
            <Input placeholder="Last Name" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="Email" />
          </Col>
          <Col span={12}>
            <Input placeholder="Phone Number" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="Select Country" />
          </Col>
          <Col span={12}>
            <Input placeholder="Select City" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="Select State" />
          </Col>
          <Col span={12}>
            <Input placeholder="Zip Code" />
          </Col>
        </Row>
        <Input placeholder="Adress line 1" />
        <Input placeholder="Adress line 2" />
      </div>
    </>
  );
};

export default Index;
