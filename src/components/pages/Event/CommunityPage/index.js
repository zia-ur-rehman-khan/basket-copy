import CommonBanner from "components/common/Banner";
import React from "react";
import banner from "public/event/banner.png";
import CommonTextField from "components/common/TextField";

import { Space } from "antd";
import OurCommunity from "./OurCommunity";

const CommunityPage = () => {
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
        <OurCommunity />
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

export default CommunityPage;
