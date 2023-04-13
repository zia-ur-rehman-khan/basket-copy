import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Divider } from "antd";
import CommonTextField from "components/common/TextField";
import CommonButton from "components/common/Button";
import { Space } from "antd";
import CommonCard from "components/common/card";

const EventCard = ({ image, style }) => {
  const { src, width, height } = image;
  return (
    <div className="event-card">
      <Space className="p-3" size={11} direction="vertical">
        <div>
          <Image src={src} width={40} height={40} alt="Picture of the author" />
        </div>
        <CommonTextField text="School " fontSize="23px" fontWeight="600" />
        <CommonTextField
          fontSize={"14px"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
        />
        <CommonButton width={"100%"} child="Add to Wishlist" />
      </Space>
    </div>
  );
};

export default EventCard;
