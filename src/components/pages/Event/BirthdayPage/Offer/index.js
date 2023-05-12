import { Col, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import React from "react";

const Offer = () => {
  const temp = [1, 2, 3];
  return (
    <Row
      justify="space-between"
      align="middle"
      className="bg-grey common-padding radius"
      gutter={[0, 24]}
    >
      <Col
        xxl={{ span: 7 }}
        xl={{ span: 8 }}
        lg={{ span: 12 }}
        md={{ span: 12 }}
        sm={{ span: 24 }}
      >
        <Space direction="vertical">
          <CommonTextField
            text="Iball birthday Package"
            letterSpacing={"6px"}
            fontSize={"29px"}
            lineHeight={"30px"}
          />
          <Commonheading
            level={2}
            heading={"What We Offer in Birthday Packages"}
          />
        </Space>
      </Col>
      {temp.map((t, index) => (
        <Col
          key={index}
          xxl={{ span: 5 }}
          xl={{ span: 4 }}
          lg={{ span: 9 }}
          md={{ span: 10 }}
          sm={{ span: 24 }}
        >
          <Space direction="vertical">
            <div className="offer-count d-flex justify-content-center align-items-center">
              <CommonTextField
                text={`0${index + 1}`}
                className={"primary"}
                fontSize={"24px"}
                fontWeight={600}
              />
            </div>
            <CommonTextField
              text={
                "We can provide parties at a venue booked by you or we ca n recommend venues where we have provided parties before."
              }
            />
          </Space>
        </Col>
      ))}
    </Row>
  );
};

export default Offer;
