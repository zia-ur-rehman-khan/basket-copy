import React from "react";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import CommonCard from "components/common/Card";
import { Space } from "antd";
import { Divider } from "antd";
import CommonButton from "components/common/Button";
import { useRouter } from "next/router";

const BlogCard = ({ src }) => {
  const { push } = useRouter();

  const handelRoute = (t) => {
    push(`blog/${t}`);
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
              height={304}
            />
          </div>
          <Space className="p-2" size={11} direction="vertical">
            <Divider />
            <CommonTextField
              text="Basketball with Net and Ring for Home and Outdoors"
              className="black card-title"
            />
            <CommonTextField
              className="black"
              text="Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor incididunt."
            />

            <CommonButton width={"100%"} child="Learn More" />
          </Space>
        </>
      }
    />
  );
};

export default BlogCard;
