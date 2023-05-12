import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import banner from "public/event/banner.png";
import MemberShip from "./MemberShip";
import OurAcademy from "./OurAcademy";
import React from "react";

const AcademyPage = () => {
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
      <div className="academy-section-spacing">
        <OurAcademy />
        <CommonTextField
          topClass={"p-5"}
          className={"primary "}
          textAlign={"center"}
          text="Load More"
        />
      </div>

      <ImageContent
        styleClass={"academy-content-section-spacing"}
        className={"flex-row-reverse"}
        responsive={{
          imageSmall: 24,
          imagelarge: 10,
          contentSmall: 24,
          contentlarge: 12,
        }}
        component={<MemberShip />}
        content={
          <Space direction="vertical" size={20}>
            <Commonheading
              level={2}
              heading="Become an iBall Basketball Academy Member"
            />
            <Space direction="vertical" size={24}>
              <CommonTextField text="Donec ac odio tempor orci dapibus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Eu mi bibendum neque egestas congue quisque egestas diam. Eu feugiat pretium nibh ipsum. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Accumsan in nisl nisi scelerisque. Pretium fusce id velit ut tortor. Nulla pellentesque dignissim enim sit amet venenatis urna." />
              <CommonButton child="Get Started" width={"70%"} type="primary" />
            </Space>
          </Space>
        }
      />
    </>
  );
};

export default AcademyPage;
