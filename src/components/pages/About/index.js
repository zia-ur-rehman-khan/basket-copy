import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import MemberShip from "components/common/Button/MemberShip";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import banner from "public/about/banner.png";
import contentImage from "public/about/contentImage.png";
import Meet from "./Meet";
import React from "react";

const About = () => {
  return (
    <>
      <CommonBanner
        heading={"Learn More About iBall"}
        text1={"Welcome to Iball"}
        src={banner}
        content={
          "iBall Basketball Foundation’s key goal is to provide a digital  platform for aspiring basketball players of all abilities, ages and sexes across the globe"
        }
      />
      <ImageContent
        styleClass={"common-padding"}
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 12,
        }}
        src={contentImage}
        content={
          <>
            <CommonTextField
              fontSize="15px"
              text="Learn more about Iball"
              className={"text-uppercase"}
            />
            <Commonheading className={"mt-1"} level={2} heading="who we are" />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
              <CommonTextField
                text={"Our Mission"}
                fontWeight={600}
                fontSize={"16.5px"}
              />
              <CommonTextField
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas sed tempus. Fringilla est ullamcorper eget nulla facilisi etiam. "
                }
              />
            </Space>
          </>
        }
      />
      <ImageContent
        styleClass={"about-section-spacing"}
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 12,
        }}
        className={"flex-row-reverse"}
        src={contentImage}
        content={
          <>
            <CommonTextField
              fontSize="15px"
              text="Vision & History"
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="Our Vision & History"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
            </Space>
          </>
        }
      />
      <MemberShip />
      <div className="common-padding">
        <Meet />
      </div>
    </>
  );
};

export default About;
