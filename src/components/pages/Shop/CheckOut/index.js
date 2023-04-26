import { Col, Row } from "antd";
import React from "react";

import Commonheading from "components/common/Heading";
import ShipmentDetails from "./ShipmentDetails";
import BillingInformation from "./BillingInformation";
import PaymentDetails from "./PaymentDetails";
import OrderSummary from "./OrderSummary";
import CommonButton from "components/common/Button";

const index = () => {
  return (
    <>
      <div className="product-side">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Commonheading level={2} heading={"Check Out"} />
        </div>
        <Row>
          <Col>
            <ShipmentDetails />
            <BillingInformation />
            <PaymentDetails />
          </Col>
          <Col>
            <OrderSummary />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col span={16}>
            <Commonheading
              level={5}
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Col>
          <Col span={8}>
            <CommonButton
              child="Confirm Order"
              classname="product-price" //
              topClass="load-products"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default index;
