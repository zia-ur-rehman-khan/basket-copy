import React from "react";
import image from "public/withUs/img1.png";
import { Space } from "antd";
import Image from "next/image";
import CommonTextField from "components/common/TextField";

const Card = ({ src }) => {
  return (
    <Space className="c-pointer" direction="vertical" align="center">
      <Image src={src} alt="Picture of the author" width={333} height={240} />
      <CommonTextField text="Coaches" className="text-primary" />
    </Space>
  );
};

export default Card;
