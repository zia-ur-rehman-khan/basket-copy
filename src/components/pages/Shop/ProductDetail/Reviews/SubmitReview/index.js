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
      <div className="review_form p-5" style={{ width: "60%", margin: "auto" }}>
        <div className={" d-flex flex-column align-items-center "}>
          <Commonheading level={5} heading={"Review"} />
          <Commonheading
            level={2}
            heading={"Submit Your Review"}
            className={"mb-4"}
          />
        </div>
        <TextArea
          showCount
          maxLength={100}
          style={{
            height: 220,
            resize: "none",
          }}
          onChange={onChange}
          placeholder="Share Your experience with our product"
        />
        <Row className={"mb-4 mt-4"}>
          <Col span={12} className=" d-flex flex-column align-items-start">
            <Commonheading level={3} heading={"Rate Your Experience :"} />
          </Col>
          <Col span={12} className=" d-flex flex-column align-items-end">
            ⭐⭐⭐⭐⭐
          </Col>
        </Row>
        <CommonButton
          child={"Submit Review"}
          classname={"mt-4"}
          height={"45px"}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default Index;
