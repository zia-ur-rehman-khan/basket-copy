import React, { Children } from "react";
import playerDetailes from "public/school/playerDetail.png";
import Image from "next/image";
import { Col, Row } from "antd";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { Space } from "antd";
import { Tabs } from "antd";
import { Divider } from "antd";

const PlayerDetailes = () => {
  return (
    <Row gutter={[30, 30]} className="common-padding">
      <Col
        xxl={{ span: 12 }}
        xl={{ span: 12 }}
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <Image src={playerDetailes} alt="player" />
      </Col>
      <Col
        xxl={{ span: 12 }}
        xl={{ span: 12 }}
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <CommonHeading heading={"Wilbur Todd"} />
        <CommonTextField
          text={"About player"}
          className={"mb-3 mt-4"}
          fontWeight={600}
        />
        <Space wrap={true} size={[50, 20]}>
          <CommonTextField text={"Name:Wilbur Todd"} />
          <CommonTextField text={"Height:6’7"} />
          <CommonTextField text={"Age:25 Years"} />
          <CommonTextField text={"Position:Small Forward"} />
          <CommonTextField text={"Jersey:32"} />
        </Space>
        <Tabs
          className="my-tabs mt-5"
          type="card"
          items={new Array(2).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: (
                <Space size={40}>
                  <Space
                    align="center"
                    direction="vertical"
                    className="bg-grey radius p-3"
                  >
                    <CommonTextField text={"Points Per Game"} />
                    <Divider />
                    <CommonHeading level={2} heading={"22"} />
                  </Space>
                  <Space
                    align="center"
                    direction="vertical"
                    className="bg-grey radius p-3"
                  >
                    <CommonTextField text={"Points Per Game"} />
                    <Divider />
                    <CommonHeading level={2} heading={"22"} />
                  </Space>
                  <Space
                    align="center"
                    direction="vertical"
                    className="bg-grey radius p-3"
                  >
                    <CommonTextField text={"Points Per Game"} />
                    <Divider />
                    <CommonHeading level={2} heading={"22"} />
                  </Space>
                  <CommonTextField text={"Seasons Highlights"} />
                </Space>
              ),
            };
          })}
        />
      </Col>
    </Row>
  );
};

export default PlayerDetailes;
