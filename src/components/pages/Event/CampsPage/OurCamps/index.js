import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";
import blog1 from "public/blog/blog1.png";
import blog2 from "public/blog/blog2.png";
import blog3 from "public/blog/blog3.png";
import blog4 from "public/blog/blog4.png";
import BlogCard from "components/pages/Home/Blog/BlogCard";
import EventCard from "components/pages/Home/Event/EventCard";

const OurCamps = () => {
  const array = [blog1, blog2, blog3, blog4, blog1, blog2, blog3, blog4];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Our Camps Events"} />
      </div>
      <Row gutter={[33, 33]} justify={"center"} className="mt-5 card-parent">
        {array.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 16 }}
          >
            <EventCard src={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurCamps;
