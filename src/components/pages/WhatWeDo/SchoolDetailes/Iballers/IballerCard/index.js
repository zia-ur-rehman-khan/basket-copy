import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { Divider } from "antd";

const IballerCard = ({ src }) => {
  const { push, asPath, pathname, query } = useRouter();

  const { region, detail } = query;

  const handelRoute = (t) => {
    push(
      {
        pathname: "/what-we-do/[region]/[id]/[id]",
        query: { region, detail, t },
      },
      `/what-we-do/${region}/${detail}/${t}`
    );
  };

  return (
    <CommonCard
      onClick={() => handelRoute(10)}
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
              text={"00"}
              className={"black"}
              fontSize={"32px"}
              fontWeight={"bold"}
            />
            <Divider style={{ borderColor: "#000000", width: "200px" }} />
            <CommonTextField
              text={"Russ"}
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
