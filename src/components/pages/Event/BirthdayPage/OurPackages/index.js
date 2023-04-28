import { Carousel } from "antd";
import { Space } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import React from "react";
import PacakgeCard from "./PackageCard";
import CommonCarousal from "components/common/Carousal";
import { data } from "./packageContent";

const OurPackages = () => {
  const temp = [1, 2, 3];
  return (
    <div>
      <Commonheading
        level={2}
        className={"mb-4"}
        heading={"Our Birthday Packages"}
      />
      <CommonCarousal>
        {temp.map((t) => {
          return data.map((t, index) => <PacakgeCard data={t} key={index} />);
        })}
      </CommonCarousal>
    </div>
  );
};

export default OurPackages;
