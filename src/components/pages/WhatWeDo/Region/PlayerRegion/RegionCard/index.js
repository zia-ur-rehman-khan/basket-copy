import CommonCard from "components/common/Card";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const RegionCard = ({ src }) => {
  const { push, asPath, pathname, query } = useRouter();

  const { region } = query;

  const handelRoute = (t) => {
    push(
      {
        pathname: "/what-we-do/[region]/[id]",
        query: { region, t },
      },
      `/what-we-do/${region}/${t}`
    );
  };
  return (
    <CommonCard
      onClick={() => handelRoute(10)}
      child={
        <>
          <Image src={src} alt="Picture of the author" />

          <CommonTextField
            text={"View Coaches"}
            color="#4DC3D1"
            className={"p-2 mt-5"}
          />
        </>
      }
    />
  );
};

export default RegionCard;
