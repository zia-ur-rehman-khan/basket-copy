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

const Achievement = () => {
  return (
    <>
      <CommonBanner src={banner} heading={"Road Map"} />

      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 12,
        }}
        src={contentImage}
        content={
          <>
            <CommonTextField fontSize="20px" text="OUR ACHIEVEMENTS" />
            <Commonheading
              level={2}
              heading="What iBall  have achieved so Far"
            />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Ultricies mi eget mauris pharetra et. Ultrices neque ornare aenean euismod elementum. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Id venenatis a condimentum vitae sapien. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sed vulputate mi sit amet mauris. Malesuada bibendum arcu vitae elementum curabitur vitae. Pretium nibh ipsum consequat nisl vel pretium lectus quam id." />
            </Space>
          </>
        }
      />
      <OurNumbers />

      <ImageContent
        responsive={{
          imageSmall: 24,
          imagelarge: 14,
          contentSmall: 24,
          contentlarge: 10,
        }}
        src={contentVideo}
        content={
          <>
            <CommonTextField fontSize="20px" text="OUR ACHIEVEMENTS" />
            <Commonheading
              level={2}
              heading="Have A look to know more about our achievements"
            />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas sed tempus. Fringilla est ullamcorper eget nulla facilisi etiam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Diam volutpat commodo sed egestas egestas ." />
            </Space>
          </>
        }
      />
    </>
  );
};

export default Achievement;
