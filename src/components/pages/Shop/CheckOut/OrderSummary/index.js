import { Input, Row, Col } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";

const Index = () => {
  return (
    <>
      <div>
        <Commonheading level={4} heading="Order Summary" />
        <div>
          <Input placeholder="Enter Promo Code" />
          <CommonButton
            child="Apply"
            classname="product-price"
            // topClass="load-products"
          />
        </div>
        <div>
          <Row>
            <Col span={16}>
              <Commonheading level={3} heading="Products Details" />
            </Col>
            <Col span={8}>
              <CommonButton
                child="Edit"
                classname="product-price"
                // topClass="load-products"
              />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Commonheading level={5} heading="image" />
            </Col>
            <Col span={8}>
              <Commonheading level={5} heading="Iball White Jersey" />
            </Col>
            <Col span={8}>
              <Commonheading level={5} heading="Qty: 2" />
            </Col>
            <Col span={4}>
              <Commonheading level={5} heading="£20.00" />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col span={4}>
              <Commonheading level={5} heading="image" />
            </Col>
            <Col span={8}>
              <Commonheading level={5} heading="Iball White Jersey" />
            </Col>
            <Col span={8}>
              <Commonheading level={5} heading="Qty: 2" />
            </Col>
            <Col span={4}>
              <Commonheading level={5} heading="£20.00" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Commonheading level={5} heading="Tax" />
              <Commonheading level={5} heading="Estimated Shipping Cost" />
              <Commonheading level={5} heading="Promo Applied" />
              <Commonheading level={5} heading="Order Total" />
            </Col>
            <Col span={12}>
              <Commonheading level={5} heading="£5.00" />
              <Commonheading level={5} heading="£20.00" />
              <Commonheading level={5} heading="-£10.00" />
              <Commonheading level={5} heading="£300.00" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Index;
