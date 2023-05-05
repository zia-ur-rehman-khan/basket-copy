import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import EventCard from "components/pages/Home/Event/EventCard";
import blog1 from "public/blog/blog1.png";
import blog2 from "public/blog/blog2.png";
import blog3 from "public/blog/blog3.png";
import blog4 from "public/blog/blog4.png";
import React from "react";

const OurCommunity = () => {
  const array = [blog1, blog2, blog3, blog4, blog1, blog2, blog3, blog4];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Our Academy/Club Events"} />
      </div>
      <Row gutter={[18, 25]} justify={"center"} className="mt-5 card-parent">
        {array.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 16 }}
          >
            <EventCard src={_t} price />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurCommunity;
