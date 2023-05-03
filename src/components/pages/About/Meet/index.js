import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";

import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import meet1 from "public/meet/meet1.png";
import meet2 from "public/meet/meet2.png";
import meet3 from "public/meet/meet3.png";
import meet4 from "public/meet/meet4.png";
import MeetCard from "./MeetCard";
import React from "react";
import { useRouter } from "next/router";

const Meet = () => {
  const array = [
    { src: meet1, name: "William Lawmann", designation: "Founder" },
    { src: meet2, name: "Jaden Gonzales", designation: "Coach" },
    { src: meet4, name: "Naseya Cottrell", designation: "Coach" },
    { src: meet3, name: "Aaron Lawmann", designation: "Coach" },
  ];

  const { push } = useRouter();

  const handelRoute = () => {
    push("/team");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Space direction="vertical">
          <CommonTextField
            text="Vision & History"
            letterSpacing="2px"
            className={"text-uppercase"}
          />
          <Commonheading level={2} heading={"Meet the people Behind iball"} />
        </Space>
        <CommonButton child="View All" onClick={handelRoute} />
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
            <MeetCard data={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Meet;
