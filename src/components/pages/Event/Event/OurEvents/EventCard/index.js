import { Space } from "antd";
import CommonButton from "components/common/Button";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Icon from "public/svg/ClubIcon";

const EventCard = ({ data, academy }) => {
  const { push } = useRouter();
  const { icon, title, url } = data;

  const handelRoute = (url) => {
    if (academy) {
      push(`${url}`);
    } else {
      push(`event/${url}`);
    }
  };
  return (
    <Space
      direction="vertical"
      className="event-card p-3 c-pointer"
      onClick={() => handelRoute(url)}
    >
      <Space size={20} direction="vertical" align="center">
        <div className="event-icon-background">{icon}</div>
        <CommonTextField text={title} fontSize="23px" fontWeight="600" />
        <CommonTextField
          fontSize={"14px"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
        />
      </Space>
      <CommonButton child="View Details" />
    </Space>
  );
};

export default EventCard;
