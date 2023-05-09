import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import image from "public/withUs/img1.png";
import image1 from "public/withUs/img2.png";
import image2 from "public/withUs/img3.png";
import image3 from "public/withUs/img4.png";
import Card from "./Card";
import React from "react";

const WithUS = () => {
  const temp = [
    { src: image, title: "Coaches", url: "/team" },
    { src: image1, title: "Schools", url: "/school" },
    { src: image2, title: "I ball Players", url: "/about" },
    { src: image3, title: "Partners & Sponsors", url: "/partners-sponsers" },
  ];
  return (
    <div className="bg-grey with-us-section d-flex flex-column align-items-center justify-content-center">
      <CommonTextField text="BALL WITH US" />
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
            <Card data={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WithUS;
