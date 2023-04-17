import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/event/birthdayContentImage.png";
import banner from "public/event/birthdayBanner.png";
import React from "react";
import OurEvents from "../Event/OurEvents";
import Offer from "./Offer";
import OurPackages from "./OurPackages";

const BirthdayPage = () => {
  return (
    <>
      <CommonBanner
        heading={"Basketball Birthday Party"}
        text1={"Birthday Party"}
        src={banner}
        content={
          "Make Your Child’s Day with one of our Fantastic Party Packages With great packages to suit all budgets we guarantee to make your child’s day a very special one"
        }
      />

      <OurPackages />

      <Offer />

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
            <CommonTextField fontSize="20px" text="Birthday Party Packages" />
            <Commonheading
              level={2}
              heading="Basketball-Themed Birthday Party Packages"
            />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Our coaches have been organizing Baskteball themed Birthday themed Birthday Parties for our clients since 2018 and we are proud to be officially launching our Birthday Packages to all our clients." />
              <CommonTextField text="Read More" color="#4DC3D1" />
            </Space>
          </>
        }
      />
    </>
  );
};

export default BirthdayPage;
