import { Divider, Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/image.png";
import banner from "public/layout/image/banner.png";
import Blog from "./Blog";
import Event from "./Event";
import Product from "./Product";
import WithUS from "./WithUs";
import React from "react";
import blog1 from "public/blog/blog1.png";
import blog2 from "public/blog/blog2.png";
import blog3 from "public/blog/blog3.png";
import blog4 from "public/blog/blog4.png";
// import video from "public/video/video.mp4";
import { useRouter } from "next/router";
import CommonVideoPreview from "components/common/VideoPreview";

const Home = () => {
  const array = [blog1, blog2, blog3, blog4, blog1, blog2, blog3];

  const { push } = useRouter();

  const handelRoute = () => {
    push("/what-we-do");
  };

  return (
    <>
      <CommonBanner
        showButton
        text1={"WELCOME TO IBALL"}
        src={banner}
        content={
          "iBall Basketball Foundation’s key goal is to provide a digital  platform for aspiring basketball players of all abilities, ages and sexes across the globe"
        }
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
        component={<CommonVideoPreview />}
        content={
          <>
            <CommonTextField
              fontSize="15px"
              text="Learn more about Iball"
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="Learn who we are and what we do"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
              <CommonButton
                child="Learn more"
                type="primary"
                classname={"text-capitalize"}
                onClick={handelRoute}
                width="30%"
              />
            </Space>
          </>
        }
      />
      <Product />
      <WithUS />
      <div className="common-padding">
        <Event />
        <Blog array={array} />
      </div>
    </>
  );
};

export default Home;
