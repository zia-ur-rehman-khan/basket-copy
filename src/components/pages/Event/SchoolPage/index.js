import CommonBanner from "components/common/Banner";
import React from "react";
import OurSchool from "./OurSchool";
import banner from "public/event/banner.png";
import CommonTextField from "components/common/TextField";
import ImageContent from "components/common/ImageWithContent";
import Commonheading from "components/common/Heading";
import { Space } from "antd";
import CommonButton from "components/common/Button";
import contentImage from "public/about/contentImage.png";

const SchoolPage = () => {
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
      <div className="common-padding">
        <OurSchool />
        <CommonTextField
          topClass={"p-5"}
          className={"primary"}
          textAlign={"center"}
          text="Load More"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default SchoolPage;
