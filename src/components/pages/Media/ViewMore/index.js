import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import EventCard from "components/pages/Home/Event/EventCard";
import blog1 from "public/blog/blog1.png";
import blog2 from "public/blog/blog2.png";
import blog4 from "public/blog/blog4.png";
import blog5 from "public/blog/blog5.png";
import blog6 from "public/blog/blog6.png";
import blog7 from "public/blog/blog7.png";
import video1 from "public/video/video1.png";
import video2 from "public/video/video2.png";
import video3 from "public/video/video3.png";
import video4 from "public/video/video4.png";
import video5 from "public/video/video5.png";
import video6 from "public/video/video6.png";
import video7 from "public/video/video7.png";
import React from "react";
import Card from "./Card";

const ViewMore = ({ picture }) => {
  const array = [blog6, blog5, blog2, blog4, blog1, blog2, blog7, blog4];
  const video = [
    video6,
    video5,
    video2,
    video4,
    video1,
    video3,
    video7,
    video6,
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"View More"} />
      </div>
      <Row gutter={[33, 33]} justify={"center"} className="mt-5 card-parent">
        {(picture ? array : video).map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 16 }}
          >
            <Card src={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewMore;
