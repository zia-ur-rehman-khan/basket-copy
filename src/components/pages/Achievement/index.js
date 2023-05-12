import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/achievement/contentImage.png";
import contentVideo from "public/achievement/contentVideo.png";
import banner from "public/school/detailBanner.png";

import React from "react";
import MemberShip from "components/common/Button/MemberShip";
import OurNumbers from "./OurNumbers";
import CommonVideoPreview from "components/common/VideoPreview";

const Achievement = () => {
  return (
    <>
      <CommonBanner src={banner} heading={"Our Achievements "} />

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
              text="Our Achievements "
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="What iBall  have achieved so Far"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
            </Space>
          </>
        }
      />
      <OurNumbers />

      <ImageContent
        styleClass={"common-padding"}
        responsive={{
          imageSmall: 24,
          imagelarge: 14,
          contentSmall: 24,
          contentlarge: 10,
        }}
        component={<CommonVideoPreview />}
        content={
          <>
            <CommonTextField
              fontSize="15px"
              text="Our Achievements "
              className={"text-uppercase"}
            />
            <Commonheading
              className={"mt-1"}
              level={2}
              heading="Have A look to know more about our achievements"
            />
            <Space direction="vertical" size={24} className="mt-4">
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
            </Space>
          </>
        }
      />
    </>
  );
};

export default Achievement;
