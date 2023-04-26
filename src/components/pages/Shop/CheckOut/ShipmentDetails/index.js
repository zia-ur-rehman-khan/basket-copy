import { Col, Row } from "antd";
import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";

const index = () => {
  return (
    <>
      <div>
        <Commonheading level={4} heading="Shipment Details" />
        <Commonheading level={4} heading="Use Saved Addresses" />
        <div>
          <div>
            <Row>
              <Col span={18}>
                <Commonheading level={4} heading="Country: United States" />
                <Commonheading level={4} heading="State: Texas" />
                <Commonheading
                  level={4}
                  heading="Address: 10515 Fox Ave Fairdale, Kentucky(KY), 40118"
                />
                <Commonheading level={4} heading="Phone: +44-123-456-789" />
              </Col>
              <Col span={6}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>
          <hr />
          <div>
            <Row>
              <Col span={18}>
                <Commonheading level={4} heading="Country: United States" />
                <Commonheading level={4} heading="State: Texas" />
                <Commonheading
                  level={4}
                  heading="Address: 10515 Fox Ave Fairdale, Kentucky(KY), 40118"
                />
                <Commonheading level={4} heading="Phone: +44-123-456-789" />
              </Col>
              <Col span={6}>
                <Radio></Radio>
              </Col>
            </Row>
          </div>
          <CommonButton width={"200px"} child="Add New Address" />
        </div>
      </div>
    </>
  );
};

export default index;
