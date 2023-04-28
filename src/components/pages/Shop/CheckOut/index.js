import { Col, Row } from "antd";
import React from "react";

import Commonheading from "components/common/Heading";
import ShipmentDetails from "./ShipmentDetails";
import BillingInformation from "./BillingInformation";
import PaymentDetails from "./PaymentDetails";
import OrderSummary from "./OrderSummary";
import CommonButton from "components/common/Button";

const Index = () => {
  return (
    <>
      <div>
        <Commonheading
          level={2}
          heading={"Check Out"}
          className={
            "d-flex flex-column align-content-center align-items-center mb-4"
          }
        />
        <Row className="d-flex flex-row justify-content-between align-items-center align-content-stretch">
          <Col
            span={12}
            className="d-flex flex-column align-content-start align-items-start"
          >
            <ShipmentDetails />
            <BillingInformation />
            <PaymentDetails />
          </Col>
          <Col
            span={12}
            className="d-flex flex-column align-content-end align-items-end"
          >
            <OrderSummary />
          </Col>
        </Row>

        <hr className="mt-5 mb-5" />
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
      </div>
    </>
  );
};

export default Index;
