import { Space } from "antd";
import CommonBanner from "components/common/Banner";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import ImageContent from "components/common/ImageWithContent";
import CommonTextField from "components/common/TextField";
import contentImage from "public/about/contentImage.png";
import banner from "public/event/eventDetailes.png";
import MemberShip from "../../../common/Button/MemberShip";
import React from "react";
import OurEvents from "../Event/OurEvents";
import OtherEvents from "./OtherEvents";
import data from "json/staticData.json";
import Image from "next/image";
import dollar from "public/event/dollar.svg";
import time from "public/event/time.svg";
import location from "public/event/location.svg";
import calender from "public/event/calender.svg";
import { useRouter } from "next/router";

const EventDetailes = () => {
  const { push } = useRouter();

  const register = () => {
    push("/register");
  };
  return (
    <>
      <CommonBanner
        heading={"Lorem ipsum dolor sit amet"}
        text1={"Event details"}
        src={banner}
      />

      <ImageContent
        className={"align-items-start"}
        responsive={{
          imageSmall: 24,
          imagelarge: 12,
          contentSmall: 24,
          contentlarge: 10,
        }}
        component={
          <>
            <Space direction="vertical" size={20}>
              <Commonheading level={2} heading={"Event Description"} />
              <CommonTextField fontSize={"16px"} text={data.detailesText} />
              <CommonTextField fontSize={"16px"} text={data.detailesText2} />
            </Space>
          </>
        }
        content={
          <Space size={20} direction="vertical" style={{ width: "100%" }}>
            <Commonheading level={2} heading={"Other Details"} />
            <CommonTextField
              fontSize="20px"
              fontWeight={600}
              text="Date & Time"
            />
            <Space size={40}>
              <Space align="start">
                <Image src={time} width={22} height={22} alt="time" />
                <CommonTextField fontSize={"16px"} text="Time : 05:30 Pm" />
              </Space>
              <Space align="start">
                <Image src={calender} width={22} height={22} alt="time" />
                <CommonTextField text="Date : 24 Nov 2022" fontSize={"16px"} />
              </Space>
            </Space>
            <Space align="start">
              <Image src={location} width={19} height={22} alt="time" />
              <CommonTextField
                text="539 Foster Rd.Goshen, IN 46526"
                fontSize={"16px"}
              />
            </Space>
            <Space align="start">
              <Image src={dollar} width={25} height={19} alt="time" />
              <CommonTextField text="Fee : $400" fontSize={"16px"} />
            </Space>
            <CommonTextField
              fontSize="20px"
              fontWeight={600}
              text="This Event is for"
            />
            <Space direction="vertical">
              <Space>
                <CommonTextField
                  fontSize="20px"
                  fontWeight={600}
                  text="Bantams:"
                />
                <CommonTextField text="Age 6 - 12 (Sundays 10:30 - 13:00) " />
              </Space>
              <Space>
                <CommonTextField
                  fontSize="20px"
                  fontWeight={600}
                  text="Junior Age:"
                />
                <CommonTextField text="13-18 (Fridays 17:00 - 19:00)  " />
              </Space>
              <Space>
                <CommonTextField
                  fontSize="20px"
                  fontWeight={600}
                  text="Senior Age:"
                />
                <CommonTextField text="18 + (Sunday 17:00 - 19:00)  " />
              </Space>
            </Space>
            <CommonButton
              child={"Register Now"}
              onClick={() => register()}
              width={"100%"}
            />
          </Space>
        }
      />
      <div className="common-padding">
        <OtherEvents />
      </div>
    </>
  );
};

export default EventDetailes;
