import React from "react";
import Commonheading from "components/common/Heading";
import CommonButton from "components/common/Button";
import { Col, Row, Space } from "antd";
import basketBall from "public/product/product1.png";
import tshirt from "public/product/product2.png";
import shoes from "public/product/product3.png";
import socks from "public/product/product4.png";
import CommonTextField from "components/common/TextField";
import ProductCard from "components/pages/Home/Product/ProductCard";
import EventCard from "./EventCard";
import event1 from "public/event/events1.svg";
import event2 from "public/event/events2.svg";
import event3 from "public/event/events3.svg";
import event4 from "public/event/events4.svg";
import event5 from "public/event/events5.svg";

const OurEvents = () => {
  const temp = [
    { src: event1, title: "School", url: "school" },
    { src: event2, title: "Academy/Club", url: "academy" },
    { src: event3, title: "Community", url: "community" },
    { src: event4, title: "Birthdays", url: "birthday" },
    { src: event5, title: "Camps", url: "camps" },
  ];

  const colStyles = {
    flexBasis: "20%",
    width: "20%",
  };

  return (
    <div className="event-side mb-5">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Commonheading level={2} heading={"Our events"} />
      </div>
      <Row type="flex" gutter={[10, 10]} className="mt-5 card-parent">
        {temp.map((_t, key) => (
          <Col
            key={key}
            style={{ ...colStyles }}
            xxl={{ span: 5 }}
            xl={{ span: 5 }}
            lg={{ span: 10 }}
            md={{ span: 11 }}
            sm={{ span: 15 }}
          >
            <EventCard data={_t} key={key} />
          </Col>
        ))}
      </Row>
      ,
    </div>
  );
};

export default OurEvents;
