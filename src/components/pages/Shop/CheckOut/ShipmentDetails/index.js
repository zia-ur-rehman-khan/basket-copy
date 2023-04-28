import { Col, Row } from "antd";
import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";

const Index = () => {
  return (
    <>
      <div>
        <Commonheading level={4} heading="Shipment Details" />
        <Commonheading level={5} heading="Use Saved Addresses" />
        <div className="radius p-3 mt-2" style={{ background: "#1D1D1D" }}>
          <div className="mt-3 mb-3">
            <Row>
              <Col span={18}>
                <Commonheading level={5} heading="Country: United States" />
                <Commonheading level={5} heading="State: Texas" />
                <Commonheading
                  level={5}
                  heading="Address: 10515 Fox Ave Fairdale, Kentucky(KY), 40118"
                />
                <Commonheading level={5} heading="Phone: +44-123-456-789" />
              </Col>
              <Col span={6}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="mt-3 mb-3">
            <Row>
              <Col span={18}>
                <Commonheading level={5} heading="Country: United States" />
                <Commonheading level={5} heading="State: Texas" />
                <Commonheading
                  level={5}
                  heading="Address: 10515 Fox Ave Fairdale, Kentucky(KY), 40118"
                />
                <Commonheading level={5} heading="Phone: +44-123-456-789" />
              </Col>
              <Col span={6}>
                <Radio checked={false}></Radio>
              </Col>
            </Row>
          </div>
          <CommonButton
            width={"100%"}
            child="Add New Address"
            background={"#1D1D1D"}
            color={"#FF6600"}
            border={"1px solid #FF6600"}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
