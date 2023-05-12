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
      <div className="common-padding">
        <OurPackages />
      </div>

      <Offer />

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
              text="Birthday Party Packages"
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="Basketball-Themed Birthday Party Packages"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
              <CommonTextField text="Read More" color="#4DC3D1" />
            </Space>
          </>
        }
      />
    </>
  );
};

export default BirthdayPage;
