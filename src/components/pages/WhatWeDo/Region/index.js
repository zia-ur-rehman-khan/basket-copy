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
import Iballers from "components/pages/School/SchoolDetailes/Iballers";
import PlayerRegion from "./PlayerRegion";
import { useRouter } from "next/router";

const Region = () => {
  const { query } = useRouter();
  const { region } = query;

  const type = region === "coach-region" ? "Coach" : "Player";

  return (
    <>
      <CommonBanner
        text1={"Ball Academy"}
        src={banner}
        heading={`${type} Profile`}
      />

      <div className="common-padding">
        <PlayerRegion type={type} />
      </div>
    </>
  );
};

export default Region;
