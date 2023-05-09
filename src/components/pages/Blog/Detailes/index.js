import Image from "next/image";
import React from "react";
import banner from "public/blog/blogDetailesBanner.png";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import data from "json/staticData.json";

const BlogDetailes = () => {
  return (
    <>
      <Image src={banner} alt="logo" priority={true} />
      <div className="common-padding">
        <CommonHeading
          fontSize={"37px"}
          heading={
            "Lorem ipsum dolor sit amet, consecte adipiscing elit, 0 sed do eiusmod"
          }
          className={"mb-5"}
          width="80%"
        />
        <CommonTextField text={data?.blog1} />
      </div>
    </>
  );
};

export default BlogDetailes;
