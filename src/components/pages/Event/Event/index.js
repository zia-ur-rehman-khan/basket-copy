import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/event/eventContentImage.png";
import banner from "public/event/banner.png";
import MemberShip from "../../../common/Button/MemberShip";
import OurEvents from "./OurEvents";
import React from "react";

const EventPage = () => {
  return (
    <>
      <CommonBanner
        heading={"Browse Our Events"}
        text1={"Events"}
        src={banner}
        content={
          "iBall Basketball Foundation’s key goal is to provide a digital  platform for aspiring basketball players of all abilities, ages and sexes across the globe"
        }
      />

      <OurEvents />

      <MemberShip />

      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 12,
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
    </>
  );
};

export default EventPage;
