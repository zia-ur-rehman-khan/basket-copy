import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Divider } from "antd";
import CommonTextField from "components/common/TextField";
import CommonButton from "components/common/Button";
import { Space } from "antd";
import CommonCard from "components/common/card";
import { useRouter } from "next/router";

const EventCard = ({ data }) => {
  const { push } = useRouter();
  const { src, title, url } = data;

  const handelRoute = (url) => {
    push(`event/${url}`);
  };
  return (
    <Space
      direction="vertical"
      className="event-card p-3 c-pointer"
      onClick={() => handelRoute(url)}
    >
      <Space size={20} direction="vertical" align="center">
        <div className="event-icon-background">
          <Image src={src} width={40} height={40} alt="Picture of the author" />
        </div>
        <CommonTextField text={title} fontSize="23px" fontWeight="600" />
        <CommonTextField
          fontSize={"14px"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
        />
      </Space>
      <CommonButton width={"100%"} child="Add to Wishlist" />
    </Space>
  );
};

export default EventCard;
