import React from "react";

import { Input } from "antd";
import { Row, Col } from "antd";
const { TextArea } = Input;

import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import CommonInputField from "components/common/Input";

import CommonButton from "components/common/Button";
import CommonSelect from "components/common/Select";

const Index = () => {
  return (
    <>
      <div className="form_wrapper">
        <Commonheading heading={"Add New Address"} level={2} className={"mb-4"}/>
        <Row gutter={[14, 14]} className="signUp-main">
          <Col
            xxl={{ span: 24 }}
            xl={{ span: 24 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
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
          <Col span={24}>
            <CommonInputField placeholder="Address" />
          </Col>
          <Col span={24}>
            <CommonInputField placeholder="Suite, Apartment, etc " />
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
              placeholder="City"
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
              placeholder="Country/Region"
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
              placeholder="State"
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
            <CommonInputField placeholder="Zip Code" type={"text"} />
          </Col>
        </Row>
        <CommonButton
          child={"Submit"}
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
