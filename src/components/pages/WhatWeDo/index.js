import { Divider, Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/school/schoolContentImage.png";
import banner from "public/whatWeDo/banner.png";

import React from "react";
import OurTeam from "components/pages/Team/OurTeam";
import { useRouter } from "next/router";
import WorkWith from "../School/WorkWith";
import IballAcademy from "./IballAcademy";

const WhatWeDo = () => {
  const { push } = useRouter();
  const handelRoute = () => {
    push("/school/school-register");
  };

  return (
    <>
      <CommonBanner
        text1={"Iball Academy "}
        src={banner}
        content={
          "iball Academy Basketball Development & Athleticism Traning For any Child Seeking to Develop Thier Basketball Skills. We Also Train & Develpo Basketball Coaches & Trainers who wish to work with Individual/Organization Seeking Basketball Coaching & training "
        }
        heading={"What We Do"}
      />
      <IballAcademy />
    </>
  );
};

export default WhatWeDo;
