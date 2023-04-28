import { Divider, Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/school/schoolContentImage.png";
import banner from "public/school/detailBanner.png";
import React from "react";
import OurTeam from "components/pages/Team/OurTeam";
import Iballers from "./Iballers";

const SchoolDetailes = () => {
  return (
    <>
      <CommonBanner
        text1={"Ball Academy"}
        src={banner}
        heading={"Iball School"}
      />

      <div className="common-padding">
        <Iballers />
      </div>
    </>
  );
};

export default SchoolDetailes;
