import { Col, Row } from "antd";
import TempImage from "public/product/product1.png";

import { Radio } from "antd";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import React from "react";
import { useRouter } from "next/router";
import CommonTextField from "components/common/TextField";
import { Space } from "antd";
import Image from "next/image";
import visa from "public/product/visa.png";
import { Divider } from "antd";

const Index = () => {
  const { push, query } = useRouter();

  const handelRoute = () => {
    push({
      pathname: "register",
      query: {
        ...query,
        t: "payment",
        m: "member",
      },
    });
  };

  const array = [visa, visa];

  return (
    <Space direction="vertical w-100" size={20}>
      <Space direction="vertical w-100">
        <CommonTextField
          text="Payment Details"
          fontWeight={600}
          fontSize={"18px"}
        />
        <div
          style={{ background: "#1D1D1D", borderRadius: "9px" }}
          className="p-3"
        >
          <Space className="justify-content-between w-100 p-2">
            <Space size={20}>
              <Image src={visa} width={72} height={40.5} alt="" />
              <Space direction="vertical">
                <Commonheading level={5} heading="My Personal Card" />
                <Commonheading level={5} heading="**** **** **** 1239" />
              </Space>
            </Space>

            <Radio></Radio>
          </Space>

          <Divider
            style={{ opacity: "0.29", borderTop: " 1px solid #707070" }}
          />

          <Space className="justify-content-between w-100 p-2">
            <Space size={20}>
              <Image src={visa} width={72} height={40.5} alt="" />
              <Space direction="vertical">
                <Commonheading level={5} heading="My Personal Card" />
                <Commonheading level={5} heading="**** **** **** 1239" />
              </Space>
            </Space>
            <Radio></Radio>
          </Space>
        </div>
      </Space>

      <CommonButton
        width={"100%"}
        child="Add New Payment"
        background={"#1D1D1D"}
        color={"#FF6600"}
        border={"1px solid #FF6600"}
        onClick={handelRoute}
      />
    </Space>
  );
};

export default Index;
