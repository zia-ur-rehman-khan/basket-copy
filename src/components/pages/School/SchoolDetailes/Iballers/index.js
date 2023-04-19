import { Col, Row } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import baller1 from "public/school/ballers1.png";
import baller2 from "public/school/ballers2.png";
import baller3 from "public/school/ballers3.png";
import baller4 from "public/school/ballers4.png";

import React from "react";
import IballerCard from "./IballerCard";
import { Input } from "antd";
import { Space } from "antd";

const { Search } = Input;

const Iballers = () => {
  const array = [
    baller2,
    baller1,
    baller3,
    baller4,
    baller2,
    baller1,
    baller3,
    baller4,
    baller2,
    baller1,
    baller3,
    baller4,
  ];

  return (
    <div>
      <Row align={"middle"} className="mt-5" gutter={[20, 20]}>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Commonheading level={2} heading={"Who We Work With"} />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Space size={30} wrap={true}>
            <Search placeholder="Search by Name" enterButton />
            <CommonTextField text={"Coach Region:"} />
            <CommonTextField text={"Age:"} />
          </Space>
        </Col>
      </Row>
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
            <IballerCard src={_t} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Iballers;
