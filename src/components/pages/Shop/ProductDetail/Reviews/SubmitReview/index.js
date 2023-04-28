import React from "react";

import { Input } from "antd";
const { TextArea } = Input;
import { Col, Divider, Row, Space } from "antd";

import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";

const Index = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      <div className="">
        <Commonheading level={5} heading={"Review"} />
        <Commonheading level={3} heading={"Submit Your Review"} />
        <TextArea
          showCount
          maxLength={100}
          style={{
            height: 120,
            resize: "none",
          }}
          onChange={onChange}
          placeholder="disable resize"
        />
        <Row>
          <Col span={12}>
            <Commonheading level={3} heading={"Rate Your Experience :"} />
          </Col>
          <Col span={12}>⭐⭐⭐⭐⭐</Col>
        </Row>
        <CommonButton type="default" child={" Submit Review"} />
      </div>
    </>
  );
};

export default Index;
