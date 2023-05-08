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

const EventCard = ({ src, styling, price }) => {
  const { push, asPath, pathname, query } = useRouter();

  const { type } = query;

  const handelRoute = (t) => {
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
      style={styling}
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
          <Space style={{ padding: "13.5px" }} size={11} direction="vertical">
            <Divider />
            <CommonTextField
              text="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod"
              className="black card-title"
            />
            <CommonTextField
              className="black"
              text="Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor incididunt."
            />
            <Space style={{ width: "100%" }} size={!price ? 30 : 5}>
              <Space className="align-items-start">
                <Image src={time} width={16.5} height={16.5} alt="time" />
                <CommonTextField className="black" text="05:30 Pm" />
              </Space>
              <Space className="align-items-start">
                <Image src={calender} width={14.25} height={16.5} alt="time" />
                <CommonTextField className="black" text="24 Nov 2022" />
              </Space>
              {price && (
                <Space className="align-items-start">
                  <Image src={dollar} width={24} height={14.25} alt="time" />
                  <CommonTextField className="black" text="$32" />
                </Space>
              )}
            </Space>
            <CommonButton child="Learn More" onClick={() => handelRoute(10)} />
          </Space>
        </>
      }
    />
  );
};

export default EventCard;
