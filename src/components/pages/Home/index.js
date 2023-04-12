import React from "react";
import CommonBanner from "components/common/Banner";
import ImageContent from "components/common/ImageWithContent";
import Product from "./Product";
import CommonTextField from "components/common/TextField";
import Commonheading from "components/common/Heading";
import Image from "next/image";
import { Space } from "antd";
import WithUS from "./WithUs";
import Event from "./Event";
import Blog from "./Blog";
import banner from "public/layout/image/banner.png";
import { Divider } from "antd";
import contentImage from "public/image.png";
import CommonButton from "components/common/Button";

const Home = () => {
  return (
    <>
      <CommonBanner
        text1={"Welcome to Iball"}
        src={banner}
        Component={
          <Space size={20}>
            <Commonheading heading="You Ball" />
            <Divider
              type="vertical"
              style={{ height: "60px", borderColor: "#ffffff" }}
            />
            <Commonheading heading="i Ball" />
            <Divider
              type="vertical"
              style={{ height: "60px", borderColor: "#ffffff" }}
            />
            <Commonheading heading="We Ball" />
          </Space>
        }
      />
      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 14,
          contentSmall: 24,
          contentlarge: 10,
        }}
        src={contentImage}
        content={
          <>
            <CommonTextField fontSize="20px" text="Learn more about Iball" />
            <Commonheading
              level={2}
              heading="Learn who we are and what we do"
            />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
              <CommonButton child="learn more" type="primary" />
            </Space>
          </>
        }
      />
      <Product />
      <WithUS />
      <div className="p-5">
        <Event />
        <Blog />
      </div>
    </>
  );
};

export default Home;
