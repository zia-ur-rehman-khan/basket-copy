import { Radio } from "antd";
import { DatePicker } from "antd";
import { Space } from "antd";
import { Col, Input, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonTextField from "components/common/TextField";
import React from "react";

const Payment = () => {
  return (
    <div className="register-main">
      <Space direction="vertical" size={30} style={{ width: "100%" }}>
        <div className="d-flex flex-column align-items-center">
          <CommonTextField
            fontSize={"29.64px"}
            text={"Payment"}
            letterSpacing={"4px"}
          />
          <Commonheading heading={"Enter Payment Details"} />
          <CommonTextField text={"Payment Detail"} />
        </div>
        <Row gutter={[24, 10]}>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
          >
            <CommonInputField placeholder="Cardholder Name" />
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
          >
            <CommonInputField
              placeholder="Enter Your Card Number"
              type={"number"}
            />
          </Col>
        </Row>

        <Row gutter={[24, 10]}>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
          >
            <DatePicker placeholder="Expiry Date" />
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
          >
            <CommonInputField placeholder="Enter Your CVC" type={"number"} />
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <CommonTextField opacity="0.5" text={"I Prefer to be Contacted by"} />
          <Radio.Group>
            <Radio value={1}>
              <CommonTextField opacity="0.5" text={"Email"} />
            </Radio>
            <Radio value={2}>
              <CommonTextField opacity="0.5" text={"Phone"} />
            </Radio>
          </Radio.Group>
        </div>
        <div className="d-flex justify-content-between">
          <CommonTextField opacity="0.5" text={"Agree to Terms & Conditions"} />
          <Radio.Group>
            <Radio value={1}></Radio>
          </Radio.Group>
        </div>
        <CommonButton child={"submit"} />
      </Space>
    </div>
  );
};

export default Payment;
