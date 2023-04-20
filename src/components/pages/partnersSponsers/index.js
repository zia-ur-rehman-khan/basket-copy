import { Divider, Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/school/schoolContentImage.png";
import banner from "public/sponsers/banner.png";

import React from "react";
import OurTeam from "components/pages/Team/OurTeam";
import { useRouter } from "next/router";
import WorkWith from "../School/WorkWith";
import OurPartner from "./OurPartner";

const PartnersSponsers = () => {
  return (
    <>
      <CommonBanner
        text1={"Our Partners Sponsors "}
        src={banner}
        content={
          "We Coach in Primary and Secondary Schools across London. Your School can be next!"
        }
        heading={"Our Sponsers & Partner"}
      />

      <div className="common-padding">
        <OurPartner head="Partner" />
        <OurPartner head="Sponsor" />
      </div>
    </>
  );
};

export default PartnersSponsers;
