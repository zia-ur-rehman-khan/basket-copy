import React from "react";

import { Input } from "antd";
const { TextArea } = Input;
import { Col, Divider, Row, Space } from "antd";
// import { Input } from 'antd';

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import CommonSelect from "components/common/Select";
import CommonInputField from "components/common/Input";
import CommonDatePicker from "components/common/DatePicker";

const Index = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      <div className="form_wrapper">
        <Commonheading heading={"Payment"} level={4} className={"mb-2"} />
        <Commonheading
          heading={"Enter Payment Details"}
          level={2}
          className={"mb-2"}
        />
        <Commonheading
          heading={"Payment Detail"}
          level={5}
          className={"mb-4"}
        />
        <Row gutter={[14, 14]} className="signUp-main">
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CommonInputField placeholder="Cardholder Name" />
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CommonInputField placeholder="Enter Your Card Number" />
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CommonDatePicker placeholder="Expiry Date" />
          </Col>
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CommonInputField placeholder="Enter Your CVC" />
          </Col>
        </Row>
        <CommonButton
          child={"Submit Detail"}
          classname={"mt-4"}
          height={"45px"}
          width={"100%"}
          onClick={() => {
            handelRoute("");
          }}
        />
      </div>
    </>
  );
};

export default Index;
