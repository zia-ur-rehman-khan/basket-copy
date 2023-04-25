import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import React from "react";
import SchoolIcon from "public/svg/SchoolIcon";
import ClubIcon from "public/svg/ClubIcon";
import PlayerIcon from "public/svg/PlayerIcon";
import CoachIcon from "public/svg/CoachIcon";
import EventIcon from "public/svg/EventIcon";
import EventCard from "components/pages/Event/Event/OurEvents/EventCard";
import CommonTextField from "components/common/TextField";
import CommonButton from "components/common/Button";

const IballAcademy = () => {
  const temp = [
    {
      icon: <PlayerIcon />,
      title: "Player Profiles",
      url: "what-we-do/player-region",
    },
    {
      icon: <CoachIcon />,
      title: "Coach Profiles",
      url: "what-we-do/coach-region",
    },
    { icon: <EventIcon />, title: "Academy Events", url: "/academy" },
  ];

  return (
    <div className="common-padding">
      <Row align={"middle"} className="mt-5" gutter={[20, 20]}>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Commonheading level={2} heading={"Browse Our Events"} />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <CommonTextField
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
            }
          />
        </Col>
      </Row>
      <Row gutter={[33, 33]} justify={"center"} className="mt-5 card-parent">
        {temp.map((_t, key) => (
          <Col
            key={key}
            xxl={{ span: 8 }}
            xl={{ span: 8 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
          >
            <EventCard data={_t} key={key} academy />
          </Col>
        ))}
      </Row>
      ,
    </div>
  );
};

export default IballAcademy;
