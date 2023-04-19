import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import MemberShip from "components/common/Button/MemberShip";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";

import contentImage from "public/about/contentImage.png";
import React from "react";
import OurTeam from "./OurTeam";
import banner from "public/meet/meetBanner.png";

const Team = () => {
  return (
    <>
      <CommonBanner
        heading={"iBall Basketball Foundation"}
        text1={"Iball team"}
        src={banner}
        content={
          "Our goal is to provide aspiring basketball players of all abilities physical and digital platforms to share,develop and showcase their game."
        }
      />

      <div className="common-padding">
        <OurTeam />
      </div>
    </>
  );
};

export default Team;
