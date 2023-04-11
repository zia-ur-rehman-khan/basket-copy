import Image from "next/image";
import React from "react";
import banner from "public/layout/image/banner.png";
import TextField from "../TextField";
import Commonheading from "../Heading";
import { Divider } from "antd";
import { Space } from "antd";

const CommonBanner = () => {
  return (
    <div className="banner_image">
      <Space className="banner_content">
        <TextField text="WELCOME TO IBALL" fontSize="29.64px" />
        <Space size={20}>
          <Commonheading heading="You Ball" />
          <Divider
            type="vertical"
            style={{ height: "60px", borderColor: "#ffffff" }}
          />
          <Commonheading heading="i Ball" />
          <Divider
            type="vertical"
            style={{ height: "60px", borderColor: "#ffffff" }}
          />
          <Commonheading heading="We Ball" />
        </Space>
        <div className="content_text">
          <TextField
            text={
              "iBall Basketball Foundation’s key goal is to provide a digital  platform for aspiring basketball players of all abilities, ages and sexes across the globe"
            }
          />
        </div>
      </Space>
      <div>
        <Image
          src={banner}
          sizes="(min-width: 480px ) 50vw,
          (min-width: 728px) 33vw,
          (min-width: 976px) 25vw,
          100vw"
          alt="logo"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default CommonBanner;
