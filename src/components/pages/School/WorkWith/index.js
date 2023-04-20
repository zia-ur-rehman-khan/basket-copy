import { Col, Row } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import MeetCard from "components/pages/About/Meet/MeetCard";
import EventCard from "components/pages/Home/Event/EventCard";
import card1 from "public/school/card1.png";
import card2 from "public/school/card2.png";
import card3 from "public/school/card3.png";
import card5 from "public/school/card5.png";
import card4 from "public/school/card4.png";

import React from "react";
import WorkWithCard from "./card";
import { Select } from "antd";
import { Space } from "antd";
import CommonSelect from "components/common/Select";

const WorkWith = () => {
  const array = [
    card1,
    card1,
    card3,
    card2,
    card5,
    card5,
    card5,
    card4,
    card1,
    card1,
    card3,
    card2,
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap">
        <Commonheading level={2} heading={"Who We Work With"} />
        <Space>
          <CommonTextField text={"Coach Region:"} />
          <CommonSelect
            defaultValue="lucy"
            width={120}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Space>
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
            <WorkWithCard src={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WorkWith;
