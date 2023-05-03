import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";

const MeetCard = ({ data }) => {
  const { src, name, designation } = data;

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
              text={name}
              className={"black"}
              fontSize={"24.6px"}
              fontWeight={"bold"}
            />
            <CommonTextField
              text={designation}
              className={"black"}
              fontSize={"18.75"}
              fontWeight={"bold"}
            />
          </Space>
        </>
      }
    />
  );
};

export default MeetCard;
