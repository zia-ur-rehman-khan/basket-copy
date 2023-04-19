import { Radio } from "antd";
import { DatePicker } from "antd";
import { Space } from "antd";
import { Col, Input, Row } from "antd";
import CommonButton from "components/common/Button";
import CommonDatePicker from "components/common/DatePicker";
import Commonheading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const { replace, query, push } = useRouter();

  const handelRoute = () => {
    push({
      query: {
        ...query,
        t: "payment",
      },
    });
  };

  return (
    <Space direction="vertical" size={30} style={{ width: "100%" }}>
      <div className="d-flex flex-column align-items-center">
        <CommonTextField
          fontSize={"29.64px"}
          text={"REGISTER NOW"}
          letterSpacing={"4px"}
        />
        <Commonheading heading={"Register For The Event"} />
        <CommonTextField
          text={"Fill up the registration form to register for the event"}
        />
      </div>
      <Row gutter={[24, 24]}>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField placeholder="First Name" />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField placeholder="Last Name" />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField placeholder="Email Address" />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonInputField type={"number"} placeholder="Phone Number" />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonDatePicker placeholder="Date of Birth" />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <div className="d-flex justify-content-between">
            <CommonTextField opacity="0.5" text={"Gender:"} />
            <Radio.Group>
              <Radio value={1}>
                <CommonTextField opacity="0.5" text={"Male"} />
              </Radio>
              <Radio value={2}>
                <CommonTextField opacity="0.5" text={"Female"} />
              </Radio>
            </Radio.Group>
          </div>
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
      <CommonButton child={"submit"} onClick={handelRoute} />
    </Space>
  );
};

export default Register;
