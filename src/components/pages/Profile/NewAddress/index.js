import React from "react";

import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { Input, Row, Col } from "antd";
import CommonButton from "components/common/Button";

const Index = () => {
  return (
    <>
      <div className="product-side">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Commonheading level={2} heading={"Add New Address"} />
        </div>
        <Input placeholder="Select Shipment method" />
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
        <Input placeholder="Address" />
        <Input placeholder="Suite, Apartment, etc " />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="City" />
          </Col>
          <Col span={12}>
            <Input placeholder="Country/Region" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="State" />
          </Col>
          <Col span={12}>
            <Input placeholder="Zip Code" />
          </Col>
        </Row>
        <CommonButton
          child="Save Detail"
          classname="product-price"
          // topClass="load-products"
        />
      </div>
    </>
  );
};

export default Index;
