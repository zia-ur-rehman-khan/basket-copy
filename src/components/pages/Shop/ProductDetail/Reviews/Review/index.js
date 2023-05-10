import React from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

import CommonCard from "components/common/Card";
import profile from "public/product/profile.png";

import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import Image from "next/image";
import CommonTextField from "components/common/TextField";

const Index = () => {
  return (
    <>
      <CommonCard
        style={{ margin: "0 9px" }}
        child={
          <>
            <Card
              cover={
                <div
                  className="review_content"
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum consectetur libero id faucibus nisl
                    tincidunt eget nullam.
                  </p>
                </div>
              }
            >
              <Meta
                style={{ paddingLeft: "10px" }}
                avatar={
                  <Image src={profile} alt="profile" width={33} height={33} />
                }
                title={
                  <CommonTextField
                    text={"Andy Smith"}
                    fontWeight={600}
                    className={"black"}
                    fontSize={"14px"}
                  />
                }
                description={
                  <CommonTextField
                    text={"VP Of Marketing"}
                    fontSize={"11px"}
                    color="#5F5F5F"
                    letterSpacing={"1px"}
                  />
                }
              />
            </Card>
          </>
        }
      />
    </>
  );
};

export default Index;
