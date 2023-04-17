import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

import React from "react";
import EventCard from "./EventCard";
import event1 from "public/event/event1.png";
import event2 from "public/event/event2.png";
import event3 from "public/event/event3.png";
import event4 from "public/event/event4.png";

const Event = () => {
  const array = [event1, event2, event3, event4];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={"Browse Our Events"} />
        <CommonButton child="View More" />
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

export default Event;
