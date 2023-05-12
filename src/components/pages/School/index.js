import { Divider, Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/school/schoolContentImage.png";
import banner from "public/school/schoolBanner.png";

import React from "react";
import OurTeam from "components/pages/Team/OurTeam";
import WorkWith from "./WorkWith";
import { useRouter } from "next/router";
import CommonVideoPreview from "components/common/VideoPreview";

const School = () => {
  const { push } = useRouter();
  const handelRoute = () => {
    push("/school/school-register");
  };

  return (
    <>
      <CommonBanner
        text1={"who we work with"}
        width="100%"
        src={banner}
        content={
          "We Coach in Primary and Secondary Schools across London. Your School can be next!"
        }
        heading={"Your School can be next!"}
      />
      <div className="school-heading-padding">
        <Commonheading
          level={2}
          heading={"Check this video of our taster sessions"}
        />
      </div>
      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 14,
          contentSmall: 24,
          contentlarge: 10,
        }}
        component={<CommonVideoPreview />}
      >
        <CommonTextField
          fontSize="15px"
          text="Learn more about Iball"
          className={"text-uppercase"}
        />
        <Commonheading className={"mt-1"} level={2} heading="What We do" />
        <Space direction="vertical" size={24} className="mt-4">
          <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <CommonButton
            child="Register"
            type="primary"
            onClick={handelRoute}
            width="30%"
          />
        </Space>
      </ImageContent>

      <div className="work-with-spacing">
        <WorkWith />
      </div>
    </>
  );
};

export default School;
