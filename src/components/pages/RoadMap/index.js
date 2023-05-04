import { List } from "antd";
import { Col, Row } from "antd";
import CommonBanner from "components/common/Banner";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import React from "react";
import banner from "public/school/detailBanner.png";

const RoadMap = () => {
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
      title: "Iball team(Our Staff)",
      url: "/team",
    },
    {
      title: "What We Do",
      url: "/what-we-do",
    },
    {
      title: "Who we Work With",
      url: "/school",
    },
    {
      title: "Our Sponsers",
      url: "/partners-sponsers",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
    {
      title: "Gallery",
      url: "/team",
    },
    {
      title: "Blogs",
      url: "/blog",
    },
    {
      title: "Services",
      url: "/service",
    },
    {
      title: "Our Achievements ",
      url: "/terms-conditions",
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

  const events = [
    {
      title: "Academy",
      url: "/event/academy",
    },
    {
      title: "Birthdays",
      url: "/event/birthday",
    },
    {
      title: "School",
      url: "/event/school",
    },
    {
      title: "Camps",
      url: "/event/camps",
    },
    {
      title: "Community",
      url: "/event/community",
    },
  ];

  const Login = [
    {
      title: "Sign In",
      url: "/login",
    },
    {
      title: "Sign Up",
      url: "/sign-up",
    },
    {
      title: "Forgot Password",
      url: "/forgot-password",
    },
  ];

  return (
    <>
      <CommonBanner src={banner} heading={"Road Map"} />
      <div className="common-padding">
        <CommonHeading
          level={2}
          heading={"Iball Road Map"}
          className={"mb-5"}
        />
        <Row className="justify-content-between" gutter={[0, 50]}>
          <Col
            xxl={{ span: 4 }}
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <CommonTextField
              className={"mb-5"}
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
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <CommonTextField
              className={"mb-5"}
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
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <CommonTextField
              className={"mb-5"}
              text={"Generic Pages"}
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
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <CommonTextField
              className={"mb-5"}
              text={"Events"}
              fontSize={"21px"}
              fontWeight={"600"}
            />
            <List
              dataSource={events}
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
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <CommonTextField
              className={"mb-5"}
              text={"Login "}
              fontSize={"21px"}
              fontWeight={"600"}
            />
            <List
              dataSource={Login}
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
        </Row>
      </div>
    </>
  );
};

export default RoadMap;
