import { Col, Row } from "antd";
import React from "react";

import Commonheading from "components/common/Heading";
import ShipmentDetails from "./ShipmentDetails";
import BillingInformation from "./BillingInformation";
import PaymentDetails from "./PaymentDetails";
import OrderSummary from "./OrderSummary";
import CommonButton from "components/common/Button";
import { Space } from "antd";
import { Divider } from "antd";

const Index = () => {
  return (
    <>
      <Commonheading
        level={1}
        heading={"Check Out"}
        className={
          "d-flex flex-column align-content-center align-items-center mb-4"
        }
      />
      <Row justify={"space-between"}>
        <Col span={11}>
          <Space direction="vertical" size={40}>
            <ShipmentDetails />
            <BillingInformation />
            <PaymentDetails />
          </Space>
        </Col>
        <Col span={11}>
          <OrderSummary />
        </Col>
      </Row>

      <Divider
        className="mt-5 mb-5"
        style={{ opacity: "0.29", borderTop: " 1px solid #707070" }}
      />

      <Row gutter={[10, 10]} className="mb-5">
        <Col span={18}>
          <Commonheading
            level={5}
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Col>
        <Col span={6}>
          <CommonButton child="Confirm Order" width={"100%"} />
        </Col>
      </Row>
    </>
  );
};

export default Index;
