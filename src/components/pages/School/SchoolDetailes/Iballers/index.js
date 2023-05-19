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
import CommonSelect from "components/common/Select";

const { Search } = Input;

const Iballers = () => {
  const array = [
    { url: baller2, number: "00", title: "Russ" },
    { url: baller1, number: "09", title: "Joash Omao" },
    { url: baller3, number: "00", title: "Wilbur Todd" },
    { url: baller4, number: "00", title: "Jan Green" },
    { url: baller2, number: "00", title: "Russ" },
    { url: baller1, number: "09", title: "Joash Omao" },
    { url: baller3, number: "00", title: "Wilbur Todd" },
    { url: baller4, number: "00", title: "Jan Green" },
    { url: baller2, number: "00", title: "Russ" },
    { url: baller1, number: "09", title: "Joash Omao" },
    { url: baller3, number: "00", title: "Wilbur Todd" },
    { url: baller4, number: "00", title: "Jan Green" },
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
          <Commonheading level={2} heading={"Children Academy iballers"} />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Space size={20} wrap={true}>
            <Search placeholder="Search by Name" enterButton />
            <Space>
              <CommonTextField text={"Gender:"} />
              <CommonSelect
                className="simple-select"
                defaultValue="lucy"
                width={120}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Space>
            <Space>
              <CommonTextField text={"Age:"} />
              <CommonSelect
                className="simple-select"
                defaultValue="lucy"
                width={120}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Space>
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
        <CommonTextField
          text="View More"
          color="#4DC3D1"
          className={"c-pointer"}
        />
      </Row>
    </div>
  );
};

export default Iballers;
