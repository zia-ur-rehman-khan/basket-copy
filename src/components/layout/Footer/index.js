import Image from "next/image";
import logo from "public/layout/image/logo.png";
import linkdin from "public/layout/svg/linkdin.svg";
import twitter from "public/layout/svg/twitter.svg";
import instagram from "public/layout/svg/instagram.svg";
import tiktok from "public/layout/svg/tiktok.svg";
import facebook from "public/layout/svg/facebook.svg";

import { Col, List, Row, Space } from "antd";
import CommonTextField from "components/common/TextField";
import React from "react";
import { Input } from "antd";
import CommonButton from "components/common/Button";

const Footer = () => {
  const socialIcons = [linkdin, twitter, instagram, tiktok, facebook];
  const data = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Shop",
    },
    {
      title: "Event",
    },
    {
      title: "Contact Us",
    },
  ];
  const data2 = [
    {
      title: "What We Do",
    },
    {
      title: "Blogs",
    },
    {
      title: "Our Services",
    },
    {
      title: "Our Road Map",
    },
    {
      title: "Our Staff",
    },
    {
      title: "Our Achievements",
    },
    {
      title: "Terms & Condition",
    },
    {
      title: "Privacy Policy",
    },
  ];

  const data3 = [
    {
      title: "Contact Details",
    },
    {
      title: "Location: South Croydon, Surrey, UK",
    },
    {
      title: "Phone: 202-555-0177",
    },
    {
      title: "Email: Admin@Iball.Uk",
    },
  ];

  const data4 = [
    {
      title: "Company",
    },
    {
      title: "Coaches",
    },
    {
      title: "Schools",
    },
    {
      title: "I ball Players",
    },
    {
      title: "Partners & Sponsors",
    },
  ];

  return (
    <Row justify="space-around" className="bg-grey p-5 radius" gutter={[0, 50]}>
      <Col
        xxl={{ span: 6 }}
        xl={{ span: 6 }}
        lg={{ span: 10 }}
        md={{ span: 16 }}
        sm={{ span: 24 }}
      >
        <Space direction="vertical">
          <Image src={logo} width={104} height={79} alt="logo" />

          <CommonTextField text="iBall is a Basketball Foundation specializing in training, development coaching and Basketball themed events management (Birthday’s, Camps and tournaments)" />
          <Space size={0}>
            {socialIcons.map((t, index) => (
              <Image key={index} src={t} width={32} height={32} alt="logo" />
            ))}
          </Space>
        </Space>
      </Col>
      <Col
        xxl={{ span: 4 }}
        xl={{ span: 4 }}
        lg={{ span: 10 }}
        md={{ span: 12 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <CommonTextField
          className={"pb-2"}
          text={"Menu"}
          fontSize={"21px"}
          fontWeight={"600"}
        />
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="https://ant.design">
                    <CommonTextField text={item.title} />
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col
        xxl={{ span: 4 }}
        xl={{ span: 4 }}
        lg={{ span: 10 }}
        md={{ span: 12 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <CommonTextField
          className={"pb-2"}
          text={"Quick Links"}
          fontSize={"21px"}
          fontWeight={"600"}
        />

        <List
          dataSource={data2}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="https://ant.design">
                    <CommonTextField text={item.title} />
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col
        xxl={{ span: 4 }}
        xl={{ span: 4 }}
        lg={{ span: 10 }}
        md={{ span: 12 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <CommonTextField
          className={"pb-2"}
          text={"Contact Details"}
          fontSize={"21px"}
          fontWeight={"600"}
        />
        <List
          dataSource={data3}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="https://ant.design">
                    <CommonTextField text={item.title} />
                  </a>
                }
              />
            </List.Item>
          )}
        />
        <CommonTextField
          className={"pb-2 mt-3"}
          text={"Company"}
          fontSize={"21px"}
          fontWeight={"600"}
        />
        <List
          dataSource={data4}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="https://ant.design">
                    <CommonTextField text={item.title} />
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col
        xxl={{ span: 4 }}
        xl={{ span: 4 }}
        lg={{ span: 10 }}
        md={{ span: 12 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <Space direction="vertical">
          <CommonTextField
            className={"pb-2"}
            text={"Newsletter"}
            fontSize={"21px"}
            fontWeight={"600"}
          />
          <CommonTextField text={"Subscribe To our Newsletter."} />
          <Input
            placeholder="Enter Your Email"
            // onSearch={onSearch}
          />
          <CommonButton child={"submit"} classname={"black"} width={"100%"} />
        </Space>
      </Col>
    </Row>
  );
};

export default Footer;
