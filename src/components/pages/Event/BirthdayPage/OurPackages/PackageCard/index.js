import { Space } from "antd";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import Image from "next/image";
import React from "react";
import tick from "public/event/birthdayTick.svg";
import CommonButton from "components/common/Button";

const PacakgeCard = ({ data }) => {
  const { type, heading, actualPrice, price, get, size } = data;

  return (
    <div
      className={`radius c-pointer  package-card-parent ${
        type == "Most Popular" ? "package-color-card" : "package-card"
      }`}
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Space size={size} direction="vertical">
        <CommonButton
          child={type}
          classname={"grey"}
          className="text-uppercase"
          fontSize="9px"
          width="89px"
        />
        <Commonheading level={3} heading={heading} />
        <Space>
          <Commonheading heading={price} color="#4DC3D1" />
          <Commonheading
            level={3}
            heading={<strike>{actualPrice}</strike>}
            color={`${type == "Most Popular" ? "#DADDE2" : "#4DC3D1"}`}
          />
        </Space>
        <CommonTextField
          text="What You will get"
          className={`${type != "Most Popular" && "black"}`}
          fontWeight={"bold"}
          fontSize={"16px"}
        />

        {get.map((t, i) => (
          <>
            <Space align="baseline" key={i}>
              <Image
                src={tick}
                alt="Picture of the author"
                width={12}
                height={12}
              />
              <Space direction="vertical">
                <CommonTextField
                  text={t}
                  className={`${type != "Most Popular" && "black"}`}
                />
              </Space>
            </Space>
          </>
        ))}
        <CommonButton child={"Buy Now"} width={"100%"} />
      </Space>
    </div>
  );
};

export default PacakgeCard;
