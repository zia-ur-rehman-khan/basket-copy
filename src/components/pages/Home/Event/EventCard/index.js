import React from "react";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import CommonCard from "components/common/Card";
import { Space } from "antd";
import { Divider } from "antd";
import CommonButton from "components/common/Button";
import time from "public/event/time.svg";
import calender from "public/event/calender.svg";
import dollar from "public/event/dollar.svg";
import { useRouter } from "next/router";

const EventCard = ({ src }) => {
  const { push, asPath, pathname, query } = useRouter();

  const { type } = query;

  const cardDetailes = (t) => {
    push(
      {
        pathname: "/event/[type]/[id]",
        query: { type, t },
      },
      `/event/${type}/${t}`
    );
  };

  return (
    <CommonCard
      onClick={() => cardDetailes(10)}
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
              className="black"
              fontSize="23px"
              fontWeight="600"
            />
            <CommonTextField
              className="black"
              text="Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor incididunt."
            />
            <Space style={{ width: "100%" }} align="baseline">
              <Space>
                <Image src={time} width={22} height={22} alt="time" />
                <CommonTextField
                  fontSize={"16px"}
                  className="black"
                  text="05:30 Pm"
                />
              </Space>
              <Space>
                <Image src={calender} width={19} height={22} alt="time" />
                <CommonTextField
                  className="black"
                  text="24 Nov 2022"
                  fontSize={"16px"}
                />
              </Space>
              <Space>
                <Image src={dollar} width={32} height={19} alt="time" />
                <CommonTextField
                  className="black"
                  text="$32"
                  fontSize={"16px"}
                />
              </Space>
            </Space>
            <CommonButton width={"100%"} child="Learn More" />
          </Space>
        </>
      }
    />
  );
};

export default EventCard;
