import Image from "next/image";
import logo from "public/layout/image/logo.png";
import linkdin from "public/layout/svg/linkdin.svg";
import twitter from "public/layout/svg/twitter.svg";
import instagram from "public/layout/svg/instagram.svg";
import tiktok from "public/layout/svg/tiktok.svg";
import facebook from "public/layout/svg/facebook.svg";

import { Col, List, Row, Space } from "antd";
import CommonTextField from "components/common/TextField";
import CommonInputField from "components/common/Input";
import CommonButton from "components/common/Button";
import { useRouter } from "next/router";

const Footer = () => {
  const socialIcons = [linkdin, twitter, instagram, tiktok, facebook];
  const data = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "Event",
      url: "/event",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];
  const data2 = [
    {
      title: "What We Do",
      url: "/what-we-do",
    },
    {
      title: "Blogs",
      url: "/blog",
    },
    {
      title: "Our Services",
      url: "/service",
    },
    {
      title: "Our Road Map",
      url: "/road-map",
    },
    {
      title: "Our Staff",
      url: "/team",
    },
    {
      title: "Our Achievements",
      url: "/achievement",
    },
    {
      title: "Media",
    },
    {
      title: "Terms & Condition",
      url: "/terms-conditions",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
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
      title: "Coaches",
      url: "/what-we-do/coach-region",
    },
    {
      title: "Schools",
      url: "/school",
    },
    {
      title: "I ball Players",
      url: "/about",
    },
    {
      title: "Partners & Sponsors",
      url: "/partners-sponsers",
    },
  ];

  const isUser = useRouter().pathname.startsWith('/user')
  const isAdmin = useRouter().pathname.startsWith('/admin')
  return (
    <Row justify="space-around" className={`bg-grey p-5 radius ${isAdmin || isUser ? 'hide-true' : ''}`} gutter={[0, 50]}>
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
          <Space size={5}>
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
                  <a href={item.url}>
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
                  <a href={item.url}>
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
              <List.Item.Meta title={<CommonTextField text={item.title} />} />
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
                  <a href={item.url}>
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
          <CommonInputField
            placeholder="Enter Your Email"
            className="white"
            height={"35px"}
          />
          <CommonButton child={"submit"} classname={"black"} width={"100%"} />
        </Space>
      </Col>
    </Row>
  );
};

export default Footer;
