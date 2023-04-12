import React from "react";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import CommonCard from "components/common/card";
import { Space } from "antd";
import { Divider } from "antd";
import CommonButton from "components/common/Button";
import time from "public/event/time.svg";
import calender from "public/event/calender.svg";

const MeetCard = ({ src }) => {
  return (
    <CommonCard
      child={
        <>
          <div>
            <Image
              src={src}
              alt="Picture of the author"
              width={432}
              height={335}
            />
          </div>
          <Space className="p-2" size={11} align="center" direction="vertical">
            <CommonTextField
              text={"William Lawmann"}
              className={"black"}
              fontSize={"32px"}
              fontWeight={"bold"}
            />
            <CommonTextField text={"Founder"} className={"black"} />
          </Space>
        </>
      }
    />
  );
};

export default MeetCard;
