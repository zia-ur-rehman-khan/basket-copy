import CommonBanner from "components/common/Banner";
import CommonTextField from "components/common/TextField";
import banner from "public/event/banner.png";
import OurSchool from "./OurSchool";
import React from "react";

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
