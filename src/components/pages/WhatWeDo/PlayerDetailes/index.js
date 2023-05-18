import React, { Children } from "react";
import playerDetailes from "public/region/playerDetailes.png";
import coachDetailes from "public/region/coachDetailes.png";
import Image from "next/image";
import { Col, Row } from "antd";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { Space } from "antd";
import { Tabs } from "antd";
import { Divider } from "antd";
import detail from "public/school/playerDetailImage.png";
import { useRouter } from "next/router";

const PlayerDetailes = () => {
  const { query } = useRouter();
  const { region } = query;
  const type = region === "coach-region" ? "Coach" : "Player";

  const array = [
    { title: "Points Per Game", number: "22" },
    { title: "Round Per Game", number: "05" },
    { title: "Steals Per Game", number: "03" },
  ];

  const tabs = [
    {
      key: "1",
      label: "Game Statistics",
      children: (
        <Space size={40} direction="vertical">
          {type === "Coach" ? (
            <CommonTextField
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc. Gravida neque convallis a cras semper auctor neque vitae. Et tortor at risus viverra adipiscing at in tellus. Maecenas accumsan lacus vel facilisis volutpat est velit. Cursus in hac habitasse platea dictumst quisque sagittis. Suscipit adipiscing bibendum est ultricies. Nibh nisl condimentum id venenatis a condimentum. Viverra justo nec ultrices dui sapien eget mi. "
              }
            />
          ) : (
            <Space className="justify-content-between w-100" wrap={true}>
              {array.map((t, index) => (
                <div className="bg-grey radius  points" key={index}>
                  <CommonTextField text={t.title} />
                  <Divider style={{ borderColor: "#0000004D" }} />

                  <CommonHeading level={2} heading={t.number} />
                </div>
              ))}
            </Space>
          )}
          <CommonTextField text={"Seasons Highlights"} fontWeight={600} />
          <Image src={detail} alt="detail" />
        </Space>
      ),
    },
    {
      key: "2",
      label: "Player Statistics",
      children: (
        <Space size={40} direction="vertical">
          {type === "Coach" ? (
            <CommonTextField
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra vel turpis nunc. Gravida neque convallis a cras semper auctor neque vitae. Et tortor at risus viverra adipiscing at in tellus. Maecenas accumsan lacus vel facilisis volutpat est velit. Cursus in hac habitasse platea dictumst quisque sagittis. Suscipit adipiscing bibendum est ultricies. Nibh nisl condimentum id venenatis a condimentum. Viverra justo nec ultrices dui sapien eget mi. "
              }
            />
          ) : (
            <Space className="justify-content-between w-100" wrap={true}>
              {array.map((t, index) => (
                <div className="bg-grey radius  points" key={index}>
                  <CommonTextField text={t.title} />
                  <Divider style={{ borderColor: "#0000004D" }} />

                  <CommonHeading level={2} heading={t.number} />
                </div>
              ))}
            </Space>
          )}
          <CommonTextField text={"Seasons Highlights"} fontWeight={600} />
          <Image src={detail} alt="detail" />
        </Space>
      ),
    },
  ];

  return (
    <Row gutter={[30, 30]} className="common-padding">
      <Col
        xxl={{ span: 12 }}
        xl={{ span: 12 }}
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <Image
          src={type === "Coach" ? coachDetailes : playerDetailes}
          alt="player"
        />
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
          text={`About ${type}`}
          className={"mb-3 mt-4"}
          fontWeight={600}
        />
        <Space direction="vertical">
          <Space wrap={true} size={[70, 20]}>
            <CommonTextField text={"Name: Wilbur Todd"} />
            <CommonTextField text={"Height: 6’7"} />
            <CommonTextField text={"Age: 25 Years"} />
          </Space>
          <Space wrap={true} size={[70, 20]}>
            <CommonTextField text={"Position: Small Forward"} />
            <CommonTextField text={"Jersey: 32"} />
          </Space>
        </Space>
        <Tabs className="my-tabs mt-5" type="card" items={tabs} />
      </Col>
    </Row>
  );
};

export default PlayerDetailes;
