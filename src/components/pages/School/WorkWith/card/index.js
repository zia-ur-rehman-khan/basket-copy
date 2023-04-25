import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import CommonCard from "components/common/Card";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const WorkWithCard = ({ src, partner }) => {
  const { push } = useRouter();

  const handelRoute = (t) => {
    if (!partner) push(`school/${t}`);
  };

  return (
    <CommonCard
      onClick={() => handelRoute(10)}
      child={
        <Image src={src} alt="Picture of the author" width={432} height={292} />
      }
    />
  );
};

export default WorkWithCard;
