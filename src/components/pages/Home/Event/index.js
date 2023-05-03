import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

import React from "react";
import EventCard from "./EventCard";
import event1 from "public/event/event1.png";
import event2 from "public/event/event2.png";
import event3 from "public/event/event3.png";
import event4 from "public/event/event4.png";
import { useRouter } from "next/router";
import CommonDraggableCarousal from "components/common/DraggableCarousal";

const Event = () => {
  const array = [event1, event2, event3, event4, event1, event2];

  const { push } = useRouter();

  const handelRoute = () => {
    push("/event");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={"Browse Our Events"} />
        <CommonButton child="View More" onClick={handelRoute} />
      </div>

      <CommonDraggableCarousal>
        {array.map((_t, key) => (
          <EventCard src={_t} key={key} />
        ))}
      </CommonDraggableCarousal>
    </div>
  );
};

export default Event;
