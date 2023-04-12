import { Col, Row, Space } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import React from "react";
import Card from "./Card";
import image from "public/withUs/img1.png";
import image1 from "public/withUs/img2.png";
import image2 from "public/withUs/img3.png";
import image3 from "public/withUs/img4.png";

const WithUS = () => {
  const temp = [image, image1, image2, image3];
  return (
    <div className="bg-secondary with-us-section d-flex flex-column align-items-center justify-content-center">
      <CommonTextField text="Ball With Us" />
      <Commonheading level={2} heading="Come Ball with Us" />
      <Row gutter={[33, 33]} justify="center" className="mt-5">
        {temp.map((_t, i) => (
          <Col
            key={i}
            xxl={{ span: 5 }}
            xl={{ span: 5 }}
            lg={{ span: 5 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
          >
            <Card src={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WithUS;
