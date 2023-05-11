import { Col, Input, Row } from "antd";
import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonInputField from "components/common/Input";
import CommonSelect from "components/common/Select";
import CommonTextField from "components/common/TextField";
import React from "react";

const Index = () => {
  return (
    <>
      <div>
        <CommonTextField
          text="Billing information"
          fontWeight={600}
          fontSize={"18px"}
        />
        <Row gutter={[14, 14]} className="mt-3">
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
            <CommonInputField placeholder="Email " />
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
            <CommonSelect
              placeholder="Select Country"
              options={[
                { value: "jack", label: "America" },
                { value: "lucy", label: "canada" },
                { value: "Yiminghe", label: "USA" },
              ]}
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
            <CommonSelect
              placeholder="Select City"
              options={[
                { value: "jack", label: "America" },
                { value: "lucy", label: "canada" },
                { value: "Yiminghe", label: "USA" },
              ]}
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
            <CommonSelect
              placeholder="Select State"
              options={[
                { value: "jack", label: "America" },
                { value: "lucy", label: "canada" },
                { value: "Yiminghe", label: "USA" },
              ]}
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
            <CommonInputField type={"text"} placeholder="Zip Code" />
          </Col>

          <Col span={24}>
            <CommonInputField placeholder="Adress line 1" />
          </Col>

          <Col span={24}>
            <CommonInputField placeholder="Adress line 2" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
