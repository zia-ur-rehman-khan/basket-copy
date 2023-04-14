import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/card";
import Image from "next/image";
import React from "react";

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
