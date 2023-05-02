import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Card = ({ data }) => {
  const { src, title, url } = data;
  const { push } = useRouter();

  const handelRoute = () => {
    push(url);
  };

  return (
    <Space direction="vertical" align="center">
      <Image src={src} alt="Picture of the author" />
      <CommonTextField
        text={title}
        className="text-primary c-pointer"
        onClick={handelRoute}
      />
    </Space>
  );
};

export default Card;
