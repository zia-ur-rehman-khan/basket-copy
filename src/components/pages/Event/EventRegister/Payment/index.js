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

const Payment = () => {
  const { query, push } = useRouter();

  const handelRoute = () => {
    // if we use replace so its not make history of query
    push({
      query: {
        ...query,
        t: "thanks",
      },
    });
  };

  return (
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
      <Row gutter={[24, 24]}>
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
          <CommonInputField
            placeholder="Enter Your Card Number"
            type={"number"}
          />
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
          <CommonInputField placeholder="Enter Your CVC" type={"number"} />
        </Col>
      </Row>

      <CommonButton
        child={"Submit Detail"}
        onClick={handelRoute}
        height={"45px"}
      />
    </Space>
  );
};

export default Payment;
