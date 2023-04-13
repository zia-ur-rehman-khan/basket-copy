import React from "react";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import CommonCard from "components/common/card";
import { Space } from "antd";
import { Divider } from "antd";
import CommonButton from "components/common/Button";
import time from "public/event/time.svg";
import calender from "public/event/calender.svg";

const EventCard = ({ src }) => {
  return (
    <CommonCard
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
            <Space size={40}>
              <Space>
                <Image src={time} width={22} height={22} alt="time" />
                <CommonTextField className="black" text="05:30 Pm" />
              </Space>
              <Space>
                <Image src={calender} width={19} height={22} alt="time" />
                <CommonTextField className="black" text="24 Nov 2022" />
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