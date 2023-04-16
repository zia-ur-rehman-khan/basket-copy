import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import EventCard from "./EventCard";
import React from "react";
import SchoolIcon from "public/svg/SchoolIcon";
import ClubIcon from "public/svg/ClubIcon";
import CommunityIcon from "public/svg/CommunityIcon";
import BirthdayIcon from "public/svg/BirthdayIcon";
import CampsIcon from "public/svg/CampsIcon";

const OurEvents = () => {
  const temp = [
    { icon: <SchoolIcon />, title: "School", url: "school" },
    { icon: <ClubIcon />, title: "Academy/Club", url: "academy" },
    { icon: <CommunityIcon />, title: "Community", url: "community" },
    { icon: <BirthdayIcon />, title: "Birthdays", url: "birthday" },
    { icon: <CampsIcon />, title: "Camps", url: "camps" },
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
