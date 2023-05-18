import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { Divider } from "antd";

const IballerCard = ({ src }) => {
  const { push, asPath, pathname, query } = useRouter();

  const { detailes } = query;

  const handelRoute = (t) => {
    push(
      {
        pathname: "/school/[detailes]/[id]",
        query: { detailes, t },
      },
      `/school/${detailes}/${t}`
    );
  };

  return (
    <CommonCard
      onClick={() => handelRoute(10)}
      child={
        <>
          <div>
            <Image
              src={src.url}
              alt="Picture of the author"
              width={432}
              height={335}
            />
          </div>
          <Space className="p-2" size={11} align="center" direction="vertical">
            <CommonTextField
              text={src.number}
              className={"black"}
              fontSize={"32px"}
              fontWeight={"bold"}
            />
            <Divider style={{ borderColor: "#000000", width: "200px" }} />
            <CommonTextField
              text={src.title}
              className={"black"}
              fontSize={"32px"}
              fontWeight={"bold"}
            />
          </Space>
        </>
      }
    />
  );
};

export default IballerCard;
