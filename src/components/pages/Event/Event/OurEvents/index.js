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

  return (
    <div className="event-side common-padding">
      <div className="d-flex justify-content-between align-items-center ">
        <Commonheading level={2} heading={"Our events"} />
      </div>
      <div className="event-card-section">
        {temp.map((_t, key) => (
          <div key={key} className="card-parent">
            <EventCard data={_t} key={key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEvents;
