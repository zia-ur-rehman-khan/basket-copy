import { Col, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";

const OurNumbers = () => {
  const temp = [
    { text: "Active members", number: "6500+" },
    { text: "Matches Organized ", number: "300+" },
    { text: "Online coaches", number: "4000+" },
    { text: "Staff Members", number: "50+" },
  ];

  return (
    <div className="bg-grey our-number-parent radius">
      <Commonheading
        heading={"Our Numbers Says It All"}
        level={2}
        textAlign={"center"}
      />
      <Row gutter={[50, 50]} justify="center" className="mt-5">
        {temp.map((t, index) => (
          <Col
            key={index}
            xxl={{ span: 5 }}
            xl={{ span: 5 }}
            lg={{ span: 6 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
            className="d-flex justify-content-center"
          >
            <Space direction="vertical" align="center">
              <Commonheading level={2} heading={t?.number} />
              <CommonTextField text={t?.text} />
            </Space>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurNumbers;
