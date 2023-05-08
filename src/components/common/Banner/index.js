import { Space } from "antd";
import Image from "next/image";
import Commonheading from "components/common/Heading";
import TextField from "components/common/TextField";
import React from "react";
import CommonButton from "../Button";

const CommonBanner = ({
  text1,
  Component,
  heading,
  content,
  src,
  showButton,
}) => {
  return (
    <div className="banner-image">
      <Space className="banner-content">
        <TextField text={text1} fontSize="22px" className={"text-uppercase"} />

        {heading ? <Commonheading heading={heading} /> : Component}

        <div className="content-text">
          <TextField text={content} />
        </div>
        {showButton && (
          <CommonButton
            child={"Learn More"}
            height={"37.5px"}
            width="140px"
            classname={"mt-2"}
          />
        )}
      </Space>
      <div>
        <div className="radial-background"></div>

        <Image src={src} alt="logo" priority={true} />
      </div>
    </div>
  );
};

export default CommonBanner;
